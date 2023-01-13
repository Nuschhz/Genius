import "./Menu.css";

import React from "react";

const Menu = ({ onClick }) => {

  return (
    <button
      className="Menu"
      onClick={() => {
        onClick();
      }}
    >
      Play Genius
    </button>
  );
};

export default Menu;
