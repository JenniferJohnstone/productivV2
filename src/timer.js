import * as React from 'react'
import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import "@fontsource/montserrat"

import Heading from './heading'
import backgrounds from './backgrounds'

const Timer = ({ expiryTimestamp }) => {
    const [state, setState] = useState(backgrounds.orange)

    const {
        seconds,
        minutes,
        start,
        pause,
        restart,
        isRunning,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    function changeTime(value) {
        const time = new Date();
        time.setSeconds(time.getSeconds() + value);
        restart(time)
        pause()
    }

    const formatTime = {
        min: minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }),
        sec: seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
    }

    return (

        <>

            <Heading color={state.accent} />

            <div className="row text-center mt-1 flex-fill" style={state.background}>
                <div className="container mt-5">

                    {/* Buttons to set the times */}
                    <button id="pomodoro" className="btn m-1" style={{ backgroundColor: state.button[0] }} onClick={() => {
                        setState(backgrounds.orange)
                        changeTime(1500)
                    }}>Pomodoro</button>
                    <button id='short' className="btn m-1" style={{ backgroundColor: state.button[1] }} onClick={() => {
                        setState(backgrounds.purple)
                        changeTime(300)
                    }}>Short break</button>
                    <button id='long' className="btn m-1" style={{ backgroundColor: state.button[2] }} onClick={() => {
                        setState(backgrounds.blue)
                        changeTime(900)
                    }}>Long break</button>

                    <h1 style={{ fontSize: '500%', color: 'white' }}>{formatTime.min} : {formatTime.sec}</h1>

                    {
                        isRunning
                            ? <button className="btn-lg btn-light" onClick={pause}>Pause</button>
                            : <button className="btn-lg btn-light" onClick={start}>Start</button>
                    }

                </div>
                <div className="row mx-auto mb-3 mt-4 justify-content-center" >
                    <div className="col-lg-8 pt-4 p-3 mx-auto" style={{ background: 'rgb(249, 249,249)', background: 'rgba(249, 249, 249, 0.5)' }}>
                        <h3 style={{ color: state.accent, fontFamily: 'monsterrat' }}>What is Productiv?</h3>
                        <p style={{ fontFamily: 'monsterrat' }}>Productiv is an online <span style={{ color: state.accent }}>pomodoro timer </span>
                        that helps you stay focused for longer.</p>
                        <h3 style={{ color: state.accent, fontFamily: 'monsterrat' }}>The pomodoro Technique</h3>
                        <p style={{ fontFamily: 'monsterrat' }}>The Pomodoro Technique is a method of time management developed
                        in the 1980s by Francesco Cirillo. It has since been found that it's use of brief diversions and short
                        term rewards work perfectly to maintain focus and motivation over long periods of work. </p>
                        <h3 style={{ color: state.accent, fontFamily: 'monsterrat' }}>How to use the timer</h3>
                        <ol style={{ listStylePosition: 'inside', margin: 0, padding: 0 }}>
                            <li>Decide on the task to be done</li>
                            <li>Set the timer for 25 minutes</li>
                            <li>Work on task</li>
                            <li>Take a short break when the timer goes off</li>
                            <li>After 4 intervals of work, take a long break    </li>
                        </ol>
                    </div>
                </div>


            </div>


        </>
    );
}


export default Timer