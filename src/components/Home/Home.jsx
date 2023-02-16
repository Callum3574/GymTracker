import React from "react";
import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext.jsx";
import { auth } from "../../firebase.js";

function Home() {
  const { currentUser, logout } = useAuth();

  const user = currentUser;

  const checkAdmin = async () => {
    if (user) {
      const idToken = await user.getIdToken();
      const res = await fetch("http://localhost:4000/verify_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      console.log(await res.json());
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {}, []);

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
