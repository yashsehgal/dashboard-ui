import React from "react";
import Input from "../../Input";
import "./style.widget.modal.edit-existing-chat-modal.css";

export default function EditExistingChatModal() {
  console.log(document.getElementById("group-chat-title").textContent);
  return (
    <div className="edit-existing-chat-modal">
      <h4 className="edit-existing-chat-modal-title">Edit Chat Details</h4>
      <Input
        type="text"
        icon="fas fa-pen"
        size="medium"
        id="changed-group-chat-title"
        placeholder={document.getElementById("group-chat-title").textContent}
      />
    </div>
  );
}
