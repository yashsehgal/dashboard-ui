import React from "react";

export default class Icon extends React.Component {
  render() {
    if (this.props.size === "default" || this.props.size === undefined) {
      return (
        <i className={`${this.props.name}`} style={{ fontSize: "12px" }} />
      );
    } else if (this.props.size === "medium") {
      return (
        <i className={`${this.props.name}`} style={{ fontSize: "16px" }} />
      );
    } else if (this.props.size === "large") {
      return (
        <i className={`${this.props.name}`} style={{ fontSize: "20px" }} />
      );
    }
  }
}
