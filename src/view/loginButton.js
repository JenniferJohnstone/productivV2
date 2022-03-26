import React from 'react'
import { useState } from 'react'

import './mobile.css'
import LoginModal from './loginModal'

const LoginButton = ({ state }) => {

    //state for user 
    const [userState, changeUser] = useState(null)
    console.log('this is the value of user', userState)

    const [loggedin, setLogin] = useState(false)

    const User = () => {
        console.log('am I running the if else statement? here is the value of user', userState)
        if (userState !== null) {
            console.log("i am running as if someone were logged in")
            const user = localStorage.getItem('userName')
            return (
                <>
                    <div class='col text-center'>
                        <p class='m-1 pt-1' style={{ fontWeight: 'bold', color: 'white', backgroundColor: state.login }}>Logged in as {user}</p>
                    </div>
                    <button onClick={() => {
                        localStorage.removeItem('userName')
                        changeUser(null)
                        setLogin(false)
                    }
                    }>Sign out</button>
                </>
            )
        } else {
            console.log('i am running as if there was no user')
            return (
                <div class='col d-flex m-1'>
                    <p class='label text-white m-2'><em>Register to track pomodoros</em></p>
                    <button class='btn btn-outline-light' style={{ fontWeight: 'bold', color: state.login, backgroundColor: 'white' }} type="button">Register</button>
                    <LoginModal state={state} changeUser={changeUser} />
                </div>
            )
        }
    }



    return (
        <div class='background d-flex height' style={{ backgroundColor: state.login }}>
            <User />
        </div>


    )


}

export default LoginButton