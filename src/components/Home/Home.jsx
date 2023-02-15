import React from "react";

import { useAuth } from "../Contexts/AuthContext.jsx";

function Home() {
  const { currentUser, logout } = useAuth();
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
        <h3>{currentUser.email}</h3>
      </div>
      <div>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
