import React from "react";
import "./css/Walking.css";
function RecentWalks({ walk }) {
  console.log(walk);
  return (
    <div className="mt-4 walk-card d-flex justify-content-evenly">
      <div className="d-flex flex-column justify-content-evenly  w-100">
        <div>
          <h6>{walk.date.slice(0, 10)}</h6>
        </div>
        <div>
          <p>Distance: {walk.distance}(km)</p>
        </div>
        <div>
          <p>
            <p>{walk.duration} minutes</p>
          </p>
        </div>

        <div>
          <p>
            <p>{walk.steps} steps</p>
          </p>
        </div>
        <div>
          <p>
            <p>{walk.calories} calories</p>
          </p>
        </div>
      </div>
      <div className="walk-img w-100">
        <img
          className="walk-img"
          src="https://media-cdn.tripadvisor.com/media/photo-s/12/b7/9c/e6/nice-walk-beside-capability.jpg"
        ></img>
      </div>
    </div>
  );
}

export default RecentWalks;
