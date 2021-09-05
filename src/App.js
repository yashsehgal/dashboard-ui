import React from 'react'

import { BrowserRouter, Route } from "react-router-dom";
import "./styled-components/index.css";
import Sidebar from "./styled-components/section-components/Sidebar";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Projects from "./views/Projects";
import Teams from "./views/Teams";

export default class App extends React.Component {
  render () {
    return (
      <div className='view__app'>
        {/* sidebar */}
        <Sidebar />

        <div className='app-wrapper'>
          {/* setting up routers using hash-router */}
          <BrowserRouter>
            {/* routes for home-view / dashboard-view */}
            <Route path="/" exact component={Dashboard} />
            <Route path="/home" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            {/* route for projects view */}
            <Route path="/projects" exact component={Projects} />
            {/* route for teams view */}
            <Route path="/teams" exact component={Teams} />
            {/* route for profile view */}
            <Route path="/profile" exact component={Profile} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
