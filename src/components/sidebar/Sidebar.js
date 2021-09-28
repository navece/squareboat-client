import "./sidebar.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const handleAlert = () => {
    alert("This feature has not been added yet!");
  };
  return (
    <div className="sidebarContainer">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <Link to="/" style={{ textDecoration: "none" }}>
            <HomeOutlinedIcon />
            <span className="sidebarListItemText">Home</span>
          </Link>
        </li>
        <li onClick={handleAlert} className="sidebarListItem">
          <NotificationsOutlinedIcon />
          <span className="sidebarListItemText">Notifications</span>
        </li>
        <li onClick={handleAlert} className="sidebarListItem">
          <MailOutlineOutlinedIcon />
          <span className="sidebarListItemText">Messages</span>
        </li>
        <li className="sidebarListItem">
          <Link to="/find" style={{ textDecoration: "none" }}>
            <SearchOutlinedIcon />
            <span className="sidebarListItemText">Find</span>
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link to="/followings" style={{ textDecoration: "none" }}>
            <NaturePeopleOutlinedIcon />
            <span className="sidebarListItemText">Followings</span>
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link to="/followers" style={{ textDecoration: "none" }}>
            <EmojiPeopleOutlinedIcon />
            <span className="sidebarListItemText">Followers</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
