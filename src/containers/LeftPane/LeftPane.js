import React from "react";

import "./LeftPane.css";

// components
import HomePageLeftPane from "../../components/HomePageLeftPane/HomePageLeftPane";
import HomeLeftPaneImpressions from "../../components/HomeLeftPaneImpressions/HomeLeftPaneImpressions";

function LeftPane() {
  return (
    <div className="leftPaneContainer">
      <HomePageLeftPane />
      <HomeLeftPaneImpressions />
      <div></div>
      <div></div>
    </div>
  );
}

export default LeftPane;
