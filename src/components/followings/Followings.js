import "./followings.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function Followings() {
  const { user } = useSelector((state) => state.auth);
  const { followings } = user;
  return (
    <div className="followingsContainer">
      <ul className="cardList">
        {followings.map((id) => (
          <Card key={id} id={id} type="following" />
        ))}
      </ul>
    </div>
  );
}
