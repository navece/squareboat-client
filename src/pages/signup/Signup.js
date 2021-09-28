import "./signup.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
axios.defaults.baseURL = "https://squareboat-api.herokuapp.com/api";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const handleChange = () => {
    setError({});
  };
  const username = useRef();
  const handle = useRef();
  const password = useRef();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      handle: handle.current.value,
      password: password.current.value,
    };
    try {
      setLoading(true);
      const res = await axios.post("/auth/signup", user);
      console.log(res.data.error);
      setLoading(false);
      if (res.data.error) {
        if (res.data.error.handle) handle.current.value = "";
        if (res.data.error.username) username.current.value = "";
        if (res.data.error.password) password.current.value = "";
        setError(res.data.error);
      } else history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signupContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={error.username ? error.username : "Username"}
          className={error.username ? "signupInputError" : "signupInput"}
          onChange={handleChange}
          ref={username}
        />
        <input
          type="text"
          placeholder={error.handle ? error.handle : "Handle"}
          ref={handle}
          onChange={handleChange}
          className={error.handle ? "signupInputError" : "signupInput"}
        />
        <input
          type="password"
          placeholder={error.password ? error.password : "Password"}
          className={error.password ? "signupInputError" : "signupInput"}
          onChange={handleChange}
          ref={password}
        />
        <button className="signupButton" type="submit">
          {loading ? "Loading..." : "Signup"}
        </button>
        <div>
          <span style={{ color: "grey" }}>already have an account ? </span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "steelblue", cursor: "pointer" }}>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
