import "./GameScreen.css";

import React from "react";
import RoundCounter from "./RoundCounter";
import ColorButtons from "./ColorButtons";

const GameScreen = () => {
    

    return (
        <div className="Screen">
            <ColorButtons />
            <RoundCounter />
        </div>
    );
};

export default GameScreen;