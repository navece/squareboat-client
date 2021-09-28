import "./find.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "../card/Card";

export default function Find() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("user/all");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="findContainer">
      <ul className="cardList">
        {users.map(({ id }) => (
          <Card key={id} id={id} type="find" />
        ))}
      </ul>
    </div>
  );
}
