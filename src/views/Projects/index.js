import React, { useState } from "react";
import ProjectCard from "../../styled-components/widgets/Card/ProjectCard";
import "./style.views.projects.css";
import Input from "../../styled-components/widgets/Input";
import { PrimaryButton } from "../../styled-components/widgets/Button";
import ReactModal from "react-modal";

// importing sample-data for testing frontend
import ProjectData from "./__projects.json";
import CreateNewProjectModal from "../../styled-components/widgets/Modal/CreateNewProjectModal";

export default function Projects() {
  const [_projectData] = useState(ProjectData);
  const [createNewProjectModalPopupState, setCreateNewProjectModalPopupState] = useState(false);
  
  console.log(_projectData);
  return (
    <div className="view view__projects">
      <div className="projects-board-header">
        <h4 className="projects-view-title">All Projects</h4>
        <Input
          size="medium"
          placeholder="Search for Projects, Tags, Languages, etc"
          icon="fas fa-search"
        />
        <PrimaryButton value="Filter Projects" icon="fas fa-filter" />
        <div className="projects-action-button-wrapper" onClick={() => setCreateNewProjectModalPopupState(true)}>
          <PrimaryButton value="Add a new Project" icon="fas fa-plus" />
        </div>
      </div>
      <div className="projects-wrapper">
        {_projectData.map((data, index) => (
          <ProjectCard
            title={data.title}
            description={data.description}
            stars={data.stars_on_github}
            forks={data.forks_on_github}
            languages={data.languages}
            key={index.toString()}
          />
        ))}
      </div>
      <ReactModal
        isOpen={createNewProjectModalPopupState}
        onRequestClose={() => setCreateNewProjectModalPopupState(false)}
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
        <CreateNewProjectModal />

        {/* action-buttons wrapper */}
        <div
          className="modal-action-button-wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="button-wrap-fit-content"
            
          >
            <PrimaryButton value="Create new project" />
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
