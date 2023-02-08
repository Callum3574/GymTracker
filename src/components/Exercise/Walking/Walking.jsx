import React from "react";
import { useLocation } from "react-router-dom";

const Walking = ({ walkData }) => {
  const location = useLocation();
  const data = location.state && location.state.walkData;
  console.log(data);
  return (
    <div>
      <h1>Walking</h1>
    </div>
  );
};

export default Walking;
