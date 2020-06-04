import React from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { signUpPost } from "../../utils/post-fetch";
import { HeaderLogoStyle } from "../../components/Logo.style";
import {
  FormInput,
  FormLabel,
} from "../../components/LogInForm/LogInForm.style";
import { Link } from "react-router-dom";

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
  errorMessage: {
    color: "red",
  },
  link: {
    color: "#f50057",
  },
});

const SignUpForm = (props) => {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signUpPost(form, setError)
      .then(() => history.push("/feed"))
      .catch(console.error);
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <HeaderLogoStyle alt="work in progress logo" src="logo.svg" />
      <h1>Sign Up</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username *</FormLabel>
        <FormInput
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          required
          autoFocus
        ></FormInput>
        <FormLabel htmlFor="email">Email *</FormLabel>
        <FormInput
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        ></FormInput>
        <FormLabel htmlFor="password">Password *</FormLabel>
        <FormInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        ></FormInput>
        <Button
          className={classes.formElement}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <p className={classes.errorMessage}>{error}</p>
      <p>
        If you already have an account, please{" "}
        <Link to="/log-in" className={classes.link}>
          log in
        </Link>
      </p>
    </Container>
  );
};

export default SignUpForm;
