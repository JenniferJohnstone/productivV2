import React from 'react'
import "@fontsource/montserrat"


const displayTime = ({ minutes, seconds }) => {
    return (
        <h1 style={{ fontFamily: 'montserrat', fontSize: '700%', color: 'white', textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black" }}>{minutes} : {seconds}</h1>
    )
}

export default displayTime