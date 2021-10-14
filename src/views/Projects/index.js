import React, { useState } from "react";
import ProjectCard from "../../styled-components/widgets/Card/ProjectCard";
import "./style.views.projects.css";
import Input from "../../styled-components/widgets/Input";
import { PrimaryButton, OutlineButton } from "../../styled-components/widgets/Button";
import ReactModal from "react-modal";

// importing sample-data for testing frontend
import ProjectData from "./__projects.json";
import CreateNewProjectModal from "../../styled-components/widgets/Modal/CreateNewProjectModal";
import { getDataFromLocalStorage, saveDataTo } from "../../utils/AccessLocalStorage";

export default function Projects() {
  const [_projectData] = useState(getDataFromLocalStorage('projects'));
  const [createNewProjectModalPopupState, setCreateNewProjectModalPopupState] = useState(false);
  const ProjectCards = getDataFromLocalStorage('projects');
  // condition to check the availability of projects array in local-storage
  if (getDataFromLocalStorage('projects') === 'not-found') {
    _projectData.map((data) => saveDataTo('projects', data));
  }
  
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
        {getDataFromLocalStorage('projects').map((data, index) => (
          <ProjectCard
            title={data.project_title}
            tagline={data.project_tagline}
            tech_stack={data.project_tech_stack}
            github_repository_url={data.proejct_github_repository_url}
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
            onClick={() => {
              const _newProjectTitle = document.getElementById('project-title-input').value;
              const _newProjectTagline = document.getElementById('project-tagline-input').value;
              const _newProjectGitHubRepositoryURL = document.getElementById('project-github-repository-url-input').value;
              const _newProjectTechStack = document.getElementById('project-tech-stack-input').value;

              // creating a new entry object for new-project
              const newProjectDetailsObject = {
                project_title: !_newProjectTitle
                  ? "undefined-project-title"
                  : _newProjectTitle,
                project_tagline: !_newProjectTagline
                  ? "undefined-project-tagline"
                  : _newProjectTagline,
                proejct_github_repository_url: !_newProjectGitHubRepositoryURL
                  ? "undefined-project-github-repository-url"
                  : _newProjectGitHubRepositoryURL,
                project_tech_stack: !_newProjectTechStack
                  ? "undefined-project-tech-stack"
                  : _newProjectTechStack
              }
              /**
               * use method [saveDataTo] from AccessLocalStorage class to store new-project-entry-object
               * to local storage
               */
              saveDataTo("projects", newProjectDetailsObject)
                ? console.log("Project saved with data" + newProjectDetailsObject)
                : console.log("Unable to add task");
              // closing the new-project-modal-popup
              setCreateNewProjectModalPopupState(false);
            }}
          >
            <PrimaryButton value="Create new project" />
          </div>
          <div
            className="button-wrap-fit-content"
            onClick={() => setCreateNewProjectModalPopupState(false)}
          >
            <OutlineButton value="Discard new project" />
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
