import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  TopNavbarStyle,
  TopNavbarUlStyle,
  TopNavbarLiStyle,
} from "./TopNavbar.style";
import { NavbarLogoStyle } from "../../components/Logo.style";

const useStyles = makeStyles({
  links: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#dc004e",
    },
  },
});

const TopNavbar = () => {
  const classes = useStyles();

  function signOutClick() {
    localStorage.removeItem("auth");
  }

  return (
    <header>
      <TopNavbarStyle>
        <TopNavbarUlStyle>
          <TopNavbarLiStyle>
            <AddIcon />
            <Link to="/new-project" className={classes.links}>
              Add project
            </Link>
          </TopNavbarLiStyle>
          <NavbarLogoStyle alt="work in progress logo" src="logo.svg" />
          <TopNavbarLiStyle onClick={signOutClick}>
            <ExitToAppIcon />
            <Link to="/" className={classes.links}>
              Sign Out
            </Link>
          </TopNavbarLiStyle>
        </TopNavbarUlStyle>
      </TopNavbarStyle>
    </header>
  );
};

export default TopNavbar;
