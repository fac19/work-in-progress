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

function RouteType({ path, component }) {
  const authorised = localStorage.getItem("auth");
  if (authorised) {
    if (path === "/" || path === "/log-in" || path === "/sign-up") {
      return <Redirect to="/feed" />;
    }
    return (
      <Route path={path}>
        <TopNavbar />
        {component}
        <BottomNavbar />
      </Route>
    );
  } else {
    return <Route path={path}>{component}</Route>;
  }
}

const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <RouteType path="/sign-up" component={<SignUpForm />} />
          <RouteType path="/log-in" component={<LogInForm />} />
          <RouteType path="/new-project" component={<AddProjectPage />} />
          <RouteType path="/sign-out" />
          <RouteType path="/feed" component={<FeedPage />} />
          <RouteType path="/profile" component={<UserPage />} />
          <RouteType path="/notifications" component={<NotificationPage />} />
          <RouteType path="/explore" component={<ExplorePage />} />
          <RouteType path="/project" component={<ProjectPage />} />
          <RouteType path="/step" component={<StepPage />} />
          <RouteType exact path="/" component={<LandingPage />} />
          <Route path="*">
            <MissingPage />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;
