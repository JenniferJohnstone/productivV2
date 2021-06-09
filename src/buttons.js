import React from 'react'

import backgrounds from './backgrounds'


const buttons = ({ state, setState, changeTime }) => {
    return (
        <>
            {/* Buttons to set the times */}
            <button id="pomodoro" className="btn m-1" style={{ backgroundColor: state.button[0] }} onClick={() => {
                setState(backgrounds.orange)
                changeTime(1500)
            }}>Pomodoro</button>
            <button id='short' className="btn m-1" style={{ backgroundColor: state.button[1] }} onClick={() => {
                setState(backgrounds.purple)
                changeTime(300)
            }}>Short break</button>
            <button id='long' className="btn m-1" style={{ backgroundColor: state.button[2] }} onClick={() => {
                setState(backgrounds.blue)
                changeTime(900)
            }}>Long break</button>
        </>
    )
}

export default buttons