import React from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { logInPost } from "../../utils/post-fetch";
import { HeaderLogoStyle } from "../../components/Logo.style";
import { FormInput, FormLabel } from "./LogInForm.style";

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
      <HeaderLogoStyle alt="work in progress logo" src="logo.svg" />
      <h1>Log In</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username *</FormLabel>
        <FormInput
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          required
          autoFocus
        ></FormInput>
        <FormLabel htmlFor="password">Password *</FormLabel>
        <FormInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        ></FormInput>
        <Button
          className={classes.formElement}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LogInForm;
