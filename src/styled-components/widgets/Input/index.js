import React from 'react'
import './style.widgets.input.css'

export default function Input (InputProperties) {
  if (InputProperties.size === 'default' || InputProperties.size === '\0') {
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
  } else if (InputProperties.size === 'medium') {
    return (
      <div className='input__wrapper-medium'>
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
  } else if (InputProperties.size === 'large') {
    return (
      <div className='input__wrapper-large'>
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
  } else if (InputProperties.size === 'screen-fit') {
    return (
      <div className='input__wrapper-screen-fit'>
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
  } else {
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
}
