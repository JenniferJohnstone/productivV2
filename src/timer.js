import * as React from 'react'
import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import "@fontsource/montserrat"
import useSound from 'use-sound'
import buttonClick from './sounds/buttonClick.mp3'
import buttonClick2 from './sounds/buttonClick2.mp3'
import finish from './sounds/finishSound.mp3'

import DisplayTime from './displayTime'
import Introduction from './introduction'
import Buttons from './buttons'
import Heading from './heading'
import backgrounds from './backgrounds'

const Timer = ({ expiryTimestamp }) => {
    const [state, setState] = useState(backgrounds.orange)

    // sounds
    const [play] = useSound(buttonClick)
    const [play2] = useSound(buttonClick2)
    const [play3] = useSound(finish)

    const {
        seconds,
        minutes,
        start,
        pause,
        restart,
        isRunning,
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            play3()
            var notification = new Notification("Time's up!");
        }
    });

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

    function requestPermission() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission()
        }
    }


    return (

        <>

            <Heading color={state.accent} />

            <div className="row text-center mt-1 flex-fill" style={state.background}>
                <div className="container mt-5">

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
                                start()
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