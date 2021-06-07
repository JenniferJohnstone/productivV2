import React from 'react'

const displayTime = ({ minutes, seconds }) => {
    return (
        <h1 style={{ fontSize: '500%', color: 'white' }}>{minutes} : {seconds}</h1>
    )
}

export default displayTime