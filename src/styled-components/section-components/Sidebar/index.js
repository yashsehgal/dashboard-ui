import React, { useState } from 'react';
import './style.section-components.sidebar.css';
import SidebarRoutes from './sidebar.routes.json';

export default function Sidebar() {
  
  const [_sideBarRoutes] = useState(SidebarRoutes);
  return (
    <div className="widget__sidebar">
      <div className="sidebar-product-details-wrapper">
        <h4 className="sidebar-product-details__title text__gray-6">GitSpace</h4>
        <p className="sidebar-product-details__description text__gray-5">Your personalized project management workspace.</p>
      </div>
      <div className="sidebar-options-wrapper">
        <ul className="sidebar-options-list">
          {_sideBarRoutes.map((sideBarOption, index) => {
            return (
              <li className="sidebar-option text__gray-3" key={index}>
                <a href={sideBarOption.path} 
                  className="sidebar-option-link"
                  key={index}
                >
                  {sideBarOption.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}