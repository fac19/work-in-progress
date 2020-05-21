import React from "react";
import { Link } from "react-router-dom";
import { TopNavbarStyle, TopNavbarUlStyle } from "./TopNavbar.style";

const TopNavbar = ({ setLoggedIn }) => {
  return (
    <header>
      <TopNavbarStyle>
        <TopNavbarUlStyle>
          <li>
            <Link to="/new-project">Add new project</Link>
          </li>
          <li>WIP</li>
          <li>
            <Link to="/sign-out" onClick={() => setLoggedIn(false)}>
              Sign Out
            </Link>
          </li>
        </TopNavbarUlStyle>
      </TopNavbarStyle>
    </header>
  );
};

export default TopNavbar;
