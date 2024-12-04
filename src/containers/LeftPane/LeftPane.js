import React from "react";

import "./LeftPane.css";

// components
import HomePageLeftPane from "../../components/HomePageLeftPane/HomePageLeftPane";

function LeftPane() {
  return (
    <div className="leftPaneContainer">
      <HomePageLeftPane />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LeftPane;
