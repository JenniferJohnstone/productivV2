import * as React from 'react'
import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import "@fontsource/montserrat"
import useSound from 'use-sound'
import buttonClick from '../sounds/buttonClick.mp3'
import buttonClick2 from '../sounds/buttonClick2.mp3'
import finish from '../sounds/finishSound.mp3'

import DisplayTime from './displayTime'
import Introduction from './introduction'
import Buttons from './buttons'
import Heading from './heading'
import backgrounds from './backgrounds'
import addPomo from '../controller/addPomo'
import LoginButton from './loginButton'

const Timer = ({ expiryTimestamp }) => {

    //used to change color scheme
    const [state, setState] = useState(backgrounds.orange)


    // sounds
    const [play] = useSound(buttonClick)
    const [play2] = useSound(buttonClick2)
    const [play3] = useSound(finish)

    //the timer functions
    const {
        seconds,
        minutes,
        resume,
        pause,
        restart,
        isRunning,
    } = useTimer({
        expiryTimestamp, autoStart: false, onExpire: () => {
            play3()
            //if pomodoro completed 
            if (state === backgrounds.orange) {
                addPomo()
                if (sessionStorage.getItem('pomoCount') % 4 === 0) {
                    setState(backgrounds.blue)
                    changeTime(900)
                    new Notification("Congrats you've finished 4 pomodoros! Time for a long break, you've earned it.")
                } else {
                    setState(backgrounds.purple)
                    changeTime(300)
                    new Notification("Time to take a break!")
                }
            } else {
                setState(backgrounds.orange)
                changeTime(1500)
                new Notification("Time to work!");
            }
        }
    });

    //sets a new time on the timer
    function changeTime(value) {
        const time = new Date();
        time.setSeconds(time.getSeconds() + value);
        restart(time)
        pause()
    }

    //formats the time into 00:00

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

    //request notification permission
    function requestPermission() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission()
        }
    }

    return (

        <>

            <Heading color={state.accent} />
            <LoginButton state={state} />

            <div className="row text-center flex-fill" style={state.background}>

                <div className="container mt-1">


                    <Buttons state={state} setState={setState} changeTime={changeTime} />

                    <DisplayTime minutes={formatTime.min} seconds={formatTime.sec} />
                    {
                        isRunning
                            ? <button className="btn-lg btn-light" onClick={() => {
                                play2()
                                pause()
                            }}>Pause</button>
                            : <button className="btn-lg btn-light" onClick={() => {
                                requestPermission()
                                resume()
                                play()
                            }}>Start</button>
                    }

                </div>
                <Introduction accent={state.accent} />
            </div>


        </>
    );
}


export default Timer