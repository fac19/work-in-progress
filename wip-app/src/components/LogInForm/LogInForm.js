import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <h1>Log In</h1>
      <form className={classes.form} noValidate autoComplete="off">
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
          autoComplete="password"
        />
        <Link to="/feed">
          <Button
            className={classes.formElement}
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </Link>
      </form>
    </Container>
  );
};

export default LogInForm;
