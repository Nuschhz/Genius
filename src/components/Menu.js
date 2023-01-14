import "./Menu.css";

import React from "react";

const Menu = ({ onClick }) => {
  return (
    <>
      <button className="Menu" onClick={onClick}>
        Play Genius
      </button>
      {/* <button className="Menu">how to play</button>
      <button className="Menu">options</button> */}
    </>
  );
};

export default Menu;
