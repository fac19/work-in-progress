import React from "react";
import { Button } from "@material-ui/core";
import { NewStepSection, NewStepForm } from "./AddNewStepForm.style";
// import Upload from "../Upload/Upload";
import { postStep } from "../../utils/post-fetch";
import { postImage } from "../../utils/ext-fetch";
import getB64 from "../../utils/b64";

const AddNewStepForm = ({ projectId }) => {
  const [form, setForm] = React.useState({
    step_name: "",
    step_description: "",
    step_link: "",
  });
  const [file, uploadFile] = React.useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpload = (event) => {
    uploadFile(event.target.files[0]);
    console.log(
      "AddNewStepForm -> event.target.files[0]",
      event.target.files[0]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getB64(file)
      .then(postImage)
      .then((data) => setForm({ ...form, [step_link]: data.value }));
    console.log(form);
    // upload media to cloudinary
    // then save new step_link into form
    // post request add new step
    // history.push("/project/projectId"))
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

        {/* <Upload setStepLink={setStepLink} /> */}
        <Button variant="contained" color="secondary" type="submit">
          Save Step To Project
        </Button>
      </NewStepForm>
    </NewStepSection>
  );
};

export default AddNewStepForm;
