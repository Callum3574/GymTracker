import React from "react";
import ExerciseSelection from "./InputExercise/ExerciseSelection.jsx";
import Button from "@mui/material/Button";
import InputNewExercise from "./InputExercise/InputNewExercise";
import { useAuth } from "../Contexts/AuthContext.jsx";
import { useEffect, useState } from "react";
import userLevel from "../Rank/UserLevel";
import checkUser from "../Auth/CheckUser.js";

function ExerciseHome() {
  const [walkData, setWalkData] = useState([]);
  const { currentUser } = useAuth();

  const fetchExerciseData = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/all_walk_data/${currentUser.uid}`
      );
      const data = await res.json();
      setWalkData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchExerciseData();
  }, []);

  useEffect(() => {
    userLevel();
  }, [walkData]);

  return (
    <div>
      <div className="container">
        <div className="mt-3">
          <div className="container d-flex justify-content-start">
            <div>
              <h3>Welcome to Exercises</h3>
            </div>
          </div>
          <hr />
          <div>
            <ExerciseSelection walkData={walkData} />
          </div>
        </div>
        {/* <HighScores /> */}
      </div>
      <hr />
    </div>
  );
}

export default ExerciseHome;
