import { useState, createContext } from "react";

import { checkColors } from "../functions/ColorStack";

export const GameButtons = createContext(null);

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
    );
};

const defaultStyles = [
    { backgroundColor: '#E3170A', borderColor: '#E3170A', boxShadow: '0px 0px 12px #B61008', borderTopLeftRadius: '50%' },
    { backgroundColor: '#2D936C', borderColor: '#2D936C', boxShadow: '0px 0px 12px #256760', borderTopRightRadius: '50%' },
    { backgroundColor: '#2B59C3', borderColor: '#2B59C3', boxShadow: '0px 0px 12px #23409F', borderBottomLeftRadius: '50%' },
    { backgroundColor: '#F9DF74', borderColor: '#F9DF74', boxShadow: '0px 0px 12px #F6AF33', borderBottomRightRadius: '50%' }
];

export const GameButtonsProvider = ({ children }) => {

    const styledButtons = defaultStyles.map((style, index) => {
        return (
            <Button customStyle={style} key={index} onClick={() => checkColors(index, colorButtons, setColorButtons)} id={index} />
        );
    }
    );

    
    const [colorButtons, setColorButtons] = useState(styledButtons);

    <GameButtons.Provider value={[colorButtons, setColorButtons]}>
        {children}
    </GameButtons.Provider>
}