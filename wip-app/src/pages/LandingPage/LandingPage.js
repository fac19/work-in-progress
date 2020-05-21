import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { LandingUlStyle, LandingLiStyle } from "./LandingPage.style";

const LandingPage = (props) => {
  return (
    <div>
      <h1>Work In Progress</h1>
      <LandingUlStyle>
        <LandingLiStyle>
          <Link to="/log-in">
            <Button variant="contained">Log In</Button>
          </Link>
        </LandingLiStyle>
        <LandingLiStyle>
          <Link to="/sign-up">
            <Button variant="contained">Sign Up</Button>
          </Link>
        </LandingLiStyle>
      </LandingUlStyle>
    </div>
  );
};

export default LandingPage;
