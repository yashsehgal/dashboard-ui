import React from 'react';
import Input from '../../styled-components/widgets/Input';
import './style.views.dashboard.css';

export default function Dashboard() {
  return (
    <div className="view view__dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header__workspace-details-wrapper">
          <div className="workspace-account-profile-display-wrapper">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="8" fill="#7676FF" />
            </svg>
          </div>
          <Input 
            type="password"
            icon="fas fa-search"
            placeholder="Search tasks, issues, team members"
          />
        </div>
        <div className="user-profile-actions-wrapper">
          <i className="far fa-bell"></i>
          <div className="user-profile-wrapper">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="25" fill="#FF7676" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}