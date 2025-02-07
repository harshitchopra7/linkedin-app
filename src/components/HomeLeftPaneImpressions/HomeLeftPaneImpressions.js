import React from "react";

import "./HomeLeftPaneImpressions.css";

function HomeLeftPaneImpressions() {
  const elements = [
    {
      text: "Profile Viewers",
      count: "8,715",
    },
    {
      text: "Post Impressions",
      count: "102,853",
    },
  ];

  return (
    <div className="leftPaneIndividualContainer">
      <div className="homePageLeftImpressionsContainer">
        {elements.map((element) => (
          <div className="homePageLeftImpressions">
            <p className="homePageLeftImpressionsText">{element.text}</p>
            <p className="homePageLeftImpressionsCount">{element.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeLeftPaneImpressions;
