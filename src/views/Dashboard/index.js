import React from "react";
import Menu from "../../styled-components/section-components/Menu";
import "./style.views.dashboard.css";

export default function Dashboard() {
  return (
    <div className="view view__dashboard">
      {/* header section */}
      <Menu />
      {/* Board/Cards Section */}
      <div className="board-wrapper" />
    </div>
  );
}
