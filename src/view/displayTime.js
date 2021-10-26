import React from 'react'
import "@fontsource/montserrat"


const displayTime = ({ minutes, seconds }) => {
    return (
        <h1 style={{ fontFamily: 'montserrat', fontSize: '500%', color: 'white' }}>{minutes} : {seconds}</h1>
    )
}

export default displayTime