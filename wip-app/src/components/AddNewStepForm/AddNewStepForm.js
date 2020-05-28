import React from "react";
import { Button } from "@material-ui/core";
import { NewStepSection, NewStepForm } from "./AddNewStepForm.style";

const AddNewStepForm = (props) => {
  return (
    <NewStepSection>
      <h2>Add Step to Project</h2>
      <NewStepForm>
        <label htmlFor="step_name">Step Name</label>
        <input type="text" id="step_name" name="step_name" required></input>
        <label htmlFor="step_description">Step Description</label>
        <input
          type="text"
          id="step_description"
          name="step_description"
          required
        ></input>
        <label htmlFor="step_link">Step Media Link</label>
        <input type="text" id="step_link" name="step_link" required></input>
        <Button variant="contained" color="primary" type="submit">
          Save Step To Project
        </Button>
      </NewStepForm>
    </NewStepSection>
  );
};

export default AddNewStepForm;
