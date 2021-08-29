import React from 'react';

export default function PrimaryButton(__ButtonProperties) {
  if (__ButtonProperties.state === 'disabled') {
    return (
      <button className="button button-primary-disabled button-small">
        {__ButtonProperties.value}
      </button>
    )
  }
  return (
    <button className="button button-primary button-small">
      {__ButtonProperties.value}
    </button>
  )
}