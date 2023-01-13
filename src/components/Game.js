import React from "react";

import Menu from "./Menu";
import GameScreen from "./GameScreen"

import { useGameOver } from "../hooks/useGameOver";

const Game = () => {

    const [gameOver, , resetGameOver] = useGameOver();

    const start = () => resetGameOver();
    return (
        <>
            {gameOver ?
                (<Menu onClick={start} />) :
                (<GameScreen />)}
        </>
    );
};

export default Game;