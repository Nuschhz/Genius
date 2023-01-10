import "./GameScreen.css";

import React from "react";
import ColorButtons from "./ColorButtons";
import RoundCounter from "./RoundCounter";

const GameScreen = () => {
    return (
        <div className="Screen">
            <ColorButtons />
            <RoundCounter />
        </div>
    );
};

export default GameScreen;