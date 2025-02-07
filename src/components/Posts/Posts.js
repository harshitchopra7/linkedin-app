import React from "react";
import Post from "../Post/Post";

function Posts({ allPosts }) {
  // PostHeader

  // User Info

  // Content

  // Post Info

  // Engagement Tile

  console.log("allPosts", allPosts);

  return (
    <div>
      {allPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;
