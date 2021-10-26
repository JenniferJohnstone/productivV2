import axios from 'axios'
const baseURL = 'http://localhost:3000/hello'


const login = (username, password) => {
    const promise = axios.post(baseURL, { username: username, password: password })

    promise.then(response => {
        console.log('this is the response from the server', response.data)
        return response.data[0]
    })
}


export default login