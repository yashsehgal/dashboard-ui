import React from "react";
import Tag from "../../Tag";
import "./style.widgets.card.project-card.css";

export default function ProjectCard(__ProjectCardDetails) {
  console.log(`>>> ${__ProjectCardDetails.tech_stack}`);
  return (
    <div className="project-card">
      <p className="project-title">{__ProjectCardDetails.title}</p>
      <p className="project-description">{__ProjectCardDetails.tagline}</p>
      <div className="card-footer__language-tags-wrapper">
        {__ProjectCardDetails.tech_stack.map((language_name, index) => {
          if (language_name.toLowerCase() === "javascript") {
            return <Tag text={language_name} key={index} color="warning" />;
          } else if (language_name.toLowerCase() === "css") {
            return <Tag text={language_name} key={index} color="success" />;
          } else if (language_name.toLowerCase() === "html") {
            return (
              <Tag
                text={language_name}
                key={index}
                color="orange"
                textColor="white"
              />
            );
          } else if (language_name.toLowerCase() === "python") {
            return (
              <Tag
                text={language_name}
                key={index}
                color="var(--primary-blue)"
                textColor="white"
              />
            );
          } else {
            return <Tag text={language_name} key={index} color="default" />;
          }
        })}
      </div>
    </div>
  );
}
