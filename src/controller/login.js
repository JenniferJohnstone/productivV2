import axios from 'axios'
const baseURL = 'http://localhost:3000/login'


const login = (username, password, setFail, setShow, changeUser) => {
    const promise = axios.post(baseURL, { username: username, password: password })

    promise.then(response => {
        console.log('this is the response from the server', response.data)
        if (response.data == 'no account found') {
            setFail(true)
        } else {
            setShow(false)
            localStorage.setItem('userName', response.data.account[0].userName)
            changeUser(response.data.account[0].userName)
            console.log("I'm running changeUser")
        }

    })
}


export default login