import React from 'react';
import './style.widget.button.primary-button-large.css';

export default function PrimaryButtonLarge(__ButtonProperties) {
  return (
    <button className="button primary-button primary-button-large">
      {__ButtonProperties.value}
    </button>
  )
}