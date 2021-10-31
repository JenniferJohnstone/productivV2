
import React from 'react'
import { useState } from 'react'

import login from '../controller/login'

const LoginComponent = ({ state, setShow }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [failedLogin, setFail] = useState(false)

    return (
        <form class='form-group m-5 mt-1 mb-1' style={{ color: state.login }}>
            <label class='m-1' >login</label>
            <input class='form-control' placeholder="username" type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
            <label class='m-1'>Password</label>
            <input class='form-control' placeholder="password" type='text' value={password} onChange={({ target }) => setPassword(target.value)} />
            <div class="text-center">
                {failedLogin &&

                    <p>login failed</p>

                }
                <button class='btn text-white btn-md m-2' style={{ backgroundColor: state.button[2] }} type="button" onClick={() => login(username, password, setFail, setShow)}>login</button>
                <div class='m-1'>
                    <p><em>Don't have an account?</em></p>
                    <button class='btn' style={{ fontWeight: 'bold', color: 'white', backgroundColor: state.login }} type="button">Register</button>
                </div>
            </div>
        </form>
    )


}

export default LoginComponent