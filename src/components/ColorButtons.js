import "./ColorButtons.css";

import React, { useContext } from "react";
import { GameButtonsProvider } from "../hooks/useGameButtons";

const ColorButtons = () => {

    const [colorButtons] = useContext(GameButtonsProvider);
    
    return (
        <div className="GameButtons">
            {colorButtons}
        </div>
    );

}

export default ColorButtons;