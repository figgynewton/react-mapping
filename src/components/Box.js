import React from "react";

function Box(props) {

    const [charColor] = React.useState(props.color);
    const [showText, setShowText] = React.useState(false);
    const onClick = () => setShowText(true);

    const characterBlock = {
        minHeight: "100px",
        maxWidth: "200px",
        backgroundColor: charColor
    };

    const Text = () =>
        <div>
            <p>My power is {props.power}</p>
        </div>

    return (
        <div style={{...characterBlock}} className="button" onClick={onClick}>
                <p>Name: {props.name} </p>
                <p>Superpower: {props.power} </p>
                <p>Age: {props.age > 50 ? "I am too old" : props.age} </p>
                <p>Special Moves: {props.moves}</p>
                <div>{showText ? <Text /> : null}</div>
                <br/>
        </div>
    )
}

export default Box;