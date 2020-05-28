import React from "react";
import { Link } from "react-router-dom";
import { TopNavbarStyle, TopNavbarUlStyle } from "./TopNavbar.style";

const TopNavbar = () => {
  function signOutClick() {
    localStorage.removeItem("auth");
  }

  return (
    <header>
      <TopNavbarStyle>
        <TopNavbarUlStyle>
          <li>
            <Link to="/new-project">Add new project</Link>
          </li>
          <li onClick={signOutClick}>
            <Link to="/">Sign Out</Link>
          </li>
        </TopNavbarUlStyle>
      </TopNavbarStyle>
    </header>
  );
};

export default TopNavbar;
