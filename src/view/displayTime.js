import React from 'react'
import { useEffect } from 'react';
import "@fontsource/montserrat"

import './Styling/mainStyling.css'

const displayTime = ({ minutes, seconds, darkMode }) => {

    var styling = {}

    // Alter styling depending on mode 
    if (darkMode == false) {
        styling.textShadow = '-2px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)'
    }

    return (
        <h1 className='time' style={styling}>{minutes} : {seconds}</h1>
    )
}

export default displayTime