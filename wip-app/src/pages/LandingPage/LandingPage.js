import React from "react";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div>
      <h1>Work In Progress</h1>
      <ul>
        <li>
          <Link to="/log-in">Log In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
