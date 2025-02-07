import React, { useEffect, useState } from "react";

// styles
import "./Post.css";

function PostContent({ content }) {
  console.log("postContent", content);

  const [showMoreContent, setShowMoreContent] = useState(false);

  useEffect(() => {
    if (content.length > 100) {
      setShowMoreContent(content.slice(0, 100));
    } else {
      setShowMoreContent(content);
    }
  }, []);

  const handleShowMore = () => {
    setShowMoreContent(content);
  };

  return (
    <div className="postContentContainer">
      <p>
        {showMoreContent.length < content.length ? (
          <p>
            {showMoreContent}{" "}
            <span className="showMoreText" onClick={handleShowMore}>
              ...more
            </span>
          </p>
        ) : (
          showMoreContent
        )}
      </p>
    </div>
  );
}

export default PostContent;
