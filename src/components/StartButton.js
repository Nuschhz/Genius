import React, { useState } from "react";

const StartButton = ({ onClick }) => {
    const [start, setStart] = useState(true);

    const button = <button onClick={() => { onClick(); setStart(false) }}> Start </button>
    return (<>
        {start ? button : null}
    </>
    )
}

export default StartButton;