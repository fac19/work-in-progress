import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExploreIcon from "@material-ui/icons/Explore";

import {
  BottomNavbarStyle,
  BottomNavbarUlStyle,
  BottomNavbarLiStyle,
} from "./BottomNavbar.style";

const useStyles = makeStyles({
  links: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#dc004e",
    },
  },
});

const BottomNavbar = (props) => {
  const classes = useStyles();
  return (
    <footer>
      <BottomNavbarStyle>
        <BottomNavbarUlStyle>
          <BottomNavbarLiStyle>
            <AppsIcon />
            <Link to="/feed" className={classes.links}>
              Feed
            </Link>
          </BottomNavbarLiStyle>
          <BottomNavbarLiStyle>
            <PersonIcon />
            <Link to="/profile" className={classes.links}>
              Profile
            </Link>
          </BottomNavbarLiStyle>
          <BottomNavbarLiStyle>
            <NotificationsIcon />
            <Link to="/notifications" className={classes.links}>
              Notifications
            </Link>
          </BottomNavbarLiStyle>
          <BottomNavbarLiStyle>
            <ExploreIcon />
            <Link to="/explore" className={classes.links}>
              Explore
            </Link>
          </BottomNavbarLiStyle>
        </BottomNavbarUlStyle>
      </BottomNavbarStyle>
    </footer>
  );
};

export default BottomNavbar;
