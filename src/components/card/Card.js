import "./card.css";
import image from "../../assets/default.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../features/auth/authSlice";

export default function Card({ id, type }) {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleFollow = async () => {
    try {
      console.log(id, currentUser._id);
      await axios.put(`user/${id}/follow`, { userId: currentUser._id });
      dispatch(follow(id));
      alert("User has been followed");
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleUnfollow = async () => {
    try {
      await axios.put(`user/${id}/unfollow`, { userId: currentUser._id });
      dispatch(unfollow(id));
      alert("User has been unfollowed");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`user/${id}`);
      setUser(res.data);
    };
    fetchPosts();
  }, [id]);
  return (
    <div className="cardContainer">
      <div className="cardContainerLeft">
        <img className="postImage" src={image} alt="" />
      </div>
      <div className="cardContainerMid">
        <span>{user.username}</span>
        <span style={{ color: "grey" }}>@{user.handle}</span>
      </div>
      <div className="cardContainerRight">
        {type === "following" ? (
          <button onClick={handleUnfollow} className="followButton">
            unfollow
          </button>
        ) : (
          <button onClick={handleFollow} className="followButton">
            follow
          </button>
        )}
      </div>
    </div>
  );
}
