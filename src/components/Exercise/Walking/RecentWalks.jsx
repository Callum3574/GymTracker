import React, { useEffect } from "react";
import "./css/Walking.css";
import Rating from "@mui/material/Rating";

function RecentWalks({ walk }) {
  const updateRating = async () => {
    try {
      const data = await fetch("http://localhost:4000/update_rating", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ rating: 2, id: 23 }),
      });
      const res = await data.json();
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {}, [walk]);

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
          <Rating
            onClick={updateRating}
            name="size-small"
            defaultValue={walk.rating}
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default RecentWalks;
