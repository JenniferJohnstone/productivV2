import React from 'react'
import { useState } from 'react'

import login from '../controller/login'

const LoginComponent = ({ state }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div class='d-flex justify-content-end'>
            <form class='form-group d-flex col-lg-4'>
                <label class='text-white m-1'>login</label>
                <input class='form-control' placeholder="Enter email" type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
                <label class='text-white m-1'>Password</label>
                <input class='form-control' placeholder="Enter password" type='text' value={password} onChange={({ target }) => setPassword(target.value)} />
                <button class='btn-outline-light btn-sm m-1' style={{ backgroundColor: state.button[2] }} type="button" onClick={() => login(username, password)}>login</button>
            </form>
        </div>
    )


}

export default LoginComponent