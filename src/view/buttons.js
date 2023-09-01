import React from 'react'

import backgrounds from './backgrounds'
import changeColorMode from '../controller/changeColorMode'
import './Styling/mainStyling.css'


const buttons = ({ state, setState, changeTime, darkMode, setDarkMode }) => {
    return (
        <>
            {/* Buttons to set the times */}
            <button id="pomodoro" className="btn m-1 timerButton" style={{ backgroundColor: 'var(--button-bg-color)' }} onClick={() => {
                // setState(backgrounds.orange)
                changeColorMode(state, darkMode, setDarkMode, setState, 'orange', true)
                changeTime(1500)
            }}>Pomodoro</button>
            <button id='short' className="btn m-1 timerButton" style={{ backgroundColor: 'var(--button-bg-color2)' }} onClick={() => {
                changeColorMode(state, darkMode, setDarkMode, setState, 'purple', true)
                changeTime(300)
            }}>Short break</button>
            <button id='long' className="btn m-1 timerButton" style={{ backgroundColor: 'var(--button-bg-color3)' }} onClick={() => {
                changeColorMode(state, darkMode, setDarkMode, setState, 'blue', true)
                changeTime(900)
            }}>Long break</button>
        </>
    )
}

export default buttons