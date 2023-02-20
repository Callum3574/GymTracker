import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Graph from "../Graphs/WalkingGraph";
import Carousel from "react-bootstrap/Carousel";
import "../../../assets/custom.css";
import "./css/Walking.css";
import HikingIcon from "@mui/icons-material/Hiking";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import RunCircleIcon from "@mui/icons-material/RunCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Overview from "../Walking/components/Overview.jsx";
import { useAuth } from "../../Contexts/AuthContext.jsx";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Messages from "../Walking/components/Messages.jsx";
import RecentWalksSect from "../Walking/components/RecentWalks";
import checkUser from "../../Auth/CheckUser";
import InputNewExercise from "../InputExercise/InputNewExercise.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinearWithValueLabel from "../../Rank/ProgressBar";
const Walking = () => {
  const { currentUser } = useAuth();
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const checkingUserName = async () => {
      const user = await checkUser(currentUser);
      setUserLoggedIn(user);
    };
    if (currentUser) {
      checkingUserName();
    }
  }, []);

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
      name: "Walks",
      icon: <HikingIcon className="mt-3" style={{ fontSize: "4rem" }} />,
      total: data.length,
      avg: `${Math.ceil(data.length / 7)} walks per week`,
    },
    {
      name: "Distance",
      icon: <AltRouteIcon className="mt-3" style={{ fontSize: "4rem" }} />,
      total: reduceTotals("distance") + " " + "(km)",
      avg: `${Math.ceil(reduceTotals("distance") / data.length)} (km) per walk`,
    },

    {
      name: "Calories",
      icon: <FitnessCenterIcon className="mt-3" style={{ fontSize: "4rem" }} />,

      total: reduceTotals("calories"),
      avg: `${Math.ceil(
        reduceTotals("calories") / data.length
      )} calories per walk`,
    },
    {
      name: "Steps",
      icon: <RunCircleIcon className="mt-3" style={{ fontSize: "4rem" }} />,
      total: reduceTotals("steps"),
      avg: `${Math.ceil(reduceTotals("steps")) / data.length} steps per walk`,
    },
    {
      name: "Hours",
      icon: <AccessTimeIcon className="mt-3" style={{ fontSize: "4rem" }} />,
      total: Math.floor(reduceTotals("duration") / 60),
      avg: `${
        Math.ceil(reduceTotals("duration")) / data.length
      } (mins) per day`,
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="container">
      <div className="container mt-3 d-flex  ">
        <h5>Hi {userLoggedIn.name}, Welcome Back</h5>
      </div>
      <div>
        <Overview totals={totals} />
      </div>
      <div>
        <hr className="mt" />
      </div>
      <div>
        <Container>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            justifyContent="start"
          >
            <Item className="w-25">
              <Container>
                <div>
                  <h4>Walking</h4>
                </div>
                <div>
                  <h6>Current Ranking: {userLoggedIn.rank}</h6>
                  <h6>
                    Remaining steps until next level:{" "}
                    {Math.ceil(totals[3].total / 10000) * 10000 -
                      totals[3].total}
                  </h6>
                  <LinearWithValueLabel
                    remainingSteps={
                      (Math.ceil(totals[3].total / 10000) * 10000 -
                        totals[3].total) /
                      100
                    }
                  />
                </div>
                <div style={{ marginTop: "8rem" }}>
                  <Button onClick={handleShow} varient="text">
                    Log new exercise
                  </Button>
                  <Button varient="text">View all exercises</Button>
                </div>
              </Container>
            </Item>
            <div style={{ marginBottom: "20px" }}>
              {show && (
                <InputNewExercise handleClose={handleClose} show={show} />
              )}
            </div>

            <Item className="w-75">
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-evenly">
                  <h4>Recent Walks</h4>
                </div>

                <div className="recent-walks-box">
                  {data.map((walk) => {
                    return <RecentWalksSect walk={walk} />;
                  })}
                </div>
              </div>
            </Item>
          </Stack>
        </Container>
      </div>
      <hr />
      <div className="">
        <Container>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            justifyContent="start"
          >
            <Item className="w-75">
              <Carousel slide className="carousel">
                {exerciseAttributes.map((graphData) => {
                  return (
                    <Carousel.Item>
                      <h3>{graphData.name}</h3>
                      <Graph graphData={graphData} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Item>
            <Item className="w-25">
              <Messages />
            </Item>
          </Stack>
        </Container>
      </div>

      <hr />
    </div>
  );
};

export default Walking;
