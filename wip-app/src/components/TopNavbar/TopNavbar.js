import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { TopNavbarStyle, TopNavbarUlStyle } from "./TopNavbar.style";

const TopNavbar = (props) => {
  return (
    <Router>
      <header>
        <TopNavbarStyle>
          <TopNavbarUlStyle>
            <li>
              <a href="/new-project">Add new project</a>
            </li>
            <li>WIP</li>
            <li>
              <a href="/sign-out">Sign Out</a>
            </li>
          </TopNavbarUlStyle>
        </TopNavbarStyle>
      </header>
    </Router>
  );
};

export default TopNavbar;
