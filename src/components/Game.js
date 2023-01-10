import React from "react";

import Menu from "./Menu";
import GameScreen from "./GameScreen";

import { useGameOver } from "../hooks/useGameOver";
import { GameButtonsProvider } from "../hooks/useGameButtons";

const Game = () => {

    const [gameOver, , resetGameOver] = useGameOver();

    const start = () => resetGameOver();

    return (
        //contexto aqui para passar no menu e nos colorbuttons
        <GameButtonsProvider>
            <>
                <div>
                    {gameOver ?
                        (<Menu onClick={start} />) :
                        (<GameScreen />)}
                </div>
            </>
        </GameButtonsProvider>
    );
};

export default Game;