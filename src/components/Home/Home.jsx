import React from "react";
import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext.jsx";
import { auth } from "../../firebase.js";
import checkAdmin from "../Auth/AuthAdmin";

function Home() {
  const { currentUser, logout } = useAuth();
  const user = currentUser;
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="container">
        <h1>Welcome to GYM Tracker</h1>
      </div>
      <div>
        <h3>{currentUser && currentUser.email + " " + currentUser.uid}</h3>
      </div>
      <div>{currentUser && <button onClick={handleLogOut}>Logout</button>}</div>
    </div>
  );
}

export default Home;
