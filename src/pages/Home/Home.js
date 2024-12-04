import React from "react";

// styles
import "./Home.css";

// components
import LeftPane from "../../containers/LeftPane/LeftPane";
import MainFeed from "../../containers/MainFeed/MainFeed";
import RightPane from "../../containers/RightPane/RightPane";

function Home() {
  // Left Pane -
  //     Profile Summary
  //     Profile Statistics
  //     Linkedin Premium Ad
  //     Bottom Left Pane
  // Main Feed -
  //     Create Post Panel
  //     Sorting of Posts
  //     Posts Feed
  // Right Pane -
  //     Trending Now Section
  //     Promoted Page Ad
  //     Footer
  return (
    <div className="homeContainer">
      <LeftPane />
      <MainFeed />
      <RightPane />
    </div>
  );
}

export default Home;
