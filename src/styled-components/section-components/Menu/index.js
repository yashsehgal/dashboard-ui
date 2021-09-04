import React from "react";
import "./style.widgets.section-components.menu.css";
import Input, {} from '../../widgets/Input';
import Icon from "../../widgets/Icon";
import loadImageFromImagekit from "../../../utils/ImagekitMediaImports";
export default class Menu extends React.Component {
  render() {
    return (
      <header className="menu-header">
        <div className="workspace-search-wrapper">
          <Input 
            icon="fas fa-search"
            type="text"
            placeholder="Search tasks, usernames, links, and etc"
            className="workspace-search-input"
            size="medium"
          />
        </div>
        <div className="profile-actions-wrapper">
          <Icon name="far fa-bell" size="large" />
          <img src={
            loadImageFromImagekit('gitspace-logo', 'svg')} 
            alt="profile-display" 
            className="profile-display__user"
          />
        </div>
      </header>
    )
  }
}
