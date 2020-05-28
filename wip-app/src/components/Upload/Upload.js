import React, { Component } from "react";
import Dropzone from "../Dropzone/Dropzone";
import Progress from "../Progress/Progress";
import getB64 from "../../utils/b64";
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
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState((prevState) => ({
      files: prevState.files.concat(files),
    }));
  }

  async uploadFiles(setStepLink) {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    // For multiple file upload
    // this.state.files.forEach((file) => {
    //   promises.push(this.sendRequest(file));
    // });
    const firstFile = this.state.files[0];
    console.log("Upload -> uploadFiles -> firstFile", firstFile);
    promises.push(getB64(firstFile));

    try {
      await Promise.all(promises);
      setStepLink(getB64(firstFile));

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: false, uploading: false });
    }
  }

  // For progress bar
  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <ProgressWrapper>
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <CheckIcon
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
      <UploadDiv>
        <Title>Upload Files</Title>
        <ContentDiv>
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <FilesDiv>
            {this.state.files.map((file) => {
              return (
                <Row key={file.name}>
                  <Filename>{file.name}</Filename>
                  {this.renderProgress(file)}
                </Row>
              );
            })}
          </FilesDiv>
        </ContentDiv>
        <Actions>{this.renderActions()}</Actions>
      </UploadDiv>
    );
  }
}

export default Upload;
