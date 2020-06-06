import React from "react";
import { Button } from "@material-ui/core";
import { NewStepSection, NewStepForm } from "./AddNewStepForm.style";
// import Upload from "../Upload/Upload";
// import { postStep } from "../../utils/post-fetch";

const AddNewStepForm = (props) => {
  const [stepLink, setStepLink] = React.useState();

  React.useEffect(() => {
    console.log(stepLink);
  }, []);

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
        <label htmlFor="step_description">Step Link:</label>
        <input type="file" id="step_link" name="step_link" required></input>

        {/* <Upload setStepLink={setStepLink} /> */}
      </NewStepForm>
      <Button variant="contained" color="primary" type="submit">
        Save Step To Project
      </Button>
    </NewStepSection>
  );
};

export default AddNewStepForm;
