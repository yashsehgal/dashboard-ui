import React from 'react';
import { OutlineButton, PrimaryButton } from '../../styled-components/widgets/Button';
import './style.views.chats.css';

export default function Chats () {
  return (
    <div className="view view__chats">
      <div className="chats-view-header">
        <h4 className="chats-view-title">Chats</h4>
        <div className="chats-view-header-button-wrapper">
          <PrimaryButton value="Start a new chat" icon="fas fa-plus" />
          <OutlineButton value="Edit group chat details" icon="fas fa-pen" />
        </div>
      </div>
    </div>
  )
}