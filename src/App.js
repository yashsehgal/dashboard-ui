import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styled-components/index.css";
import Sidebar from "./styled-components/section-components/Sidebar";
import Chats from "./views/Chats";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Projects from "./views/Projects";
import Teams from "./views/Teams";
import "animate.css";
import PageNotFound from "./views/PageNotFound";

export default class App extends React.Component {
  render() {
    return (
      <div className="view__app">
        <div className="funny-alert-view-msg">
          <h1>Your expectations are reaching sky-heights :)</h1>
          <p>Try switching to landscape/desktop mode for proper usage</p>
        </div>
        <div className="view__app-container">
          {/* sidebar */}
          <Sidebar />
          <div className="app-wrapper">
            {/* setting up routers using hash-router */}
            <BrowserRouter>
              <Switch>
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
                {/* route for chat view */}
                <Route path="/chats" exact component={Chats} />
                <Route component={PageNotFound} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}
