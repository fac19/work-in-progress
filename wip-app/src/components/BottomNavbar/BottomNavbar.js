import React from "react";
import { Link } from "react-router-dom";
import { BottomNavbarStyle, BottomNavbarUlStyle } from "./BottomNavbar.style";

const BottomNavbar = (props) => {
  return (
    <footer>
      <BottomNavbarStyle>
        <BottomNavbarUlStyle>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
        </BottomNavbarUlStyle>
      </BottomNavbarStyle>
    </footer>
  );
};

export default BottomNavbar;
