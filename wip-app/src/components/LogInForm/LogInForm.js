import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { logInPost } from "../../utils/fetch";

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
      emai: logInFormData.email,
      password: logInFormData.password,
    })
      .then(() => history.push("/feed"))
      .catch(console.error("LoginForm.js line 41"));
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <h1>Log In</h1>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
          autoFocus
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
          // onClick={handleSubmit}
        >
          Log In
        </Button>
        {/* </Link> */}
      </form>
    </Container>
  );
};

export default LogInForm;
