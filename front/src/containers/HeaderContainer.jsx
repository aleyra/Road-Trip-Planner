import React from "react";

//css
import './../css/header.css';

function alternateColorsInString(string) {
    const words = string.split(" ");
    const coloredWords = words.map((word, index) => {
        if (index % 2 === 0) {
            return <span className="violet">{word} </span>;
        } else {
            return <span className="orange">{word} </span>;
        }
    });
    return <React.Fragment>{coloredWords}</React.Fragment>;
}

function HeaderContainer() {
    return (
        <React.Fragment>
            <h1 className="title">
                {alternateColorsInString("Planification de Road Trip")}
            </h1>
        </React.Fragment>
    );
}

export default HeaderContainer;