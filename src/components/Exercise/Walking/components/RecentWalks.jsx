import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RecentWalksSect({ walk }) {
  const [newRating, setNewRating] = useState(walk.rating);

  const handleNewRating = (e) => {
    setNewRating(e.target.value);
  };

  useEffect(() => {
    updateRating();
  }, [newRating]);

  const updateRating = async () => {
    try {
      const data = await fetch("http://localhost:4000/update_rating", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ rating: newRating, id: walk.id }),
      });
      const res = await data.json();
    } catch (e) {}
  };

  return (
    <Box x={{ width: "100%" }}>
      <Stack spacing={2}>
        {
          <Item>
            <div className="d-flex w-100 justify-content-evenly">
              <div className="d-flex flex-column align-self-center w-25">
                <h4>{walk.location}</h4>
                <div>
                  <Rating
                    name="size-small"
                    size="small"
                    value={parseInt(newRating)}
                    onChange={handleNewRating}
                  />
                </div>
                <div className="mt-2">
                  <p>Share walk</p>
                  <TwitterIcon size={32} round={true} />{" "}
                  <FacebookIcon size={32} round={true} />{" "}
                  <WhatsappIcon size={32} round={true} />{" "}
                </div>
              </div>
              <div>
                <p>
                  <strong>Distance: </strong>
                  {walk.distance}(km)
                </p>

                <p>
                  <strong>Duration: </strong>
                  {walk.duration} minutes
                </p>
                <p>
                  <strong>Calories: </strong>
                  {walk.calories}
                </p>
                <p>
                  <strong>Steps: </strong>
                  {walk.steps}
                </p>
              </div>

              <div>
                <img
                  className="walk-img"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/12/b7/9c/e6/nice-walk-beside-capability.jpg"
                  alt="walk-img"
                ></img>
              </div>
            </div>
          </Item>
        }
      </Stack>
    </Box>
  );
}

//  <div className="mt-4 d-flex justify-content-evenly">
//    <div className="d-flex flex-column justify-content-evenly  w-100">
//      <div>
//        <p>
//          <strong>Date:</strong> {walk.date.slice(0, 10)}
//        </p>
//      </div>

//      <div>
//        <p>
//          <strong>Distance: </strong>
//          {walk.distance}(km)
//        </p>
//      </div>
//      <div>
//        <p>
//          <p>
//            <strong>Duration: </strong>
//            {walk.duration} minutes
//          </p>
//        </p>
//      </div>

//      <div>
//        <p>
//          <p>
//            <strong>Steps: </strong>
//            {walk.steps} steps
//          </p>
//        </p>
//      </div>
//      <div>
//        <p>
//          <p>
//            <strong>Calories: </strong>
//            {walk.calories} calories
//          </p>
//        </p>
//      </div>
//    </div>
//    <div className="walk-img w-100">
//      <div>
//        <h4>{walk.location}</h4>
//      </div>

//      <div className="mb-5">
//        <div>
//  <img
//    className="walk-img"
//    src="https://media-cdn.tripadvisor.com/media/photo-s/12/b7/9c/e6/nice-walk-beside-capability.jpg"
//    alt="walk-img"
//  ></img>
//        </div>
//        <div>
//  <Rating
//    name="size-small"
//    defaultValue={parseInt(newRating)}
//    size="small"
//    value={walk.rating}
//    onChange={handleNewRating}
//  />
//        </div>
//      </div>
//    </div>
//  </div>;
