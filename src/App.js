import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import './styled-components/index.css'
import Sidebar from './styled-components/section-components/Sidebar'
import Dashboard from './views/Dashboard'

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
            <Route path='/' exact component={Dashboard} />
            <Route path='/home' exact component={Dashboard} />
            <Route path='/dashboard' exact component={Dashboard} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
