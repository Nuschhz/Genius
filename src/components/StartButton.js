import React from "react";
import "./StartButton.css";

const StartButton = ({ onClick }) => {
  const button = (
    <button
      className="StartButton"
      onClick={() => {
        onClick();
      }}
    >
      Start
    </button>
  );

  return <div className="StartButtonContainer">{button}</div>;
};

export default StartButton;
