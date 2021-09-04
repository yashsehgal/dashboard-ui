import React from "react";

export default function OutlineButtonLarge(__ButtonProperties) {
  if (__ButtonProperties.state === "disabled") {
    return (
      <button className="button button-outline button-outline-disabled button-large">
        {__ButtonProperties.value}
      </button>
    );
  }
  return (
    <button className="button button-outline button-large">
      {__ButtonProperties.value}
    </button>
  );
}
