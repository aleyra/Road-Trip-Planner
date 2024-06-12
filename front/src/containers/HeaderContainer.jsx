import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import './../css/header.css';

//redux actions
import { changeMode } from "../redux/slices/mode";
import { toggleHelp } from "../redux/slices/help";

function AlternateColorsInString(string) {
    const mode = useSelector((state) => state.mode.mode);
    const [cssViolet, setCssViolet] = React.useState('violet');
    const [cssOrange, setCssOrange] = React.useState('orange');

    useEffect(() => {
        if (mode !== 'white') {
            setCssViolet('violet-dark');
            setCssOrange('orange-dark');
        } else {
            setCssViolet('violet');
            setCssOrange('orange');
        }
    }, [mode]);

    const words = string.split(" ");
    const coloredWords = words.map((word, index) => {
        if (index % 2 === 0) {
            return <span className={cssViolet} key={index}>{word} </span>;
        } else {
            return <span className={cssOrange} key={index}>{word} </span>;
        }
    });
    return <React.Fragment>{coloredWords}</React.Fragment>;
}

function HeaderContainer() {
    const dispatch = useDispatch();
	const mode = useSelector((state) => state.mode.mode);

	if (mode !== 'white') {
		document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
	}
    return (
        <React.Fragment>
            <div className="switch-div">
                <p>mode sombre</p>
                <label class="switch">   
                    <input  type="checkbox" onClick={() => dispatch(changeMode())} />
                    <span className="slider round"></span>
                </label>
            </div>
            <h1 className="title">
                {AlternateColorsInString("Planification de Road Trip")}
            </h1>
            <div className="help-checkbox">
                <label class="help-switch">
                    <input type="checkbox" onClick={() => dispatch(toggleHelp())} />
                    <span class="help-checkmark">?</span>
                </label>
            </div>
        </React.Fragment>
    );
}

export default HeaderContainer;