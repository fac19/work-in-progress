import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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

let authorised = localStorage.getItem("auth");

function ProtectedRoute({ path, component }) {
  if (authorised) {
    return (
      <Route path={path}>
        <TopNavbar />
        {component}
        <BottomNavbar />
      </Route>
    );
  } else if (!authorised && path === "*") {
    return <MissingPage />;
  } else if (!authorised) {
    return <Redirect to="/" />;
  }
}

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
          <ProtectedRoute path="/new-project" component={<AddProjectPage />} />
          <Route exact path="/sign-out"></Route>
          <ProtectedRoute path="/feed" component={<FeedPage />} />
          <ProtectedRoute path="/profile" component={<UserPage />} />
          <ProtectedRoute
            path="/notifications"
            component={<NotificationPage />}
          />
          <ProtectedRoute path="/explore" component={<ExplorePage />} />
          <ProtectedRoute path="/project" component={<ProjectPage />} />
          <ProtectedRoute path="/step" component={<StepPage />} />
          <Route exact path="/">
            <LandingPage />
          </Route>
          <ProtectedRoute path="*" component={<MissingPage />} />
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;
