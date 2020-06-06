import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LogInForm from "./components/LogInForm/LogInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import FeedPage from "./pages/FeedPage/FeedPage";
import UserPage from "./pages/UserPage/UserPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import StepPage from "./pages/StepPage/StepPage";
import MissingPage from "./pages/MissingPage/MissingPage";
import { MainWrapper } from "./pages/page.style";

const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route exact path="/sign-up">
            <SignUpForm />
          </Route>
          <Route exact path="/log-in">
            <LogInForm />
          </Route>
          <Route exact path="/new-project">
            <TopNavbar />
            <AddProjectPage />
            <BottomNavbar />
          </Route>
          <Route exact path="/sign-out"></Route>
          <Route exact path="/feed">
            <TopNavbar />
            <FeedPage />
            <BottomNavbar />
          </Route>
          <Route exact path="/profile">
            <TopNavbar />
            <UserPage />
            <BottomNavbar />
          </Route>
          <Route exact path="/notifications">
            <TopNavbar />
            <NotificationPage />
            <BottomNavbar />
          </Route>
          <Route exact path="/explore">
            <TopNavbar />
            <ExplorePage />
            <BottomNavbar />
          </Route>
          <Route exact path="/project">
            <TopNavbar />
            <ProjectPage />
            <BottomNavbar />
          </Route>
          <Route exact path="/step">
            <TopNavbar />
            <StepPage />
            <BottomNavbar />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="*">
            <MissingPage />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;
