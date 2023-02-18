import Display from "./Display.jsx";
import React, { useState } from "react";
function ExerciseGeneral() {
  const [generalExercises, setGeneralExercises] = useState([
    {
      name: "Running",
      record: "5km",
      time: "25 minutes",
      date: "2021-09-01",
      id: 1,
    },
    {
      name: "Push Ups",
      record: 200,
      time: "1day",
      date: "2021-09-01",
      id: 2,
    },
    {
      name: "Walking",
      record: "5km",
      time: "1hr",
      date: "2021-09-01",
      id: 3,
    },
  ]);
  return (
    <div className="container border p-5">
      <h1>Exercise Gym</h1>
      <Display exercises={generalExercises} />
    </div>
  );
}

export default ExerciseGeneral;
