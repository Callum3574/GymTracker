import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

function InputNewExercise({ handleClose, show }) {
  const [inputtedExercise, setInputtedExercise] = useState({
    type: "",
    date: "",
    distance: "",
    steps: "",
    calories: "",
    time: "",
  });

  const handleInput = (e) => {
    setInputtedExercise({
      ...inputtedExercise,
      [e.target.name]: e.target.value,
    });
    console.log(inputtedExercise);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/post_exercise", {
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
              <Dropdown onChange={handleInput} name="type">
                <Dropdown.Toggle
                  name="type"
                  variant="success"
                  id="dropdown-basic"
                >
                  Select type
                </Dropdown.Toggle>

                <Dropdown.Menu name="type">
                  <Dropdown.Item href="#/action-1">Run</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Walk</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
              <Form.Label>Distance</Form.Label>
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
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="time"
                autoFocus
                name="time"
                onChange={handleInput}
              />
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" autoFocus />
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
