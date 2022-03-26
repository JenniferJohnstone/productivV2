import "@fontsource/montserrat"
import React from 'react'

const about = ({ accent }) => {
    return (
        < div className="pt-4 p-3 mx-auto">
            <h3 style={{ color: accent, fontFamily: 'montserrat' }}>What is Productiv?</h3>
            <p style={{ fontFamily: 'montserrat' }}>Productiv is an online <a style={{ textDecoration: 'none' }} href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank"><span style={{ color: accent }}> pomodoro timer </span> </a>
                that helps you stay focused for longer.</p>
            <h3 style={{ color: accent, fontFamily: 'montserrat' }}>The pomodoro Technique</h3>
            <p style={{ fontFamily: 'montserrat' }}>The Pomodoro Technique is a method of time management developed
                in the 1980s by Francesco Cirillo. It has since been scientically proven that it's use of brief diversions and short
                term rewards work perfectly to maintain focus and motivation over long periods of work. </p>
            <h3 style={{ color: accent, fontFamily: 'montserrat' }}>How to use the timer</h3>
            <ol style={{ fontFamily: 'montserrat', listStylePosition: 'inside', margin: 0, padding: 0 }}>
                <li>Decide on the task to be done</li>
                <li>Set the timer for 25 minutes</li>
                <li>Work on task</li>
                <li>Take a short break when the timer goes off</li>
                <li>After 4 intervals of work, take a long break    </li>
            </ol>
        </div>
    )
}

export default about