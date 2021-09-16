import React from "react";
import Input from "../../Input";
import "./style.widget.modal.add-new-task-modal.css";

export default function Modal(__ModalProperties) {
  return (
    <div className="add-new-task-modal-wrapper">
      <h5 className="add-new-task__title">Create a new task</h5>
      <div className="form-input-wrapper" id="add-new-task-input">
        <h6 className="label-add-new-task">Add task title</h6>
        <Input
          placeholder="Add title for the new task"
          size="medium"
          id="new-task-title"
        />
      </div>
      <div className="form-input-wrapper" id="task-description-input">
        <h6 className="label-task-description">Add task description</h6>
        <Input
          type="text"
          placeholder="Add task description"
          size="medium"
          id="new-task-description"
        />
      </div>
      <div className="form-input-wrapper" id="task-date-time-input">
        <h6 className="label-task-data-time">Set date and time</h6>
        <Input type="date" size="medium" id="new-task-date" />
        <Input type="time" size="medium" id="new-task-time" />
      </div>
    </div>
  );
}
