import React from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { logInPost } from "../../utils/post-fetch";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formElement: {
    margin: "0.5rem",
  },
});

const LogInForm = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const logInFormData = new FormData(form);

    logInPost({
      username: logInFormData.get("username"),
      password: logInFormData.get("password"),
    })
      .then(() => history.push("/feed"))
      .catch((error) => console.error(error));
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <h1>Log In</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Username *</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          name="username"
          required
          autoFocus
        ></input>
        <label htmlFor="password">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        ></input>
        <Button
          className={classes.formElement}
          variant="contained"
          color="primary"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LogInForm;
