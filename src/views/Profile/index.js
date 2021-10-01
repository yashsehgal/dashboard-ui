import React from "react";
import {
  OutlineButton,
  PrimaryButton,
} from "../../styled-components/widgets/Button";
import Input from "../../styled-components/widgets/Input";
import "./style.views.profile.css";

export default function Profile() {
  return (
    <div className="view view__profile">
      <div className="profile-board-header">
        <h4 className="profile-view-title">My Profile</h4>
        <div className="profile-action-buttons-wrapper">
          <OutlineButton value="Edit Profile" icon="fas fa-pen" />
          <PrimaryButton value="Share Profile" icon="far fa-paper-plane" />
        </div>
      </div>
      <div className="profile-wrapper">
        <div className="profile-wrapper__full-name-section">
          <div className="first-name-wrapper">
            <h5 className="first-name-title">First Name</h5>
            <Input
              type="text"
              placeholder="First Name"
              size="medium"
              icon="far fa-user"
            />
          </div>
          <div className="last-name-wrapper">
            <h5 className="last-name-title">Last Name</h5>
            <Input
              type="text"
              placeholder="Last Name"
              size="medium"
              icon="far fa-user"
            />
          </div>
        </div>
        <div className="profile-wrapper__email-address-contact-number-wrapper">
          <div className="email-address-wrapper">
            <h5 className="email-address-title">Email Address</h5>
            <Input
              type="email"
              placeholder="Email Address"
              size="medium"
              icon="far fa-envelope"
            />
          </div>
          <div className="contact-number-wrapper">
            <h5 className="contact-number-wrapper">Contact Number</h5>
            <Input
              type="telephone"
              placeholder="Contact Number"
              size="medium"
              icon="fas fa-phone"
            />
          </div>
        </div>
        <PrimaryButton value="Save Changes" icon="fas fa-check" />
      </div>
    </div>
  );
}
