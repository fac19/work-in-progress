import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { MainWrapper } from "./pages/page.style";

const App = () => {
  return (
    <Router>
      <TopNavbar />

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

export default App;
