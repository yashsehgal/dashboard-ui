import './style.widget.modal.create-new-project-modal.css';
import React from 'react';
import Input from '../../Input';

export default function CreateNewProjectModal() {
    return (
        <div className="create-new-project-modal">
            <h4 className="create-new-project-modal-title">Add a new project</h4>
            <div className="create-new-project-details-form-wrapper">
                <div className="form-input-wrapper" id="project-title-wrapper">
                    <h6 className="label-project-title">Project title</h6>
                    <Input type="text" 
                        placeholder="Add the new project name"
                        icon="fas fa-project-diagram"
                        size="medium"
                    />
                </div>
            </div>
        </div>
    )
}