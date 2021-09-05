import React, { useState } from 'react';
import { OutlineButton, PrimaryButton } from '../../styled-components/widgets/Button';
import TeamCard from '../../styled-components/widgets/Card/TeamCard';
import './style.views.teams.css';

// importing demo data for frontend
import TeamsData from './__teams.json';

export default function Teams() {
  const [_teamsData] = useState(TeamsData);
  return (
    <div className="view view__teams">
      <div className="teams-board-header">
        <h4 className="teams-view-title">All Teams</h4>
        <div className="teams-action-button-wrapper">
          <PrimaryButton
            value="Create a new Team"
            icon="fas fa-plus"
          />
          <OutlineButton 
            value="Edit Teams"
            icon="fas fa-pen"
          />
        </div>
      </div>
      <div className="teams-wrapper">
        {_teamsData.map((data, index) => (
          <TeamCard 
            Name={data.name}
            MemberCount={data.member_count}
            ActiveMemberCount={data.active_member_count}
            TeamCategories={data.team_category}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}