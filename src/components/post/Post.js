import "./post.css";
import image from "../../assets/default.png";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../features/post/postSlice";

export default function Post({ post }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [postUser, setPostUser] = useState({});
  const handleDelete = async () => {
    try {
      await axios.delete(`post/${user._id}/${post._id}`);
      dispatch(deletePost(post._id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchPostUser = async () => {
      const res = await axios.get(`user/${post.userId}`);
      setPostUser(res.data);
    };
    fetchPostUser();
  }, [post.userId]);
  return (
    <div className="postContainer">
      <div className="postLeft">
        <img className="postImage" src={image} alt="" />
        <div className="userDetails">
          <span>{postUser.username}</span>
          <span style={{ color: "grey" }}>@{postUser.handle}</span>
        </div>
      </div>
      <div className="postRight">
        <p className="postContent" style={{ color: "darkslategray" }}>
          {post.content}
        </p>
        <div className="iconBar">
          {postUser._id === user._id ? (
            <DeleteOutlineOutlinedIcon
              onClick={handleDelete}
              style={{ color: "red" }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
