import React from 'react'
import { useState } from 'react'
import "@fontsource/montserrat"


import './Styling/mobile.css'
import LoginModal from './loginModal'

const LoginButton = ({ state }) => {

    //state for user, gets changed when someone logs in to render this component
    const [userState, changeUser] = useState(null)

    const [loggedin, setLogin] = useState(false)

    const User = () => {
        if (userState !== null) {
            const user = localStorage.getItem('userName')
            return (
                <>
                    <div class='col text-center'>
                        <p class='pt-1' style={{ fontWeight: 'bold', color: 'white', backgroundColor: state.login, fontFamily: 'montserrat', marginLeft: '5%' }}>Logged in as {user}</p>
                    </div>
                    <button class='btn'
                        style={{ fontWeight: 'bold', color: state.login, backgroundColor: 'white', margin: '5px' }}
                        onClick={() => {
                            localStorage.removeItem('userName')
                            changeUser(null)
                            setLogin(false)
                        }
                        }>Sign out</button>
                </>
            )
        } else {
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