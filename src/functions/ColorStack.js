let click = [];
let stack = [1];
let i = 0;

const gameIsOver = () => {
    click = [];
    stack = [];
    //setGameOver(true);
}

const waitGlow = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const stackGlow = async (colorButtons, setButtonStyles) => {
    let time = 500;
    for (let i = 0; i < stack.length; i++) {
        let newButtons = [...colorButtons];
        if (stack[i] === colorButtons[stack[i]].props.id) {
            newButtons[stack[i]] = <button {...colorButtons[stack[i]].props} key={stack[i]} customStyle={{ ...colorButtons[stack[i]].props.customStyle, opacity: '100%' }} />;
            setButtonStyles(newButtons);
            await waitGlow(time);
            setButtonStyles(...newButtons);
            await waitGlow(time);
            setButtonStyles([...colorButtons]);
        }
    }
}

export const addColor = (colorButtons, setButtonStyles) => {
    let newColor = Math.floor(Math.random() * 4);
    stack.push(newColor);
    i = 0;
    stackGlow(colorButtons, setButtonStyles);
}

const checkArray = (colorButtons, setButtonStyles) => {
    if (click.length === stack.length && click[i] === stack[i]) {
        click = [];
        console.log(click)
        addColor(colorButtons, setButtonStyles);
    }
    else if (click[i] === stack[i]) {
        i++;
    }
    else {
        gameIsOver();
    }
}
export const checkColors = (color, colorButtons, setButtonStyles) => {
    click.push(color);
    checkArray(colorButtons, setButtonStyles);
}