import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import UserPage from "./pages/UserPage/UserPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import { MainWrapper } from "./pages/page.style";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      {loggedIn && (
        <>
          <TopNavbar setLoggedIn={setLoggedIn} />
          <BottomNavbar />
        </>
      )}

      {!loggedIn && <LandingPage setLoggedIn={setLoggedIn} />}

      <Switch>
        <Route path="/new-project">
          <MainWrapper>
            <AddProjectPage />
          </MainWrapper>
        </Route>
        <Route path="/sign-out"></Route>
        <Route path="/feed">
          <MainWrapper>
            <FeedPage />
          </MainWrapper>
        </Route>
        <Route path="/profile">
          <MainWrapper>
            <UserPage />
          </MainWrapper>
        </Route>
        <Route path="/notifications">
          <MainWrapper>
            <NotificationPage />
          </MainWrapper>
        </Route>
        <Route path="/explore">
          <MainWrapper>
            <ExplorePage />
          </MainWrapper>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
