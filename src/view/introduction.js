import "@fontsource/montserrat"
import React from 'react'
import { useState } from 'react'

import Stats from './stats'
import About from './about'

const Introduction = ({ accent }) => {

    const [viewStats, setView] = useState(false)
    const tabStyle = {
        borderRadius: '10px 10px 0px 0px',
        backgroundColor: 'rgba(249, 249, 249, 0.5)',
        cursor: 'pointer',
        color: accent
    }
    const inActive = {
        cursor: 'pointer',
        color: accent
    }


    return (
        <div className="col-lg-8 row mx-auto mb-3 mt-4 justify-content-center" >
            <ul class="nav border-bottom-0" style={{ backgroundColor: 'none' }}>
                <li style={viewStats ? inActive : tabStyle}>
                    <a style={viewStats ? { color: '#442312' } : inActive} class="nav-link" onClick={() => setView(false)}>About</a>
                </li>
                <li style={viewStats ? tabStyle : { cursor: 'pointer' }}>
                    <a style={viewStats ? inActive : { color: '#442312' }} class="nav-link" onClick={() => setView(true)}>My Stats</a>
                </li>

            </ul>
            <div className="p-0" style={{ background: 'rgb(249, 249,249)', background: 'rgba(249, 249, 249, 0.5)' }}>

                {viewStats ? <Stats /> : <About accent={accent} />}


            </div>
        </div>
    )
}

export default Introduction