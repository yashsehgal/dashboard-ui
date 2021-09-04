import React from "react";
import "./style.widget.tag.css";

export default function Tag(TagProperties) {
  let tagColor;
  const tagInnerText = TagProperties.text;
  const tagInnerIcon = TagProperties.icon;
  const tagTextColor = TagProperties.textColor;
  switch (TagProperties.color) {
    case "primary":
      tagColor = "var(--primary-blue)";
      break;
    case "danger":
      tagColor = "var(--primary-red)";
      break;
    case "warning":
      tagColor = "var(--primary-yellow)";
      break;
    case "success":
      tagColor = "var(--primary-green)";
      break;
    case "default":
      tagColor = "var(--gray-6)";
      break;
    default:
      tagColor = `${TagProperties.color}`;
      break;
  }

  // returning tag component without inner-icon
  return tagInnerIcon === undefined ||
    tagInnerIcon === null ||
    tagInnerIcon === "\0" ? (
    <span
      className="tag"
      style={{
        backgroundColor: tagColor,
        color: tagTextColor,
      }}
    >
      {tagInnerText}
    </span>
  ) : (
    <span
      className="tag"
      style={{
        backgroundColor: tagColor,
        color: tagTextColor,
      }}
    >
      <i className={tagInnerIcon} />{" "}
      <span className="tag-inner-text-wrapper">{tagInnerText}</span>
    </span>
  );
}
