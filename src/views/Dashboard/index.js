import React from 'react'
import Menu from '../../styled-components/section-components/Menu'
import {
  OutlineButton,
  PrimaryButton
} from '../../styled-components/widgets/Button'
import './style.views.dashboard.css'

export default function Dashboard () {
  return (
    <div className='view view__dashboard'>
      {/* header section */}
      <Menu />
      {/* Board/Cards Section */}
      <div className='board-wrapper'>
        <div className='board-header-section'>
          <h5 className='dashboard-view-title text__gray-1'>
            Dashboard / All Tasks
          </h5>
          <div className='dashboard-task-action-buttons-wrapper'>
            <PrimaryButton value='New Task' icon='fas fa-plus' />
            <OutlineButton value='Edit Columns' icon='fas fa-pen' />
          </div>
        </div>
      </div>
    </div>
  )
}
