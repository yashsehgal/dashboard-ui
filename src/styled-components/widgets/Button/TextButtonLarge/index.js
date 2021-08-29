import React from 'react';

export default function TextButtonLarge(__ButtonProperties) {
  if (__ButtonProperties.state === 'disabled') {
    return (
      <button className="button button-text button-text-disabled button-large">
        {__ButtonProperties.value}
      </button>
    )
  }
  return (
    <button className="button button-text button-large">
      {__ButtonProperties.value}
    </button>
  )
}