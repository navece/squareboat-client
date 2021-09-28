import "./feed.css";
import PostForm from "../postform/PostForm";
import Post from "../post/Post";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../features/post/postSlice";

export default function Feed() {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const handlePost = async (content) => {
    try {
      const res = await axios.post("post", {
        userId: user._id,
        content: content,
      });
      dispatch(addPost(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="feedContainer">
      <PostForm handlePost={handlePost} />
      {posts.map((data) => (
        <Post key={data._id} post={data} />
      ))}
    </div>
  );
}
