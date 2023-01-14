import "./RoundCounter.css";

import React from "react";

const RoundCounter = ({ count }) => {
  return (
    <div className="RoundCounter">
      <label>Round: {count}</label>
    </div>
  );
};

export default RoundCounter;
