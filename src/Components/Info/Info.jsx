import React from "react";
import { Navigate } from "react-router-dom";

function Info() {
  return (
    <div className="info-container">
      <p>Lorem ipsum....</p>
      {setTimeout(
        () => (
          <button className="info-btn" onClick={() => Navigate("/main")}>
            CONTINUE TO GAME
          </button>
        ),
        5000
      )}
    </div>
  );
}

export default Info;
