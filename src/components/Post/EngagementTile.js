import React, { useState } from "react";

// styles
import "./Post.css";

// mui icons
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function EngagementTile({ likes, comments }) {
  const iconCommonStyles = { fontSize: "16px" };

  const [likeCount, setLikeCount] = useState(likes);
  const [likedByUser, setLikedByUser] = useState(false);
  const [commentsCount, setCommentsCount] = useState(comments);

  const updateLike = () => {
    if (likedByUser) {
      setLikeCount(likeCount - 1);
      setLikedByUser(false);
    } else {
      setLikeCount(likeCount + 1);
      setLikedByUser(true);
    }
  };

  const enagementTypes = [
    {
      type: "Like",
      icon: (
        <ThumbUpOutlinedIcon
          style={{ ...iconCommonStyles, color: likedByUser && "#0A66C2" }}
        />
      ),
      onClick: updateLike,
    },
    {
      type: "Comment",
      icon: <InsertCommentOutlinedIcon style={iconCommonStyles} />,
      onClick: () => {},
    },
    {
      type: "Repost",
      icon: <AutorenewOutlinedIcon style={iconCommonStyles} />,
      onClick: () => {},
    },
    {
      type: "Send",
      icon: <SendOutlinedIcon style={iconCommonStyles} />,
      onClick: () => {},
    },
  ];

  return (
    <div className="engagementTileContainer">
      <div className="engagementTileNumberOfEngagementsContainer">
        <div className="engagementTileReactions">
          <p>
            {likedByUser ? "You" : "Gaurav Kumar"} and {likeCount} others
          </p>
        </div>
        <div className="engagementTileComments">{commentsCount} comments</div>
      </div>

      <div className="engagementTileTypeContainer">
        {enagementTypes.map((type) => (
          <div className="engagementTileTypeElement" onClick={type.onClick}>
            <div>{type.icon}</div>
            <p>{type.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EngagementTile;
