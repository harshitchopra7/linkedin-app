import React from "react";

// styles
import "./CreatePost.css";

// mui icons
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArticleIcon from "@mui/icons-material/Article";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function CreatePost({ createPostInput, setCreatePostInput, handleCreatePost }) {
  const createPostMethods = [
    {
      icon: <SlowMotionVideoIcon style={{ color: "#5F9B41" }} />,
      text: "Video",
    },
    {
      icon: <InsertPhotoIcon style={{ color: "#378FE9" }} />,
      text: "Photo",
    },
    {
      icon: <ArticleIcon style={{ color: "#E06847" }} />,
      text: "Write Article",
    },
  ];

  return (
    <div className="createPostContainer">
      <div className="createPostInputContainer">
        {/* image  */}
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQEQeTng_MoWHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616680520939?e=1738800000&v=beta&t=TJQydwR77a21HKkhzGaQFwmWhANXOtPGJkE35fiFm_A"
          alt="userImage"
          className="createPostImage"
        />

        {/* create post input  */}
        <div className="createPostInputFieldContainer">
          <input
            className="createPostInput"
            placeholder="Start a post ..."
            value={createPostInput}
            onChange={(event) => {
              setCreatePostInput(event.target.value);
              console.log("event: ", event.target.value);
            }}
          />
          <div
            className="createPostSubmitButtonContainer"
            onClick={handleCreatePost}
          >
            <SendOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
        </div>
      </div>

      <div className="createPostMethodsContainer">
        {createPostMethods.map((method) => (
          <div className="createPostMethodIndividualContainer">
            <div>{method.icon}</div>
            <p>{method.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatePost;
