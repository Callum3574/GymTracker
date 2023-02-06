import React from "react";
import HighScores from "./Highscores.jsx";
import RecentExercises from "./Recent.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputNewExercise from "./InputNewExercise.jsx";
import { useEffect, useState } from "react";

function ExerciseHome() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <RecentExercises />
          </div>
        </div>
        <HighScores />
      </div>
      <hr />
    </div>
  );
}

export default ExerciseHome;
