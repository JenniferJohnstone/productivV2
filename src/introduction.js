import "@fontsource/montserrat"
import React from 'react'

const introduction = ({ accent }) => {
    return (
        <div className="row mx-auto mb-3 mt-4 justify-content-center" >
            <div className="col-lg-8 pt-4 p-3 mx-auto" style={{ background: 'rgb(249, 249,249)', background: 'rgba(249, 249, 249, 0.5)' }}>
                <h3 style={{ color: accent, fontFamily: 'monsterrat' }}>What is Productiv?</h3>
                <p style={{ fontFamily: 'monsterrat' }}>Productiv is an online <span style={{ color: accent }}>pomodoro timer </span>
                        that helps you stay focused for longer.</p>
                <h3 style={{ color: accent, fontFamily: 'monsterrat' }}>The pomodoro Technique</h3>
                <p style={{ fontFamily: 'monsterrat' }}>The Pomodoro Technique is a method of time management developed
                in the 1980s by Francesco Cirillo. It has since been scientically proven that it's use of brief diversions and short
                        term rewards work perfectly to maintain focus and motivation over long periods of work. </p>
                <h3 style={{ color: accent, fontFamily: 'monsterrat' }}>How to use the timer</h3>
                <ol style={{ listStylePosition: 'inside', margin: 0, padding: 0 }}>
                    <li>Decide on the task to be done</li>
                    <li>Set the timer for 25 minutes</li>
                    <li>Work on task</li>
                    <li>Take a short break when the timer goes off</li>
                    <li>After 4 intervals of work, take a long break    </li>
                </ol>
            </div>
        </div>
    )
}

export default introduction