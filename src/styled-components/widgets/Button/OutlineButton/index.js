import React from 'react'

export default function OutlineButton (__ButtonProperties) {
  if (__ButtonProperties.state === 'disabled') {
    if (
      __ButtonProperties.icon === undefined ||
      __ButtonProperties.icon === '\0' ||
      __ButtonProperties.icon === ''
    ) {
      return (
        <button className='button button-outline button-outline-disabled button-small'>
          {__ButtonProperties.value}
        </button>
      )
    } else {
      return (
        <button className='button button-outline button-small'>
          <i class={__ButtonProperties.icon} /> {__ButtonProperties.value}
        </button>
      )
    }
  }

  // for general buttons (non-disabled)
  if (
    __ButtonProperties.icon === undefined ||
    __ButtonProperties.icon === '\0' ||
    __ButtonProperties.icon === ''
  ) {
    return (
      <button className='button button-outline button-small'>
        {__ButtonProperties.value}
      </button>
    )
  } else {
    return (
      <button className='button button-outline button-small'>
        <i class={__ButtonProperties.icon} /> {__ButtonProperties.value}
      </button>
    )
  }
}
