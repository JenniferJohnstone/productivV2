import Stats from './stats';
import About from './about';
import './introduction.css';
import changeColorMode from '../controller/changeColorMode';

import React, { useState } from 'react';

const Introduction = ({ accent, state, setState, darkMode, setDarkMode }) => {

    // controls the active tab
    const [viewStats, setView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const tabStyle = {
        borderRadius: '10px 10px 0px 0px',
        cursor: 'pointer',
        color: accent
    };

    // Dark mode button styling
    const highlight = {
        color: accent,
        textShadow: "white 3px 3px 5px, white -3px -3px 5px, white 3px -3px 5px, white -3px 3px 5px",
        marginLeft: 'auto'
    };

    const inActive = {
        cursor: 'pointer',
        color: accent
    };

    // Changes based on light/dark 
    //if dark mode is false, add the white overlay to buttons 
    var buttonText = 'Dark Mode'
    if (darkMode == false) {
        tabStyle.backgroundColor = 'rgba(249, 249, 249, 0.5)'
    } else {
        highlight.color = 'white'
        buttonText = "Light Mode"
        highlight.textShadow = 'black 1px 1px 0'
    }

    return (
        <div className="col-lg-8 row mx-auto mb-3 mt-4 justify-content-center">
            <ul className="nav border-bottom-0" style={{ backgroundColor: 'none' }}>
                {/* About - automatically open */}
                <li style={viewStats ? inActive : tabStyle}>
                    <a style={viewStats ? { color: state.accent } : inActive} className="nav-link" onClick={() => setView(false)}>About</a>
                </li>
                {/* My Stats */}
                <li style={viewStats ? tabStyle : { cursor: 'pointer' }}>
                    <a style={viewStats ? inActive : { color: state.accent }} className="nav-link" onClick={() => setView(true)}>My Stats</a>
                </li>
                {/* Dark mode button */}
                {/* I can't believe how much work is involved to simply change the color of the text */}
                <button
                    style={isHovered ? highlight : { marginLeft: 'auto', color: state.accent }}
                    onMouseOver={() => setIsHovered(true)}
                    onClick={() => changeColorMode(darkMode, setDarkMode, setState, state.name, false)} // Fixed missing parentheses
                    onMouseOut={() => setIsHovered(false)}
                    className="nav-link darkModeButton" // Fixed duplicate class attribute
                >{buttonText}</button>
            </ul>
            <div className="p-0" style={darkMode ? { color: 'white' } : { background: 'rgba(249, 249, 249, 0.5)' }}>
                {viewStats ? <Stats /> : <About accent={accent} />}
            </div>
        </div>
    );
};

export default Introduction;
