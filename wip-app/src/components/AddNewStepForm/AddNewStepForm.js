import React from "react";
import { Button } from "@material-ui/core";
import { NewStepSection, NewStepForm } from "./AddNewStepForm.style";
import { postAddStep } from "../../utils/post-fetch";
import { postImage } from "../../utils/ext-fetch";

const AddNewStepForm = ({ projectId }) => {
  const [form, setForm] = React.useState({
    step_name: "",
    step_description: "",
  });
  const [file, uploadFile] = React.useState({});
  const [isUploading, clickUpload] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpload = (event) => {
    uploadFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    clickUpload("file uploading...");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      postImage(reader.result)
        .then((data) => data.eager[0].url)
        .then((url) => {
          clickUpload("done!");
          postAddStep(projectId, form, url);
        })
        .then(() => window.location.reload(false))
        .catch(console.error);
    };
  };

  return (
    <NewStepSection>
      <h2>Add Step to Project</h2>
      <NewStepForm onSubmit={handleSubmit}>
        <label htmlFor="step_name">Step Name</label>
        <input
          type="text"
          id="step_name"
          name="step_name"
          onChange={handleChange}
          required
        />
        <label htmlFor="step_description">Step Description</label>
        <input
          type="text"
          id="step_description"
          name="step_description"
          onChange={handleChange}
          required
        />
        <label htmlFor="step_description">Step Link:</label>
        <input
          type="file"
          id="step_link"
          name="step_link"
          onChange={handleUpload}
          required
        />
        <Button variant="contained" color="secondary" type="submit">
          Save Step To Project
        </Button>
        <p>{isUploading}</p>
      </NewStepForm>
    </NewStepSection>
  );
};

export default AddNewStepForm;
