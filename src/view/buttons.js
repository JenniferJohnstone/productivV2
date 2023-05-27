import React from 'react'

import backgrounds from './backgrounds'
import changeColorMode from '../controller/changeColorMode'


const buttons = ({ state, setState, changeTime, darkMode, setDarkMode }) => {
    return (
        <>
            {/* Buttons to set the times */}
            <button id="pomodoro" className="btn m-1" style={{ fontFamily: 'Montserrat', backgroundColor: state.button[0] }} onClick={() => {
                // setState(backgrounds.orange)
                changeColorMode(darkMode, setDarkMode, setState, 'orange', true)
                changeTime(1500)
            }}>Pomodoro</button>
            <button id='short' className="btn m-1" style={{ fontFamily: 'Montserrat', backgroundColor: state.button[1] }} onClick={() => {
                changeColorMode(darkMode, setDarkMode, setState, 'purple', true)
                changeTime(300)
            }}>Short break</button>
            <button id='long' className="btn m-1" style={{ fontFamily: 'Montserrat', backgroundColor: state.button[2] }} onClick={() => {
                changeColorMode(darkMode, setDarkMode, setState, 'blue', true)
                changeTime(900)
            }}>Long break</button>
        </>
    )
}

export default buttons