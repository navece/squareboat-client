import "./followers.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function Followers() {
  const { user } = useSelector((state) => state.auth);
  const { followers } = user;
  return (
    <div className="followersContainer">
      <ul className="cardList">
        {followers.map((id) => (
          <Card key={id} id={id} type="follower" />
        ))}
      </ul>
    </div>
  );
}
