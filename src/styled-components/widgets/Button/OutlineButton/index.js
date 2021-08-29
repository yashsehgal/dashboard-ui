import React from 'react';

export default function OutlineButton(__ButtonProperties) {
  if (__ButtonProperties.state === 'disabled') {
    return (
      <button className="button button-outline button-outline-disabled button-small">
        {__ButtonProperties.value}
      </button>
    )
  }
  return (
    <button className="button button-outline button-small">
      {__ButtonProperties.value}
    </button>
  )
}