import React, { useState } from 'react'
import ProjectCard from '../../styled-components/widgets/Card/ProjectCard'
import './style.views.projects.css'
import { PrimaryButton } from '../../styled-components/widgets/Button'

// importing sample-data for testing frontend
import ProjectData from './__projects.json'

export default function Projects () {
  const [_projectData] = useState(ProjectData)
  console.log(_projectData)
  return (
    <div className='view view__projects'>
      <div className='projects-board-header'>
        <h4 className='projects-view-title'>All Projects</h4>
        <div className='projects-action-button-wrapper'>
          <PrimaryButton value='Add a new Project' icon='fas fa-plus' />
        </div>
      </div>
      <div className='projects-wrapper'>
        {_projectData.map((data, index) => (
          <ProjectCard
            title={data.title}
            description={data.description}
            stars={data.stars_on_github}
            forks={data.forks_on_github}
            languages={data.languages}
            key={index.toString()}
          />
        ))}
      </div>
    </div>
  )
}
