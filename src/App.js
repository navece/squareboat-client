import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import "./app.css";
import Followers from "./components/followers/Followers";
import Followings from "./components/followings/Followings";
import Find from "./components/find/Find";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { autoLogin } from "./features/auth/authSlice";
import axios from "axios";
import { setPosts } from "./features/post/postSlice";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) dispatch(autoLogin());
    const fetchPosts = async () => {
      try {
        if (user) {
          const res = await axios.get(`post/timeline/${user._id}`);
          dispatch(setPosts(res.data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [user, dispatch]);

  return (
    <Router>
      {user ? (
        <>
          <Navbar />
          <div className="body">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="mainbar">
              <Switch>
                <Route exact path="/">
                  <Feed />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/followers">
                  <Followers />
                </Route>
                <Route path="/followings">
                  <Followings />
                </Route>
                <Route path="/find">
                  <Find />
                </Route>
              </Switch>
            </div>
          </div>
        </>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/followers">
            <Redirect to="/" />
          </Route>
          <Route path="/followings">
            <Redirect to="/" />
          </Route>
          <Route path="/profile">
            <Redirect to="/" />
          </Route>
          <Route path="/find">
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
