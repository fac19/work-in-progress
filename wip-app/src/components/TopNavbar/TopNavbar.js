import React from "react";
import AddProjectPage from "../../pages/AddProjectPage/AddProjectPage";
import LandingPage from "../../pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopNavbarStyle, TopNavbarUlStyle } from "./TopNavbar.style";
import { MainWrapper } from "../../pages/page.style";

const TopNavbar = (props) => {
  return (
    <Router>
      <header>
        <TopNavbarStyle>
          <TopNavbarUlStyle>
            <li>
              <Link to="/new-project">Add new project</Link>
            </li>
            <li>WIP</li>
            <li>
              <Link to="/sign-out">Sign Out</Link>
            </li>
          </TopNavbarUlStyle>
        </TopNavbarStyle>
      </header>
      <Switch>
        <Route path="/new-project">
          <MainWrapper>
            <AddProjectPage />
          </MainWrapper>
        </Route>
        <Route path="/sign-out">
          <MainWrapper>
            <LandingPage />
          </MainWrapper>
        </Route>
      </Switch>
    </Router>
  );
};

export default TopNavbar;
