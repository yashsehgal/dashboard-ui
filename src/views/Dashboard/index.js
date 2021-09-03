import React from 'react';
import { PrimaryButton } from '../../styled-components/widgets/Button';
import Input from '../../styled-components/widgets/Input';
import './style.views.dashboard.css';

export default function Dashboard() {
  return (
    <div className="view view__dashboard">
      <div className="search-input-wrapper" style={{display: 'flex'}}>
        <Input icon="fas fa-search" placeholder="Search" />
        <PrimaryButton value="New Task" />
      </div>
    </div>
  )
}