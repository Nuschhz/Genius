import "./ColorButtons.css";

import React, { useState } from "react";
import StartButton from "./StartButton";
import { useGameOver } from '../hooks/useGameOver';
import { isDisabled } from "@testing-library/user-event/dist/utils";

const ColorButtons = () => {

    let click = [];
    let stack = [];
    let i = 0;
    const time = 500;

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const gameIsOver = () => {
        click = [];
        stack = [];
        setGameOver(true);
    }

    const waitGlow = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
    }

    const stackGlow = async () => {

        for (let i = 0; i < stack.length; i++) {
            let newButtons = [...styledButtons];
            if (stack[i] === styledButtons[stack[i]].props.id) {
                newButtons[stack[i]] = <Button {...styledButtons[stack[i]].props} key={stack[i]} customStyle={{ ...styledButtons[stack[i]].props.customStyle, opacity: '100%' }}/>;
                await waitGlow(time);
                setGamingButtons([...newButtons]);
                await waitGlow(time);
                setGamingButtons([...styledButtons]);
            }
        }
    }

    const addColor = () => {
        let newColor = Math.floor(Math.random() * 4);
        stack.push(newColor);
        i = 0;
        stackGlow();
    }

    const checkArray = () => {
        if (click.length === stack.length && click[i] === stack[i]) {
            click = [];
            addColor();
        }
        else if (click[i] === stack[i]) {
            i++;
        }
        else {
            gameIsOver();
        }
    }

    const checkColors = (color) => {
        click.push(color);
        checkArray();
    }

    const Button = ({ onClick, customStyle, index, isDisabled = false }) => {
        const styles = {
            ...customStyle,
        }
        return (
            <button className="button"
                style={styles}
                onClick={onClick}
                id={index}
                disabled = {isDisabled}
            />
        );
    };

    const defaultStyles = [
        { backgroundColor: '#E3170A', borderColor: '#E3170A', boxShadow: '0px 0px 12px #B61008', borderTopLeftRadius: '50%' },
        { backgroundColor: '#2D936C', borderColor: '#2D936C', boxShadow: '0px 0px 12px #256760', borderTopRightRadius: '50%' },
        { backgroundColor: '#2B59C3', borderColor: '#2B59C3', boxShadow: '0px 0px 12px #23409F', borderBottomLeftRadius: '50%' },
        { backgroundColor: '#F9DF74', borderColor: '#F9DF74', boxShadow: '0px 0px 12px #F6AF33', borderBottomRightRadius: '50%' }
    ];

    const styledButtons = defaultStyles.map((style, index) => {
        return (
            <Button customStyle={style} key={index} onClick={() => checkColors(index)} id={index} />
        );
    });

    const [gamingButtons, setGamingButtons] = useState(styledButtons);

    return (
        <>
            <StartButton onClick={addColor} />
            <div className="GameButtons">
                {gamingButtons}
            </div>
        </>
    );

}

export default ColorButtons;