import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Graphs/WalkingGraph";
import Carousel from "react-bootstrap/Carousel";

const Walking = ({ walkData }) => {
  const location = useLocation();
  const data = location.state && location.state.walkData;

  const [exerciseAttributes, setExereciseAttributes] = useState([
    {
      name: "Calories",
      data: [],
    },
    {
      name: "Steps",
      data: [],
    },
    {
      name: "Distance",
      data: [],
    },
  ]);

  const updateAttribute = () => {
    setExereciseAttributes((prev) => {
      return [
        {
          ...prev[0],
          data: data.map((cal) => [cal.calories, cal.date]),
        },
        {
          ...prev[1],
          data: data.map((step) => [step.steps, step.date]),
        },
        {
          ...prev[2],
          data: data.map((dist) => [dist.distance, dist.date]),
        },
      ];
    });
  };
  useEffect(() => {
    updateAttribute();
  }, []);

  return (
    <div className="container">
      <h1>Walking</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm border">
            <div>
              <h4>Graph</h4>
            </div>
            <Carousel slide>
              {exerciseAttributes.map((graphData) => {
                return (
                  <Carousel.Item>
                    <h3>{graphData.name}</h3>
                    <Graph graphData={graphData} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="col-sm border">
            <div>
              <h4>Recent Walks</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm border">
            <div>
              <h4>Longest Walks</h4>
            </div>
          </div>
          <div className="col-sm border">
            <div>
              <h4>Most Calories</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walking;
