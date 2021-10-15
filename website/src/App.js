import React from 'react'
import './styles/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

export default function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
