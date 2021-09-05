import React from "react";
import Tag from "../../Tag";
import "./style.widgets.card.team-card.css";

export default function TeamCard(__TeamCardDetails) {
  return (
    <div className="team-card">
      <div className="team-initial-banner" />
      <h5 className="team-name">{__TeamCardDetails.Name}</h5>
      <div className="team-member-status">
        <div
          className={`${checkAvailabilityStatus(
            __TeamCardDetails.ActiveMemberCount
          )} status-circle`}
        />
        <p className="active_offline-status">
          {__TeamCardDetails.ActiveMemberCount} /{" "}
          {__TeamCardDetails.MemberCount}
        </p>
      </div>
      <div className="team-category-tags-wrapper">
        {__TeamCardDetails.TeamCategories.map((data, index) => (
          <Tag text={data} color="default" textColor="var(--primary-blue)" />
        ))}
      </div>
    </div>
  );
}

function checkAvailabilityStatus(active_member_count) {
  let statusCircleType;
  active_member_count > 0
    ? (statusCircleType = "status-circle-active")
    : (statusCircleType = "status-circle-offline");

  return statusCircleType;
}
