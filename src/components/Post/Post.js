import React from "react";

// styles
import "./Post.css";
import PostHeader from "./PostHeader";
import UserInfo from "./UserInfo";
import EngagementTile from "./EngagementTile";
import PostContent from "./PostContent";

function Post({ post }) {
  return (
    <div className="postContainer">
      <PostHeader />

      <UserInfo />

      <PostContent content={post.content} />

      <EngagementTile likes={post.likes} comments={post.comments} />
    </div>
  );
}

export default Post;
