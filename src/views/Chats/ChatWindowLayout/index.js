import React from "react";
import { PrimaryButton } from "../../../styled-components/widgets/Button";
import Input from "../../../styled-components/widgets/Input";
import MessageCard from "../../../styled-components/widgets/MessageCard";
import './style.views.chat-window-layout.css';

export default function ChatWindowLayout() {
  return (
    <div className="chat-window-layout">
      <div className="chat-window-top-section">
        <h5 className="chat-window__channel-title">#general</h5>
        <div className="chat-window-top-section__cta-buttons">
          <PrimaryButton icon="fas fa-phone" />
          <PrimaryButton icon="fas fa-envelope" />
          <PrimaryButton icon="fas fa-tools" />
          <PrimaryButton icon="fas fa-paperclip" />
        </div>
      </div>
      {/* chat messages layout */}
      <div className="chat-messages-layout">
        <MessageCard
          value="@David, I have been working on fixing the issue #145. The Auth0 integration has been added to the login system."
          type="receiver"
        />
        <MessageCard
          value="Cool man, If you need any help with it, let me know!"
          type="sender"
        />
        <MessageCard
          value="Storybook configuration is also done, We can start listing our components in to it!"
          type="receiver"
        />
        <MessageCard
          value="Yeah, correct! @David get started with the component wrappers"
          type="sender"
        />
        <MessageCard
          value="Sure, Let's do a pair programming session today in the evening"
          type="receiver"
        />
        <MessageCard
          value="Yeah, alright! Let's connect at 8.30PM today"
          type="sender"
        />
        <MessageCard
          value="Great! See you then"
          type="receiver"
        />
        <MessageCard
          value="https://meet.google.com/meeting-code"
        />
      </div>
      <div className="message-input-wrapper" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px', 
          justifyContent: "space-between" 
        }}>
        <Input size="large" placeholder="Type a message to send" icon="fas fa-paper-plane" />
        <PrimaryButton value="Send Message" icon="fas fa-arrow-right" />
      </div>
    </div>
  )
}