import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { OutlineButton, PrimaryButton } from '../../styled-components/widgets/Button';
import EditExistingChatModal from '../../styled-components/widgets/Modal/EditExistingChatModal';
import './style.views.chats.css'; 

export default function Chats () {
  const [editGroupChatDetailsModalPopupState, setEditGroupChatDetailsModalPopupState] = useState(false);
  const [startNewChatModalPopupState, setStartNewChatModalPopupState] = useState(false);
  const [currentGroupChatTitle, setCurrentGroupChatTitle] = useState('GitSpace - Frontend Development Team');

  const [chatChannels] = useState(["General", "News", "GitHub-Updates",
    "Engineering", "AWS-Status", "Deployment Status",
    "Random", "Share-Content"]);

  return (
    <div className="view view__chats">
      <div className="chats-view-header">
        <h4 className="chats-view-title" id="group-chat-title">{currentGroupChatTitle}</h4>
        <div className="chats-view-header-button-wrapper">
          <div className="button-wrap-fit-content" onClick={() => setStartNewChatModalPopupState(true)}>
            <PrimaryButton value="Start a new chat" icon="fas fa-plus" />
          </div>
          <div className="button-wrap-fit-content" onClick={() => setEditGroupChatDetailsModalPopupState(true)}>
            <OutlineButton value="Edit group chat details" icon="fas fa-pen" />
          </div>
        </div>
      </div>

      {/* group chat layout container */}
      <div className="group-chat-view-container">
        <div className="group-chat-channels-wrapper">
          <ul className="group-chat-channels-list">
            {chatChannels.map((channel, index) => (
              <li className="group-chat-channel-item" key={index}>#{channel.toLowerCase()}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ReactModal for Editing group chat details */}
      <ReactModal isOpen={editGroupChatDetailsModalPopupState}
        onRequestClose={() => setEditGroupChatDetailsModalPopupState(false)}
        style={{
          overlay: {
            backgroundColor: '#00000025'
          },
          content: {
            width: 'fit-content',
            height: 'fit-content',
            padding: '3em',
            margin: 'auto',
            boxShadow: '0px 6px 20px #00000045'
          }
        }}
      >
        <EditExistingChatModal />
        <div className="modal-action-button-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div className="button-wrap-fit-content" onClick={() => {
            let __changedGroupChatTitle = document.getElementById('changed-group-chat-title');
            setCurrentGroupChatTitle(__changedGroupChatTitle.value);
            setEditGroupChatDetailsModalPopupState(false);
          }}>
            <PrimaryButton value="Save Changes" icon="fas fa-save" />
          </div>
          <div className="button-wrap-fit-content" onClick={() => setEditGroupChatDetailsModalPopupState(false)}>
            <OutlineButton value="Discard Changes" icon="fas fa-times" />
          </div>
        </div>
      </ReactModal>

      {/* React modal for starting a new chat form */}
      <ReactModal isOpen={startNewChatModalPopupState}
        onRequestClose={() => setStartNewChatModalPopupState(false)}
        style={{
          overlay: {
            backgroundColor: '#00000025'
          },
          content: {
            width: 'fit-content',
            height: 'fit-content',
            padding: '3em',
            margin: 'auto',
            boxShadow: '0px 6px 20px #00000045'
          }
        }}
      >
      
      </ReactModal>
    </div>
  )
}