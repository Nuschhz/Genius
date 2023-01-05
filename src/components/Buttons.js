import React, { useState } from "react";
import "./Button.css";


export const Buttons = () => {

    let click = [];
    let stack = [];
    let count = 0;
    let i = 0;
    const [round,setRound] = useState(0);

    const Button = ({ onClick, customStyle, index }) => {
        const styles = {
            ...customStyle,
        }
        return (
            <button className="button"
                style={styles}
                onClick={onClick}
                id={index}
            />
        )
    }

    const styles = [
        { backgroundColor: '#E3170A', borderColor: '#E3170A', boxShadow: '0px 0px 12px #B61008', transition: '0.25s ease' },
        { backgroundColor: '#2D936C', borderColor: '#2D936C', boxShadow: '0px 0px 12px #256760', transition: '0.25s ease' },
        { backgroundColor: '#2B59C3', borderColor: '#2B59C3', boxShadow: '0px 0px 12px #23409F', transition: '0.25s ease' },
        { backgroundColor: '#F9DF74', borderColor: '#F9DF74', boxShadow: '0px 0px 12px #F6AF33', transition: '0.25s ease' },
    ];

    const colorButtons = styles.map((item, index) => {
        return (<Button customStyle={item} key={index} onClick={() => checkColors(index)} id={index} />);
    });

    const [buttons, setButtons] = useState(colorButtons);

    const gameOver = () => {
        click = [];
        stack = [];
        setRound(0);
    }

    const waitGlow = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
    }

    const stackGlow = async () => {
        let time = 500;
        for (let i = 0; i < stack.length; i++) {
            let newButtons = [...buttons];
            if (stack[i] === buttons[stack[i]].props.id) {

                newButtons[stack[i]] = <Button {...buttons[stack[i]].props} key={stack[i]} customStyle={{ ...buttons[stack[i]].props.customStyle, opacity: '100%', transition: '0.25s ease' }} />;
                await waitGlow(time);
                setButtons([...newButtons]);
                await waitGlow(time);
                setButtons([...colorButtons]);
            }

        }
    }

    const addColor = () => {
        let newColor = Math.floor(Math.random() * 4);
        stack.push(newColor);
        i = 0;
        count = count + 1;
        setRound(count);
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
            gameOver();
        }
    }

    const checkColors = (color) => {
        click.push(color);
        checkArray();
    }



    const playButton = (
        <button className="playButton"
            onClick={() => addColor()} >Play</button>
    );

    return (
        <div className="Container">
            {playButton}
            <div className="GameButtons">
                {buttons}
            </div>
            <label className="Round">Round: {round}</label>
        </div>);

}