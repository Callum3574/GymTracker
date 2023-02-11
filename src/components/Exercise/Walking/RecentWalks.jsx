import React from "react";
import "./css/Walking.css";
import Rating from "@mui/material/Rating";

function RecentWalks({ walk }) {
  console.log(walk);
  return (
    <div className="mt-4 walk-card d-flex justify-content-evenly">
      <div className="d-flex flex-column justify-content-evenly  w-100">
        <div>
          <p>
            <strong>Date:</strong> {walk.date.slice(0, 10)}
          </p>
        </div>
        <div>
          <p>
            <strong>Distance: </strong>
            {walk.distance}(km)
          </p>
        </div>
        <div>
          <p>
            <p>
              <strong>Duration: </strong>
              {walk.duration} minutes
            </p>
          </p>
        </div>

        <div>
          <p>
            <p>
              <strong>Steps: </strong>
              {walk.steps} steps
            </p>
          </p>
        </div>
        <div>
          <p>
            <p>
              <strong>Calories: </strong>
              {walk.calories} calories
            </p>
          </p>
        </div>
      </div>
      <div className="walk-img w-100">
        <div>
          <img
            className="walk-img"
            src="https://media-cdn.tripadvisor.com/media/photo-s/12/b7/9c/e6/nice-walk-beside-capability.jpg"
            alt="walk-img"
          ></img>
        </div>
        <div>
          <Rating name="size-small" defaultValue={walk.rating} size="small" />
        </div>
      </div>
    </div>
  );
}

export default RecentWalks;
