import "./profile.css";
import image from "../../assets/default.png";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    localStorage.removeItem("Token");
    window.location.reload();
  };
  return (
    <div className="profileContainer">
      <img className="img" src={image} alt="" />
      <span>{user.username}</span>
      <span style={{ color: "gray" }}>@{user.handle}</span>
      <button onClick={handleLogout} className="logoutButton">
        Logout
      </button>
    </div>
  );
}
