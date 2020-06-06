import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const MissingPage = (props) => {
  let history = useHistory();
  return (
    <>
      <h1>Page Not Found</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </>
  );
};

export default MissingPage;
