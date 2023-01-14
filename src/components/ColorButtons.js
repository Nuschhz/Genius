import "./ColorButtons.css";

import React, { useState } from "react";
import StartButton from "./StartButton";
import RoundCounter from "./RoundCounter";

const ColorButtons = () => {
  let click = [];
  let stack = [];
  let i = 0;
  let count = 0;
  const time = 500;

  const [round, setRound] = useState(0);

  const gameIsOver = () => {
    click = [];
    stack = [];
    setRound((count = round));
  };

  const waitGlow = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const stackGlow = async () => {
    for (let i = 0; i < stack.length; i++) {
      let newButtons = [...styledButtons];
      if (stack[i] === styledButtons[stack[i]].props.id) {
        newButtons[stack[i]] = (
          <Button
            {...styledButtons[stack[i]].props}
            key={stack[i]}
            customStyle={{
              ...styledButtons[stack[i]].props.customStyle,
              opacity: "100%",
            }}
          />
        );
        await waitGlow(time);
        setGamingButtons([...newButtons]);
        await waitGlow(time);
        setGamingButtons([...styledButtons]);
      }
    }
  };

  const addColor = () => {
    let newColor = Math.floor(Math.random() * 4);
    stack.push(newColor);
    i = 0;
    setRound((count = count + 1));
    stackGlow();
  };

  const checkArray = () => {
    if (click.length === stack.length && click[i] === stack[i]) {
      click = [];
      addColor();
    } else if (click[i] === stack[i]) {
      i++;
    } else {
      gameIsOver();
    }
  };

  const checkColors = (color) => {
    click.push(color);
    checkArray();
  };

  const Button = ({ onClick, customStyle, index }) => {
    const styles = {
      ...customStyle,
    };
    return (
      <button className="button" style={styles} onClick={onClick} id={index} />
    );
  };

  const defaultStyles = [
    {
      backgroundColor: "#E3170A",
      borderColor: "#E3170A",
      boxShadow: "0px 0px 12px #B61008",
      borderTopLeftRadius: "100%",
    },
    {
      backgroundColor: "#2D936C",
      borderColor: "#2D936C",
      boxShadow: "0px 0px 12px #256760",
      borderTopRightRadius: "100%",
    },
    {
      backgroundColor: "#2B59C3",
      borderColor: "#2B59C3",
      boxShadow: "0px 0px 12px #23409F",
      borderBottomLeftRadius: "100%",
    },
    {
      backgroundColor: "#F9DF74",
      borderColor: "#F9DF74",
      boxShadow: "0px 0px 12px #F6AF33",
      borderBottomRightRadius: "100%",
    },
  ];

  const styledButtons = defaultStyles.map((style, index) => {
    return (
      <Button
        customStyle={style}
        key={index}
        onClick={() => checkColors(index)}
        id={index}
      />
    );
  });

  const [gamingButtons, setGamingButtons] = useState(styledButtons);

  return (
    <>
      <StartButton onClick={addColor} />
      <div className="GameButtons">{gamingButtons}</div>
      <RoundCounter count={round} />
    </>
  );
};

export default ColorButtons;
