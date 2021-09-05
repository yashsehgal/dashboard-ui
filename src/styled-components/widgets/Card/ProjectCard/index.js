import React from 'react'
import Tag from '../../Tag'
import './style.widgets.card.project-card.css'

export default function ProjectCard (__ProjectCardDetails) {
  return (
    <div className='project-card'>
      <p className='project-title'>{__ProjectCardDetails.title}</p>
      <p className='project-description'>{__ProjectCardDetails.description}</p>
      <div className='project-statistics-wrapper'>
        <div className='project-statistics__stars-count-wrapper'>
          <i className='fas fa-star' />
          <p className='star-count-value'>{__ProjectCardDetails.stars}</p>
        </div>
        <div className="project-statistics__forks-count-wrapper">
          <i className="fas fa-code-branch"></i>
          <p className="fork-count-value">{__ProjectCardDetails.forks}</p>
        </div>
      </div>
      <div className='card-footer__language-tags-wrapper'>
        {__ProjectCardDetails.languages.map((language_name, index) => {
          if (language_name.toLowerCase() === 'javascript') {
            return <Tag text={language_name} key={index} color='warning' />
          } else if (language_name.toLowerCase() === 'css') {
            return <Tag text={language_name} key={index} color='success' />
          } else if (language_name.toLowerCase() === 'html') {
            return (
              <Tag
                text={language_name}
                key={index}
                color='orange'
                textColor='white'
              />
            )
          } else if (language_name.toLowerCase() === 'python') {
            return (
              <Tag
                text={language_name}
                key={index}
                color='var(--primary-blue)'
                textColor='white'
              />
            )
          } else {
            return <Tag text={language_name} key={index} color='default' />
          }
        })}
      </div>
    </div>
  )
}
