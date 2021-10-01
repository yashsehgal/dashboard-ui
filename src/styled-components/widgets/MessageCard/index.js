import React from "react";
import "./style.widget.message-card.css";

export default function MessageCard(MessageCardProperties) {
  if (MessageCardProperties.type === "sender") {
    return <div className="sender-message">{MessageCardProperties.value}</div>;
  } else {
    return (
      <div className="receiver-message">{MessageCardProperties.value}</div>
    );
  }
}
