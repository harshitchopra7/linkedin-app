import React from "react";

import { useNavigate } from "react-router-dom";

import "./HomePageLeftPane.css";

function HomePageLeftPane() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="leftPaneProfileDescriptionContainer" onClick={goToProfile}>
      <div className="leftPaneProfileImage">
        <img
          alt="leftPaneProfileImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcboVCMxwwTA85RGs6AIdPZ7S8XpQc_W4kKg&s"
        />
      </div>
      <div className="leftPaneProfileDescription">
        <img
          className="profileDescriptionImage"
          alt="profileDescriptionImage"
          src="https://media.licdn.com/dms/image/v2/C4D03AQEQeTng_MoWHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616680520939?e=1738800000&v=beta&t=TJQydwR77a21HKkhzGaQFwmWhANXOtPGJkE35fiFm_A"
        />
        <p className="leftPaneUserName">Harshit Chopra</p>
        <p className="leftPaneUserDescription leftPaneDescriptionCommonStyles">
          SDE-2 | Ex-Swiggy | 117k Followers | Typescript
        </p>
        <p className="leftPaneUserLocation leftPaneDescriptionCommonStyles">
          India
        </p>
        <div className="leftPaneUserCompanyContainer leftPaneDescriptionCommonStyles">
          <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEHg8WfL1CDeg/company-logo_100_100/company-logo_100_100/0/1712215166717/swiggy_in_logo?e=1741219200&v=beta&t=Im1dgNAH2qQOSrs58GUPiKmkDlbKqXGp95fQl9K5r-A" />
          <p>Swiggy</p>
        </div>
      </div>
    </div>
  );
}

export default HomePageLeftPane;
