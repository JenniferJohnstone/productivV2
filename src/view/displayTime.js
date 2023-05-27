import React from 'react'
import "@fontsource/montserrat"

const displayTime = ({ minutes, seconds, darkMode, state }) => {
    var styling = {
        fontFamily: 'montserrat',
        fontSize: '600%',
        fontWeight: '1000',
        color: 'white',
        textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
    }

    // Alter styling depending on mode 
    if (darkMode == false) {
        styling.textShadow = '-2px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)'
        styling.color = state.timer
        // styling.color = 'white'
    }

    return (
        <h1 style={styling}>{minutes} : {seconds}</h1>
    )
}

export default displayTime