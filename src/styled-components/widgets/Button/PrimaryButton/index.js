import React from "react";

export default function PrimaryButton(__ButtonProperties) {
  if (__ButtonProperties.state === "disabled") {
    if (
      __ButtonProperties.icon === undefined ||
      __ButtonProperties.icon === "\0" ||
      __ButtonProperties.icon === ""
    ) {
      return (
        <button className="button button-primary-disabled button-small">
          {__ButtonProperties.value}
        </button>
      );
    } else {
      return (
        <button className="button button-primary-disabled button-small">
          <i className={__ButtonProperties.icon} /> {__ButtonProperties.value}
        </button>
      );
    }
  }

  // for general buttons (non-disabled)
  if (
    __ButtonProperties.icon === undefined ||
    __ButtonProperties.icon === "\0" ||
    __ButtonProperties.icon === ""
  ) {
    return (
      <button className="button button-primary button-small">
        {__ButtonProperties.value}
      </button>
    );
  } else {
    return (
      <button className="button button-primary button-small">
        <i className={__ButtonProperties.icon} /> {__ButtonProperties.value}
      </button>
    );
  }
}
