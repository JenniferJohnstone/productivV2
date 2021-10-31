import React from 'react'
import { useState } from 'react'

import './mobile.css'
import LoginModal from './loginModal'

const LoginButton = ({ state }) => {

    if (sessionStorage.getItem('currentUser') != null) {
        const user = sessionStorage.getItem('currentUser')
        return (
            <h1>Logged in as {user}</h1>
        )
    }


    return (
        <div class='background d-flex height' style={{ backgroundColor: state.login }}>
            <div class=' col d-flex m-1'>
                <p class='label text-white pt-2'><em>Register to track pomodoros</em></p>
                <button class='btn btn-outline-light m-1 pt-1' style={{ fontWeight: 'bold', color: state.login, backgroundColor: 'white' }} type="button">Register</button>
            </div>


            <LoginModal state={state} />

        </div>


    )


}

export default LoginButton