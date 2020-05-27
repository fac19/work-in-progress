import React from "react";
import { Button } from "@material-ui/core";
import { AddProjectSection, AddProjectForm } from "./AddProjectPage.style";
import AddNewStepForm from "../../components/AddNewStepForm/AddNewStepForm";

const AddProjectPage = (props) => {
  return (
    <AddProjectSection>
      <h1>Add New Project</h1>
      <AddProjectForm>
        <label htmlFor="project_name">Project Name</label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          required
        ></input>
        <label htmlFor="project_description">Project Description</label>
        <input
          type="text"
          id="project_description"
          name="project_description"
          required
        ></input>
        <AddNewStepForm />
        <Button variant="contained" color="primary" type="submit">
          Publish
        </Button>
      </AddProjectForm>
    </AddProjectSection>
  );
};

export default AddProjectPage;
