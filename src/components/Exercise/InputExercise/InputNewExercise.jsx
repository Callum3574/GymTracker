import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../../Contexts/AuthContext.jsx";
import Rating from "@mui/material/Rating";

function InputNewExercise({ handleClose, show }) {
  const { currentUser } = useAuth();
  console.log(currentUser.uid);
  const [inputtedExercise, setInputtedExercise] = useState({
    exercise_id: 0,
    duration: 0,
    calories: 0,
    steps: 0,
    date: "",
    distance: 0,
    user_id: currentUser.uid,
    location: "",
    rating: 0,
  });

  const handleInput = (e) => {
    setInputtedExercise({
      ...inputtedExercise,
      [e.target.name]: e.target.value,
    });
    console.log(inputtedExercise);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4000/input_exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputtedExercise),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <Modal style={{ marginTop: "5rem" }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Input new exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="px-2">
              <select onChange={handleInput} name="exercise_id">
                <option value={1}>walk</option>
                <option value={2}>run</option>
              </select>
            </div>
          </div>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                name="date"
                onChange={handleInput}
              />
              <Form.Label>Distance (km)</Form.Label>
              <Form.Control
                type="number"
                placeholder="distance"
                autoFocus
                name="distance"
                onChange={handleInput}
              />
              <Form.Label>Steps</Form.Label>
              <Form.Control
                type="number"
                placeholder="amount-of-steps"
                autoFocus
                name="steps"
                onChange={handleInput}
              />
              <Form.Label>Calories</Form.Label>
              <Form.Control
                type="number"
                placeholder="calories"
                autoFocus
                name="calories"
                onChange={handleInput}
              />
              <Form.Label>Duration (mins)</Form.Label>
              <Form.Control
                type="number"
                placeholder="duration"
                autoFocus
                name="duration"
                onChange={handleInput}
              />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="location"
                autoFocus
                name="location"
                onChange={handleInput}
              />
              <div>
                <Rating
                  name="rating"
                  defaultValue={0}
                  size="small"
                  onChange={handleInput}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InputNewExercise;
