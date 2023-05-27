import "@fontsource/montserrat"
import React from 'react'

const about = ({ accent }) => {


    const fontStyling = {
        fontFamily: 'montserrat'
    }

    const higlight = {
        color: accent,
        fontFamily: 'montserrat'
    }

    return (
        <>
            < div className="pt-4 p-3 mx-auto">
                <h3 style={higlight}>What is Productiv?</h3>
                <p style={fontStyling}>Productiv is an online <a style={{ textDecoration: 'none', fontWeight: '800' }} href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank"><span style={higlight}> pomodoro timer </span> </a>
                    that helps you stay focused for longer.</p>
                <h3 style={higlight}>The pomodoro Technique</h3>
                <p style={fontStyling}>The Pomodoro Technique is a method of time management developed
                    in the 1980s by Francesco Cirillo. It has since been scientically proven that it's use of brief diversions and short
                    term rewards work perfectly to maintain focus and motivation over long periods of work. </p>
                <h3 style={higlight}>How to use the timer</h3>
                <ol style={{ fontFamily: 'montserrat', listStylePosition: 'inside', margin: 0, padding: 0 }}>
                    <li>Decide on the task to be done</li>
                    <li>Set the timer for 25 minutes</li>
                    <li>Work on task</li>
                    <li>Take a short break when the timer goes off</li>
                    <li>After 4 intervals of work, take a long break    </li>
                </ol>
            </div>
        </>
    )

}

export default about