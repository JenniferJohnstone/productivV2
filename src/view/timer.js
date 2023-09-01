import * as React from 'react'
import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import { useEffect } from 'react';
import "@fontsource/montserrat"
// sounds 
import useSound from 'use-sound'
import buttonClick from '../sounds/buttonClick.mp3'
import buttonClick2 from '../sounds/buttonClick2.mp3'
import finish from '../sounds/finishSound.mp3'
// components and functions 
import DisplayTime from './displayTime'
import Introduction from './introduction'
import Buttons from './buttons'
import Heading from './heading'
import backgrounds from './backgrounds'
import addPomo from '../controller/addPomo'
import changeColorMode from '../controller/changeColorMode';
import darkModeColors from './darkbackgrounds';
import { formatTime } from '../controller/changeTime';
import { setColors } from '../controller/setColours';
// styling
import './Styling/mainStyling.css';



const Timer = ({ expiryTimestamp }) => {

    //used to change color scheme
    const [state, setState] = useState(backgrounds.orange)
    const [darkmode, setDarkMode] = useState(false)


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
            if (state === backgrounds.orange || state === darkModeColors.orange) {
                addPomo()
                //If they've completed 4 pomodoros they'll take a long break 
                if (sessionStorage.getItem('pomoCount') % 4 === 0) {
                    changeColorMode(state, darkmode, setDarkMode, setState, 'blue', true)
                    changeTime(900)
                    new Notification("Congrats you've finished 4 pomodoros! Time for a long break, you've earned it.")
                } else {
                    changeColorMode(state, darkmode, setDarkMode, setState, 'purple', true)
                    changeTime(300)
                    new Notification("Time to take a break!")
                }
            } else {
                changeColorMode(state, darkmode, setDarkMode, setState, 'orange', true)
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
    const time = formatTime(minutes, seconds);

    useEffect(() => {
        // Update the tab title when time.min and time.sec change
        document.title = `${time.min} : ${time.sec}`;
    }, [time.min, time.sec]);

    //request notification permission
    function requestPermission() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission()
        }
    }

    // Set colour css variables
    setColors(state, darkmode)

    return (

        <>
            <Heading />
            <div className="row text-center flex-fill backgroundContainer">
                <div className="container mt-1">
                    <Buttons state={state} setState={setState} changeTime={changeTime} darkMode={darkmode} setDarkMode={setDarkMode} />
                    <DisplayTime minutes={time.min} seconds={time.sec} darkMode={darkmode} state={state} />
                    {
                        isRunning
                            ? <button className="buttonStyle"
                                onClick={() => {
                                    play2()
                                    pause()
                                }}>Pause</button>
                            : <button className="buttonStyle" onClick={() => {
                                requestPermission()
                                resume()
                                play()
                            }}>Start</button>
                    }

                </div>
                <Introduction accent={state.accent} state={state} setState={setState} darkMode={darkmode} setDarkMode={setDarkMode} />
            </div>


        </>
    );
}


export default Timer