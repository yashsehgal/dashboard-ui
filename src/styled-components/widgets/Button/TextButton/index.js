import React from 'react';

export default function TextButton(__ButtonProperties) {
  if (__ButtonProperties.state === 'disabled') {
    return (
      <button className="button button-text button-text-disabled button-small">
        {__ButtonProperties.value}
      </button>
    )
  }
  return (
    <button className="button button-text button-small">
      {__ButtonProperties.value}
    </button>
  )
}