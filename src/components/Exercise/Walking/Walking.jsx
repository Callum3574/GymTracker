import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Graphs/WalkingGraph";
import Carousel from "react-bootstrap/Carousel";
import "../../../assets/custom.css";
import "./css/Walking.css";
import HikingIcon from "@mui/icons-material/Hiking";

import RecentWalks from "./RecentWalks.jsx";
const Walking = () => {
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
  const reduceTotals = (val) => {
    let total = data.reduce((acc, value) => {
      return acc + value[val];
    }, 0);
    return total;
  };

  const [totals, setTotals] = useState([
    {
      name: "Total Walks",
      total: data.length,
      avg: `${data.length / 7} walks per week`,
    },
    {
      name: "Total Hours",
      total: Math.floor(reduceTotals("duration") / 60),
      avg: `${
        Math.ceil(reduceTotals("duration")) / data.length
      } (mins) per day`,
    },

    {
      name: "Total Calories",
      total: reduceTotals("calories"),
      avg: `${
        Math.floor(reduceTotals("calories")) / data.length
      } calories per walk`,
    },
    {
      name: "Total Steps",
      total: reduceTotals("steps"),
      avg: `${Math.floor(reduceTotals("steps")) / data.length} steps per walk`,
    },
    {
      name: "Total Distance",
      total: reduceTotals("distance"),
      avg: `${
        Math.floor(reduceTotals("distance")) / data.length
      } (km) per walk`,
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
    console.log(totals);
  }, []);

  const longestWalks = () => {
    const orderedWalksByTime = data.sort((a, b) => {
      return b.duration - a.duration;
    });
    return orderedWalksByTime.map((item, key) => {
      return <p key={key}> White Nancy: {item.duration} Minutes</p>;
    });
  };

  return (
    <div className="container">
      <div className=" p-3 d-flex justify-content-center">
        <h1>Welcome to Walking</h1>
        <HikingIcon className="mt-3" style={{ marginLeft: "1rem" }} />
      </div>
      <div className=" container mt-5">
        <div className="row">
          <div className="p-3 col-sm border">
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
          <div className="p-3 recent-walks-container col-sm border">
            <div>
              <h4>Recent Walks</h4>
              <hr />
              <div>
                {data.map((walk) => {
                  return <RecentWalks walk={walk} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="p-3 longest-walks col-sm border">
            <div className="">
              <h4>Longest Walks</h4>

              <div>{longestWalks()}</div>
            </div>
          </div>
          <div className="p-3 col-sm border">
            <div className="d-flex justify-content-evenly">
              <div>
                <h4>2023 Stats</h4>
                {totals.map((item) => {
                  return (
                    <div>
                      <p>
                        <strong>{item.name}: </strong>
                        {item.total}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4>Averages</h4>
                {totals.map((item) => {
                  return (
                    <div>
                      <p>{item.avg}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walking;
