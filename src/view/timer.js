import * as React from 'react'
import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import { useEffect } from 'react';
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
import changeColorMode from '../controller/changeColorMode';
import darkModeColors from './darkbackgrounds';


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
                if (sessionStorage.getItem('pomoCount') % 4 === 0) {
                    changeColorMode(darkmode, setDarkMode, setState, 'blue', true)
                    changeTime(900)
                    new Notification("Congrats you've finished 4 pomodoros! Time for a long break, you've earned it.")
                } else {
                    changeColorMode(darkmode, setDarkMode, setState, 'purple', true)
                    changeTime(300)
                    new Notification("Time to take a break!")
                }
            } else {
                changeColorMode(darkmode, setDarkMode, setState, 'orange', true)
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

    useEffect(() => {
        // Update the tab title when formatTime.min and formatTime.sec change
        document.title = `${formatTime.min} : ${formatTime.sec}`;
    }, [formatTime.min, formatTime.sec]);

    //request notification permission
    function requestPermission() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission()
        }
    }

    //styling 
    var buttonStyle = {
        paddingLeft: '24px',
        paddingRight: '24px',
        fontFamily: 'Montserrat',
        backgroundColor: state.button[1],
        color: state.accent,
        fontSize: '20px',
        borderColor: state.button[1],
        borderRadius: '25px'
    }

    if (darkmode == true) {
        buttonStyle.color = 'black'
    }


    return (

        <>

            <Heading color={state.accent} darkMode={darkmode} state={state} />
            <div className="row text-center flex-fill" style={Object.assign({}, {
                height: "100%",
                alignContent: "baseline",
                paddingBottom: "10%",
                paddingTop: "3%",
                minHeight: "100vh"
            }, state.background)}>

                <div className="container mt-1">


                    <Buttons state={state} setState={setState} changeTime={changeTime} darkMode={darkmode} setDarkMode={setDarkMode} />

                    <DisplayTime minutes={formatTime.min} seconds={formatTime.sec} darkMode={darkmode} state={state} />
                    {
                        isRunning
                            ? <button className="btn-lg btn-light"
                                style={buttonStyle}
                                onClick={() => {
                                    play2()
                                    pause()
                                }}>Pause</button>
                            : <button className="btn-lg btn-light" style={buttonStyle} onClick={() => {
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