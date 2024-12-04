import React from "react";

// styles
import "./Navbar.css";

import { useNavigate } from "react-router-dom";

// mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import SquareIcon from "@mui/icons-material/Square";

function Navbar() {
  const navigate = useNavigate();
  const ICON_DIMENSIONS = "28px";

  const styles = {
    height: ICON_DIMENSIONS,
    width: ICON_DIMENSIONS,
    color: "gray",
  };

  const navItems = [
    {
      id: 1,
      icon: <HomeIcon style={styles} />,
      text: "Home",
    },
    {
      id: 2,
      icon: <PeopleAltIcon style={styles} />,
      text: "My Network",
    },
    {
      id: 3,
      icon: <WorkIcon style={styles} />,
      text: "Jobs",
    },
    {
      id: 4,
      icon: <TextsmsIcon style={styles} />,
      text: "Messaging",
    },
    {
      id: 5,
      icon: <NotificationsIcon style={styles} />,
      text: "Notifications",
    },
    {
      id: 6,
      icon: <AccountCircleIcon style={styles} />,
      text: "Me",
    },
  ];

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="navContainer">
      {/* Left Side  */}
      <div className="navLeft">
        <div className="navLeftIcon" onClick={goToHome}>
          <LinkedInIcon
            style={{ color: "#0A66C2", height: "45px", width: "45px" }}
          />
        </div>

        <div className="navLeftInputContainer">
          <SearchIcon
            style={{ position: "absolute", top: "5px", padding: "0 10px" }}
          />
          <input className="navLeftInput" placeholder="Search" />
        </div>
      </div>

      {/* Right Side  */}
      <div className="navRight">
        <div className="navItems">
          {navItems.map((navItem, key) => (
            <div className="navItemContainer">
              <div className="navItemsIcon">{navItem.icon}</div>
              <p className="navItemsText">{navItem.text}</p>
            </div>
          ))}
        </div>

        <div className="navRightBusinessContainer">
          <div className="navItemContainer">
            <div className="navItemsIcon">
              <AppsIcon style={styles} />
            </div>
            <p className="navItemsText">For Business</p>
          </div>

          <div className="navItemContainer tryPremiumIcon">
            <div className="navItemsIcon">
              <SquareIcon style={styles} />
            </div>
            <p className="navItemsText">Try Premium for ₹0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
