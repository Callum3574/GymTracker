import React from "react";
import { useNavigate } from "react-router-dom";

const ExerciseSelection = ({ walkData }) => {
  const navigate = useNavigate();

  const openWalking = () => {
    navigate("/exercise_home/walking", { state: { walkData } });
  };

  return (
    <div>
      <div className="container">
        <h1>Exercise Selection</h1>
        <div className="d-flex justify-content-center">
          <div>
            <button onClick={openWalking}>Walking</button>
          </div>

          <button>Running</button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSelection;
