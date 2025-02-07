import React from "react";

// styles
import "./Post.css";

// mui icons
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function PostHeader() {
  const commonStyles = {
    fontSize: "20px",
    cursor: "pointer",
    marginLeft: "10px",
  };
  return (
    <div className="postHeaderContainer">
      <div className="postHeaderInfo">
        <img
          className="postHeaderImage"
          alt=""
          src="https://media.licdn.com/dms/image/v2/C4D03AQEQeTng_MoWHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616680520939?e=1738800000&v=beta&t=TJQydwR77a21HKkhzGaQFwmWhANXOtPGJkE35fiFm_A"
        />
        <p>Kartik Joshi likes this</p>
      </div>
      <div className="postHeaderIcons">
        <MoreHorizIcon style={commonStyles} />
        <CloseIcon style={commonStyles} />
      </div>
    </div>
  );
}

export default PostHeader;
