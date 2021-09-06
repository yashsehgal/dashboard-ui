import React from 'react'
import loadImageFromImagekit from '../../../../utils/ImagekitMediaImports'
import Tag from '../../Tag'
import './style.widgets.card.task-card.css'

export default function TaskCard (__TaskCardDetails) {
  return (
    <div className='task-card'>
      <div className='task-card__header-wrapper'>
        <strong className=' task-title text__gray-2'>
          {__TaskCardDetails.TaskTitle}
        </strong>
      </div>
      <div className='task-card__footer-wrapper'>
        <div className='assignees-wrapper'>
          {__TaskCardDetails.Assignments.map((data, index) => (
            <img
              src={loadImageFromImagekit(data.profile_photo_url)}
              alt={data.username}
              className='task-card__assigned-user-profile-image'
            />
          ))}
        </div>
        <div className='labels-wrapper'>
          {__TaskCardDetails.Labels.map((data, index) => (
            <Tag text={data} color='var(--primary-blue)' textColor='white' />
          ))}
        </div>
      </div>
    </div>
  )
}
