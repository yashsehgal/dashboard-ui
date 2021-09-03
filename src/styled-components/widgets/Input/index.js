import React from 'react'
import './style.widgets.input.css'

export default function Input (InputProperties) {
  return (
    <div className='input__wrapper'>
      <i className={InputProperties.icon} />
      <input
        type={InputProperties.type}
        placeholder={InputProperties.placeholder}
        className={'input input-' + InputProperties.type}
        id={
          'input-type__' +
          InputProperties.type +
          '-icon__' +
          InputProperties.icon
        }
      />
    </div>
  )
}
