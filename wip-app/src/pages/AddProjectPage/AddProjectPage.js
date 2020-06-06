import React from "react";
import { Button } from "@material-ui/core";
import { AddProjectSection, AddProjectForm } from "./AddProjectPage.style";
import { useHistory } from "react-router-dom";
import { postAddProject } from "../../utils/post-fetch";
import {
  FormInput,
  FormLabel,
} from "../../components/LogInForm/LogInForm.style";

const AddProjectPage = (props) => {
  const history = useHistory();
  const [form, setForm] = React.useState({
    project_name: "",
    project_description: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postAddProject(form)
      .then((data) => history.push("/project/" + data.id))
      .catch((error) => console.error(error));
  };
  return (
    <AddProjectSection>
      <h1>Add New Project</h1>
      <AddProjectForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="project_name">Project Name</FormLabel>
        <FormInput
          type="text"
          id="project_name"
          name="project_name"
          placeholder="Project name..."
          onChange={handleChange}
          required
        ></FormInput>
        <FormLabel htmlFor="project_description">Project Description</FormLabel>
        <FormInput
          type="text"
          id="project_description"
          name="project_description"
          placeholder="Project description..."
          onChange={handleChange}
          required
        ></FormInput>
        <Button variant="contained" color="secondary" type="submit">
          Publish
        </Button>
      </AddProjectForm>
    </AddProjectSection>
  );
};

export default AddProjectPage;
