import React from "react";

export default function OutlineButtonLarge(__ButtonProperties) {
  if (__ButtonProperties.state === "disabled") {
    if (
      __ButtonProperties.icon === undefined ||
      __ButtonProperties.icon === "\0" ||
      __ButtonProperties.icon === ""
    ) {
      return (
        <button className="button button-outline button-outline-disabled button-large">
          {__ButtonProperties.value}
        </button>
      );
    } else {
      return (
        <button className="button button-outline button-outline-disabled button-large">
          <i class={__ButtonProperties.icon} /> {__ButtonProperties.value}
        </button>
      );
    }
  }

  if (
    __ButtonProperties.icon === undefined ||
    __ButtonProperties.icon === "\0" ||
    __ButtonProperties.icon === ""
  ) {
    return (
      <button className="button button-outline button-large">
        {__ButtonProperties.value}
      </button>
    );
  } else {
    return (
      <button className="button button-outline button-large">
        <i class={__ButtonProperties.icon} /> {__ButtonProperties.value}
      </button>
    );
  }
}
