import React, { useState } from 'react';
import { OutlineButton, PrimaryButton } from '../../styled-components/widgets/Button';
import loadImageFromImagekit from '../../utils/ImagekitMediaImports';
import './style.views.profile.css';

// importing test data for developing profile-view frontend
import ProfileData from './__profile.json';

export default function Profile() {
  const [_profileData] = useState(ProfileData);
  return (
    <div className="view view__profile">
      <div className="profile-board-header">
        <h4 className="profile-view-title">My Profile</h4>
        <div className="profile-action-buttons-wrapper">
          <OutlineButton 
            value="Edit Profile"
            icon="fas fa-pen"
          />
          <PrimaryButton 
            value="Share Profile"
            icon="far fa-paper-plane"
          />
        </div>
      </div>
      {_profileData.map((data, index) => (
        <div className="profile-wrapper">
          <div className="profile-header-wrapper" key={index}>
            <img src={
              loadImageFromImagekit('gitspace-logo', 'png')}
              alt="profile-display"
              className="user-profile-display-picture"
            />
            <div className="profile-details-wrapper">
              <h5 className="user-fullname">{data.firstname} {data.lastname}</h5>
              <p className="user-username text__gray-4">@{data.username}</p>
            </div>
          </div>
          <div className="profile-body-content-wrapper">
            {/* description wrapper */}
            <div className="description-section-wrapper">
              <h5 className="description-title">About you</h5>
              <p className="user-description">{data.description}</p>
            </div>
            {/* contact-details wrapper */}
            <div className="contact-details-section-wrapper">
              <h5 className="contact-details-title">Contact details</h5>
              <div className="contact-details__phone-number-wrapper">
                <i className="fas fa-phone"></i>
                <p className="user-phone-number">{data.contact_number}</p>
              </div>
              <div className="contact-details__email-address-wrapper">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${data.email_address}`} className="user-email-address">{data.email_address}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}