import React from "react";
import { Button } from "@material-ui/core";
import { AddProjectSection, AddProjectForm } from "./AddProjectPage.style";
import { useHistory } from "react-router-dom";
import { postAddProject } from "../../utils/post-fetch";

const AddProjectPage = (props) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = document.querySelector("form");
    const projectData = new FormData(form);

    postAddProject({
      project_name: projectData.get("project_name"),
      project_description: projectData.get("project_description"),
    })
      .then(() => history.push("/profile"))
      .catch((error) => console.error(error));
  };
  return (
    <AddProjectSection>
      <h1>Add New Project</h1>
      <AddProjectForm onSubmit={handleSubmit}>
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
        <Button variant="contained" color="primary" type="submit">
          Publish
        </Button>
      </AddProjectForm>
    </AddProjectSection>
  );
};

export default AddProjectPage;
