import "./style.widget.modal.create-new-project-modal.css";
import React from "react";
import Input from "../../Input";

export default function CreateNewProjectModal() {
  return (
    <div className="create-new-project-modal">
      <h4 className="create-new-project-modal-title">Add a new project</h4>
      <div className="create-new-project-details-form-wrapper">
        <div className="form-input-wrapper" id="project-title-wrapper">
          <h6 className="label-project-title">Project title</h6>
          <Input
            type="text"
            placeholder="Add the new project name"
            icon="fas fa-project-diagram"
            size="medium"
            id="project-title-input"
          />
        </div>
        <div className="form-input-wrapper" id="project-tagline-wrapper">
          <h6 className="label-project-tagline">Add a project tagline</h6>
          <Input
            type="text"
            placeholder="Project tagline in short"
            icon="fas fa-edit"
            size="medium"
            id="project-tagline-input"
          />
        </div>
        <div
          className="form-input-wrapper"
          id="project-github-repository-url-wrapper"
        >
          <h6 className="label-project-github-repository-url">
            Project's GitHub Repository URL
          </h6>
          <Input
            type="text"
            placeholder="https://www.github.com/username/project-name"
            icon="fab fa-github"
            size="medium"
            id="project-github-repository-url-input"
          />
        </div>
        <div className="form-input-wrapper" id="project-tech-stack-wrapper">
          <h6 className="label-project-tech-stack">
            Add tags related to your project tech-stack
          </h6>
          <Input
            type="text"
            placeholder="The values should be command seperated such as (javascript, react, git)"
            icon="fas fa-laptop-code"
            size="medium"
            id="project-tech-stack-input"
          />
        </div>
      </div>
    </div>
  );
}
