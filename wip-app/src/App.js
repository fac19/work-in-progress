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
import { MainWrapper } from "./pages/page.style";

const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/sign-up">
            <SignUpForm />
          </Route>
          <Route path="/log-in">
            <LogInForm />
          </Route>
          <Route path="/new-project">
            <TopNavbar />
            <AddProjectPage />
            <BottomNavbar />
          </Route>
          <Route path="/sign-out"></Route>
          <Route path="/feed">
            <TopNavbar />
            <FeedPage />
            <BottomNavbar />
          </Route>
          <Route path="/profile">
            <TopNavbar />
            <UserPage />
            <BottomNavbar />
          </Route>
          <Route path="/notifications">
            <TopNavbar />
            <NotificationPage />
            <BottomNavbar />
          </Route>
          <Route path="/explore">
            <TopNavbar />
            <ExplorePage />
            <BottomNavbar />
          </Route>
          <Route path="/project">
            <TopNavbar />
            <ProjectPage />
            <BottomNavbar />
          </Route>
          <Route path="/step">
            <TopNavbar />
            <StepPage />
            <BottomNavbar />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;
