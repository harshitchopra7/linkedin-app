import React from "react";

// styles
import "./Post.css";

// mui icons
import PublicIcon from "@mui/icons-material/Public";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function UserInfo() {
  const designation =
    "SDET3 AngelOne | 8 years Experience | Ex-Swiggy, Reliance || Expertise in Automation testing | Selenium | Appium | API testing | RestAssured | Java | Kafka | Redis | docker | Kubernetes | BDD | Cucumber | AWS cloud |";

  const commonDividerStyles = {
    fontSize: "5px",
  };
  return (
    <div className="userInfoContainer">
      <div>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQEQeTng_MoWHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616680520939?e=1738800000&v=beta&t=TJQydwR77a21HKkhzGaQFwmWhANXOtPGJkE35fiFm_A"
          alt=""
          className="userInfoImage"
        />
      </div>
      <div>
        <div className="userInfoNameContainer">
          <p className="userInfoName">Atul Kumar</p>
          <FiberManualRecordIcon style={commonDividerStyles} />
          <p>2nd</p>
        </div>

        <div className="userInfoDesgination">
          {designation.length > 55
            ? `${designation.slice(0, 55)}...`
            : designation}
        </div>

        <div className="userInfoTime">
          <p>18h</p>
          <FiberManualRecordIcon style={commonDividerStyles} />
          <PublicIcon style={{ fontSize: "15px" }} />
        </div>
      </div>
      <div className="userInfoFollowContainer">
        <AddIcon style={{ fontSize: "18px" }} />
        <p>Follow</p>
      </div>
    </div>
  );
}

export default UserInfo;
