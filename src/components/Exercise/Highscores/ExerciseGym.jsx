import React from "react";
import { useState } from "react";
import Display from "./Display.jsx";

function ExerciseGym() {
  const [gymExercises, setGymExercises] = useState([
    {
      name: "Bench Press",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 1,
    },
    {
      name: "Squats",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 2,
    },
    {
      name: "Deadlifts",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 3,
    },
    {
      name: "Bench Press",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 1,
    },
    {
      name: "Squats",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 2,
    },
    {
      name: "Deadlifts",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 3,
    },
  ]);

  return (
    <div className="container border p-5">
      <h1>Exercise Gym</h1>
      <Display exercises={gymExercises} />
    </div>
  );
}

export default ExerciseGym;
