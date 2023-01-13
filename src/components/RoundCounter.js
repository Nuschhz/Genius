import "./RoundCounter.css";

import React from "react";

import { useRound } from "../hooks/useRound";

const RoundCounter = () => {
  const count = useRound();

  return (
    <div className="RoundCounter">
      <label>Round: {count}</label>
    </div>
  );
};

export default RoundCounter;
