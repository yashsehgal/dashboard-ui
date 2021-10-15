import React from 'react'
import './styles/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';

 export default function App () {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
