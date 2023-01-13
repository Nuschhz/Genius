import React, { useState } from "react";
import "./StartButton.css";

const StartButton = ({ onClick }) => {
  const [start, setStart] = useState(true);

  const button = (
    <button
      className="StartButton"
      onClick={() => {
        onClick();
        setStart(false);
      }}
    >
      Start
    </button>
  );

  return <div className="StartButtonContainer">{start ? button : null}</div>;
};

export default StartButton;
