//Navbar
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@arcana/auth-react";
import profileLoad from "../assets/loader.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = useAuth();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const setAccount = () => {
    const result = auth.user;
    console.log(result);
    if (result) {
      toast.success("Logged in");
      setIsLoggedin(true);
      localStorage.setItem("defaultAccount", JSON.stringify(result.address));
      localStorage.setItem("selectedAddress", JSON.stringify(result.address));
      setAvatar(result.picture);
    }
  };

  const loginWithArcana = async () => {
    await auth
      .loginWithSocial("github")
      .then((result) => {
        setAccount();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error logging in");
      });
  };

  const logout = () => {
    auth.logout();
    localStorage.clear();
    setIsLoggedin(false);
    toast.success("Logged Out", {
      autoClose: 1000,
    });
    window.location.reload();
  };

  useEffect(() => {
    if (auth.user) {
      const result = auth.user;
      console.log(result);
      if (result) {
        setIsLoggedin(true);
        localStorage.setItem("defaultAccount", JSON.stringify(result.address));
        setAvatar(result.picture);
      }
      setIsLoading(false);
    }
  }, [auth.user]);

  return (
    <div className="w-11/12 md:mr-10 md:ml-10 ml-5 md-5 rounded-xl navbar">
      <div className="flex-1 text-blue-200 text-3xl">
        <Link to="/">MoonHub</Link>
      </div>
      <div className="flex-none">
        {isLoading && <img src={profileLoad} className="h-10" />}
        {!isLoggedin && (
          <div className="dropdown dropdown-end flex gap-3">
            <button
              className="justify-between"
              onClick={() => loginWithArcana()}
            >
              Log in with Arcana
            </button>
          </div>
        )}

        {isLoggedin && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {avatar && <img src={avatar} />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/hub">My Hub</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
