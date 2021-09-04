import React from "react";

export default function PrimaryButtonLarge(__ButtonProperties) {
  if (__ButtonProperties.state === "disabled") {
    return (
      <button className="button button-primary button-primary-disabled button-large">
        {__ButtonProperties.value}
      </button>
    );
  }
  return (
    <button className="button button-primary button-large">
      {__ButtonProperties.value}
    </button>
  );
}
