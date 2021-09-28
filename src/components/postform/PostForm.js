import "./postform.css";
import image from "../../assets/default.png";
import { useRef } from "react";

export default function PostForm({ handlePost }) {
  const content = useRef();
  const handleClick = () => {
    handlePost(content.current.value);
  };
  return (
    <div className="postFromContainer">
      <div className="postFormTop">
        <img className="postFormPicture" src={image} alt="" />
        <form>
          <input
            type="text"
            minLength="10"
            placeholder="What's in your mind?"
            className="postFormInput"
            ref={content}
          />
        </form>
      </div>
      <hr />
      <div className="postFormBottom">
        <button onClick={handleClick} className="submitButton">
          Post
        </button>
      </div>
    </div>
  );
}
