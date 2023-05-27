import React from 'react'
import "@fontsource/montserrat"

const Heading = ({ color, darkMode, state }) => {

    var styling;
    styling = {
        color: color,
        fontFamily: 'montserrat',
        marginBottom: '0px',
        fontWeight: '1000',
        background: state.login
    }

    if (darkMode == true) {
        console.log('this is state', state)
        styling.background = state.background.background
    }

    return (
        <div className="row text-center">
            <h1 style={styling} className="display-1">Productiv</h1>
        </div>
    )

}

export default Heading
