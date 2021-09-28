import "./navbar.css";
import image from "../../assets/default.png";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/">
          <DirectionsBoatIcon />
        </Link>
      </div>
      <div className="navbarCenter">
        <h3>tweetboat</h3>
      </div>
      <div className="navbarRight">
        <Link to="/profile">
          <img src={image} className="profilePicture" alt="" />
        </Link>
      </div>
    </div>
  );
}
