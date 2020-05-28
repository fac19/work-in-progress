import React, { Component } from "react";
import Dropzone from "../Dropzone/Dropzone";
import Progress from "../Progress/Progress";
import {
  UploadDiv,
  ContentDiv,
  FilesDiv,
  Actions,
  Title,
  Filename,
  Row,
  CheckIcon,
  ProgressWrapper,
  Button,
} from "./Upload.style.js";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState((prevState) => ({
      files: prevState.files.concat(files),
    }));
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach((file) => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100,
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", (event) => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", (event) => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("file", file, file.name);

      req.open("POST", "http://localhost:8000/upload");
      req.send(formData);
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <ProgressWrapper>
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <CheckIcon
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0,
            }}
          />
        </ProgressWrapper>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <Button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </Button>
      );
    } else {
      return (
        <Button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
        </Button>
      );
    }
  }

  render() {
    return (
      <UploadDiv className="Upload">
        <Title className="Title">Upload Files</Title>
        <ContentDiv className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <FilesDiv className="Files">
            {this.state.files.map((file) => {
              return (
                <Row key={file.name} className="Row">
                  <Filename className="Filename">{file.name}</Filename>
                  {this.renderProgress(file)}
                </Row>
              );
            })}
          </FilesDiv>
        </ContentDiv>
        <Actions className="Actions">{this.renderActions()}</Actions>
      </UploadDiv>
    );
  }
}

export default Upload;
