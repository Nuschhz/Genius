import "./Menu.css";

import React, {useContext} from "react";
import { GameButtons } from "../hooks/useGameButtons";

import { addColor } from "../functions/ColorStack";

const Menu = ({onClick}) =>{

    
    const [colorButtons, setButtonStyles] = useContext(GameButtons);

    return(
            <button className="Menu" onClick = {()=>{onClick(); addColor(colorButtons, setButtonStyles)}}>Play Genius</button>
    )
}

export default Menu;