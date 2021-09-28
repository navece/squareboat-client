import "./login.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetError } from "../../features/auth/authSlice";
import jwt from "jsonwebtoken";
import axios from "axios";

export default function Login() {
  const { error } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handle = useRef();
  const password = useRef();
  if (error) {
    if (error.handle) handle.current.value = "";
    if (error.password) password.current.value = "";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("auth/login", {
        handle: handle.current.value,
        password: password.current.value,
      });
      const decoded = jwt.verify(res.data, "SUPER_SECRET");
      localStorage.setItem("Token", res.data);
      dispatch(login(decoded));
      window.location.reload();
    } catch (err) {
      dispatch(login(err.response.data));
    }
    setLoading(false);
  };
  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={error && error.handle ? error.handle : "Handle"}
          onChange={() => dispatch(resetError())}
          className={error && error.handle ? "loginInputError" : "loginInput"}
          ref={handle}
        />
        <input
          type="password"
          placeholder={error && error.password ? error.password : "Password"}
          onChange={() => dispatch(resetError())}
          className={error && error.password ? "loginInputError" : "loginInput"}
          ref={password}
        />
        {loading ? (
          <button className="loginButton" type="submit">
            Loading...
          </button>
        ) : (
          <button className="loginButton" type="submit">
            Login
          </button>
        )}
        <div>
          <span style={{ color: "grey" }}>don't have an account ? </span>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span style={{ color: "steelblue", cursor: "pointer" }}>
              Signup
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
