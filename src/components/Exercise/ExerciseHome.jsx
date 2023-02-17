import React from "react";
import HighScores from "./Highscores/Highscores.jsx";
import ExerciseSelection from "./InputExercise/ExerciseSelection.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputNewExercise from "./InputExercise/InputNewExercise";
import { useAuth } from "../Contexts/AuthContext.jsx";

import { useEffect, useState } from "react";

function ExerciseHome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [walkData, setWalkData] = useState([]);
  const { currentUser } = useAuth();

  const fetchExerciseData = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/all_walk_data/${currentUser.uid}`
      );
      const data = await res.json();
      setWalkData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchExerciseData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="mt-3">
          <div className="container d-flex justify-content-start">
            <div>
              <h3>Welcome to Exercises</h3>
            </div>
            <div style={{ marginBottom: "20px" }}>
              {show && (
                <InputNewExercise handleClose={handleClose} show={show} />
              )}
            </div>
            <div>
              <Button onClick={handleShow} varient="text">
                Log new exercise
              </Button>
              <Button varient="text">View all exercises</Button>
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
