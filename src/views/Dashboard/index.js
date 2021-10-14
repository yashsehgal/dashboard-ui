import React, { useState } from "react";
import ReactModal from "react-modal";
import Menu from "../../styled-components/section-components/Menu";
import {
  OutlineButton,
  PrimaryButton,
} from "../../styled-components/widgets/Button";
import { AddNewTaskModal } from "../../styled-components/widgets/Modal";
import { saveDataTo } from "../../utils/AccessLocalStorage";
import Board from "./Board";
import "./style.views.dashboard.css";

ReactModal.setAppElement("#root");

export default function Dashboard() {
  const [addNewTaskModalPopupState, setAddNewTaskModalPopupState] =
    useState(false);
  return (
    <div className="view view__dashboard">
      {/* header section */}
      <Menu />
      {/* Board/Cards Section */}
      <div className="board-wrapper">
        <div className="board-header-section">
          <h5 className="dashboard-view-title text__gray-1">
            Dashboard / All Tasks
          </h5>
          <div className="dashboard-task-action-buttons-wrapper">
            <div
              className="button-wrap-fit-content"
              onClick={() => setAddNewTaskModalPopupState(true)}
            >
              <PrimaryButton value="New Task" icon="fas fa-plus" />
            </div>
            <OutlineButton value="Edit Columns" icon="fas fa-pen" />
          </div>
        </div>
        <div className="board">
          <Board />
        </div>
      </div>
      {/* Add new task modal */}
      <ReactModal
        isOpen={addNewTaskModalPopupState}
        onRequestClose={() => setAddNewTaskModalPopupState(false)}
        style={{
          overlay: {
            backgroundColor: "#00000025",
          },
          content: {
            width: "fit-content",
            height: "fit-content",
            padding: "3em",
            margin: "auto",
            boxShadow: "0px 6px 20px #00000045",
          },
        }}
      >
        <AddNewTaskModal />
        <div
          className="modal-action-button-wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="button-wrap-fit-content"
            onClick={() => {
              const __taskTitle = document.getElementById("new-task-title");
              const __taskDescription = document.getElementById(
                "new-task-description"
              );
              const __taskDate = document.getElementById("new-task-date");
              const __taskTime = document.getElementById("new-task-time");

              const newTaskEntryObject = {
                task_title: !__taskTitle.value
                  ? "undefined-task-title"
                  : __taskTitle.value,
                task_description: !__taskDescription.value
                  ? "undefined-task-description"
                  : __taskDescription.value,
                task_date: !__taskDate.value
                  ? "undefined-task-date"
                  : __taskDate.value,
                task_time: !__taskTime.value
                  ? "undefined-task-time"
                  : __taskTime.value,
              };

              /**
               * use method [saveDataTo] from AccessLocalStorage class to store newTaskEntryObject
               * to local storage
               */
              saveDataTo("tasks", newTaskEntryObject)
                ? console.log("Task saved with data" + newTaskEntryObject)
                : console.log("Unable to add task");
              // closing the new-task-modal-popup
              setAddNewTaskModalPopupState(false);
            }}
          >
            <PrimaryButton value="Save new task" />
          </div>
          <div
            className="button-wrap-fit-content"
            onClick={() => setAddNewTaskModalPopupState(false)}
          >
            <OutlineButton value="Discard this task" />
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
