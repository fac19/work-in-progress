import React from "react"
import AddProjectPage from "../../pages/AddProjectPage/AddProjectPage"
import LandingPage from "../../pages/LandingPage/LandingPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { TopNavbarStyle, TopNavbarUlStyle } from "./TopNavbar.style"

const TopNavbar = (props) => {
  return (
    <Router>
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
      <Switch>
        <Route path="/new-project">
          <AddProjectPage />
        </Route>
        <Route path="/sign-out">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default TopNavbar
