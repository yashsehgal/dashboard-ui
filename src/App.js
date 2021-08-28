import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './styled-components/index.css';
import Dashboard from './views/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* setting up routers using hash-router */}
        <HashRouter basename="/">
          {/* routes for home-view / dashboard-view */}
          <Route 
            path="/"
            exact component={Dashboard}
          />
          <Route
            path="/home"
            exact component={Dashboard}
          />
          <Route
            path="/dashboard"
            exact component={Dashboard}
          />
        </HashRouter>
      </div>
    )
  }
}