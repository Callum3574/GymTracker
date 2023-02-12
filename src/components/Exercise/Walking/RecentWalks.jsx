import React, { useEffect, useState } from "react";
import "./css/Walking.css";
import Rating from "@mui/material/Rating";

function RecentWalks({ walk }) {
  const [newRating, setNewRating] = useState(walk.rating);

  const handleNewRating = (e) => {
    console.log(e.target.value);
    setNewRating(e.target.value);
  };

  useEffect(() => {
    updateRating();
  }, [newRating]);

  console.log(walk);

  const updateRating = async () => {
    try {
      const data = await fetch("http://localhost:4000/update_rating", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ rating: newRating, id: walk.id }),
      });
      const res = await data.json();
    } catch (e) {
      console.error(e);
    }
  };

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
            <strong>id: </strong>
            {walk.id}
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
          <h4>{walk.location}</h4>
        </div>
        <div>
          <img
            className="walk-img"
            src="https://media-cdn.tripadvisor.com/media/photo-s/12/b7/9c/e6/nice-walk-beside-capability.jpg"
            alt="walk-img"
          ></img>
        </div>
        <div>
          <Rating
            name="size-small"
            // defaultValue={walk.rating}
            size="small"
            value={newRating}
            onChange={handleNewRating}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentWalks;
