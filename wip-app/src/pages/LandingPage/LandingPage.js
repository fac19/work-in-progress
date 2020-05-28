import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  LandingUlStyle,
  LandingLiStyle,
  LandingSectionStyle,
} from "./LandingPage.style";
import { HeaderLogoStyle } from "../../components/Logo.style";

const useStyles = makeStyles({
  buttons: {
    width: "8rem",
  },
  links: {
    textDecoration: "none",
  },
});

const LandingPage = (props) => {
  const classes = useStyles();
  return (
    <LandingSectionStyle>
      <HeaderLogoStyle alt="work in progress logo" src="logo.svg" />
      <h1>Work In Progress</h1>
      <p>
        A social media platform for creatives to receive feedback on their works
        in progress
      </p>
      <LandingUlStyle>
        <LandingLiStyle>
          <Link to="/log-in" className={classes.links}>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
          </Link>
        </LandingLiStyle>
        <LandingLiStyle>
          <Link to="/sign-up" className={classes.links}>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
            >
              Sign Up
            </Button>
          </Link>
        </LandingLiStyle>
      </LandingUlStyle>
    </LandingSectionStyle>
  );
};

export default LandingPage;
