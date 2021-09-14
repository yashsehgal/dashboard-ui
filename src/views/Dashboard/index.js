import React, { useState } from 'react'
import ReactModal from 'react-modal'
import Menu from '../../styled-components/section-components/Menu'
import {
  OutlineButton,
  PrimaryButton
} from '../../styled-components/widgets/Button'
import { AddNewTaskModal } from '../../styled-components/widgets/Modal'
import Board from './Board'
import './style.views.dashboard.css'

export default function Dashboard () {
  const [addNewTaskModalPopupState, setAddNewTaskModalPopupState] = useState(false);
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
            <div className="button-wrap-fit-content" onClick={() => setAddNewTaskModalPopupState(true)}>
              <PrimaryButton value='New Task' icon='fas fa-plus'/>
            </div>
            <OutlineButton value='Edit Columns' icon='fas fa-pen' />
          </div>
        </div>
        <div className='board'>
          <Board />
        </div>
      </div>
      {/* Add new task modal */}
      <ReactModal 
        isOpen={addNewTaskModalPopupState} 
        onRequestClose={() => setAddNewTaskModalPopupState(false)}
      >
        <AddNewTaskModal />
        <div className="modal-action-button-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="button-wrap-fit-content" onClick={() => {}}>
            <PrimaryButton value="Save new task" />
          </div>
          <div className="button-wrap-fit-content" onClick={() => setAddNewTaskModalPopupState(false)}>
            <OutlineButton value="Discard this task" />
          </div>
        </div>
      </ReactModal>
    </div>
  )
}
