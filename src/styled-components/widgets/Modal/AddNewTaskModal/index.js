import React from 'react';
import Input from '../../Input';
import './style.widget.modal.add-new-task-modal.css';

export default function Modal(__ModalProperties) {
  return (
    <div className="add-new-task-modal-wrapper">
      <h5 className="add-new-task__title">Create a new task</h5>
      <Input placeholder="" />
    </div>
  )
}