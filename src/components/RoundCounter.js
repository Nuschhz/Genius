import "./RoundCounter.css";

import React from "react";

import { useRound } from "../hooks/useRound";

const RoundCounter = () => {

    const [round] = useRound();

    return (
        <div className="RoundCounter">
            <label>Round: {round}</label>
        </div>
    );

};

export default RoundCounter;
