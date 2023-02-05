import React from "react";
import ExerciseGeneral from "./ExerciseGeneral;.jsx";
import ExerciseGym from "./ExerciseGym.jsx";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
function ExerciseHome() {
  const [highscoreChoice, setHighscoreChoice] = useState(null);

  const handleHighscoreChoice = (event) => {
    setHighscoreChoice(event.target.value);
    console.log(highscoreChoice);
  };

  return (
    <div>
      <div className="container">
        <div className="mt-3">
          <h3>Welcome to Exercises</h3>
        </div>
        <div className="d-flex flex-column align-items-center mt-5 mb-5">
          <div>
            <h4>Highscores:</h4>
          </div>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleHighscoreChoice}
              >
                <FormControlLabel
                  value="General"
                  control={<Radio />}
                  label="General"
                  onChange={handleHighscoreChoice}
                />
                <FormControlLabel value="Gym" control={<Radio />} label="Gym" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <div>
        {highscoreChoice === "General" ? <ExerciseGeneral /> : <ExerciseGym />}
      </div>
    </div>
  );
}

export default ExerciseHome;
