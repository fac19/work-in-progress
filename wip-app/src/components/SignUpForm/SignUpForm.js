import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { signUpPost } from "../../utils/fetch";

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

const SignUpForm = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);

    signUpPost({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    }).then(() => history.push("/feed"));
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <h1>Sign Up</h1>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.formElement}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          className={classes.formElement}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          className={classes.formElement}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="password"
        />
        {/* <Link to="/feed"> */}
        <Button
          className={classes.formElement}
          variant="contained"
          color="primary"
          onClick={submitHandler}
        >
          Sign Up
        </Button>
        {/* </Link> */}
      </form>
    </Container>
  );
};

export default SignUpForm;
