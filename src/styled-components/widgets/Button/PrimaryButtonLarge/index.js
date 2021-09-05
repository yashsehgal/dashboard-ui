import React from 'react'

export default function PrimaryButtonLarge (__ButtonProperties) {
  if (__ButtonProperties.state === 'disabled') {
    if (
      __ButtonProperties.icon === '\0' ||
      __ButtonProperties.icon === undefined ||
      __ButtonProperties.icon === ''
    ) {
      return (
        <button className='button button-primary-disabled button-large'>
          {__ButtonProperties.value}
        </button>
      )
    } else {
      return (
        <button className='button button-primary-disabled  button-large'>
          <i class={__ButtonProperties.icon} /> {__ButtonProperties.value}
        </button>
      )
    }
  }

  // for general buttons (non-disabled)
  if (
    __ButtonProperties.icon === '\0' ||
    __ButtonProperties.icon === undefined ||
    __ButtonProperties.icon === ''
  ) {
    return (
      <button className='button button-primary button-large'>
        {__ButtonProperties.value}
      </button>
    )
  } else {
    return (
      <button className='button button-primary button-large'>
        <i class={__ButtonProperties.icon} /> {__ButtonProperties.value}
      </button>
    )
  }
}
