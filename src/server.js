const express = require('express')
const app = express()

let someStuff = [
    {
        name: 'stuff',
        purpose: 'to show the user something'
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/hello', (request, response) => {
    response.send(JSON.stringify(someStuff))
})




// const express = require('express')();
// const app = express
// const port = process.env.PORT
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// var myEnv = dotenv.config({ path: '../.env' })
// myEnv = myEnv.parsed
// was having a few issues using this by require()

// const url = 'mongodb+srv://productiv:' + myEnv.SECRET + '@cluster0.arbvm.mongodb.net/Productiv?retryWrites=true&w=majority'

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// const userSchema = new mongoose.Schema({
//     userName: String,
//     lastLogDate: Date,
//     pomodoroWeek: {
//         Monday: Number,
//         Tuesday: Number,
//         Wednesday: Number,
//         Thursday: Number,
//         Firday: Number,
//         Saturday: Number,
//         Sunday: Number
//     },
//     hoursFocused: Number
// })

// const User = mongoose.model('User', userSchema)

// const user = new User({
//     userName: 'exampleUser',
//     lastLogDate: Date.now(),
//     pomodoroWeek: {
//         Monday: 0,
//         Tuesday: 0,
//         Wednesday: 0,
//         Thursday: 0,
//         Firday: 0,
//         Saturday: 1,
//         Sunday: 0
//     },
//     hoursFocused: 3
// })

// user.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

// app.get('/', (req, res) => {
//     res.send('<h1>Will this restart if I change it?</>')
// })

// app.get('hello', (req, res) => {
//     res.send('Hi there')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${myEnv.PORT}`)
// })


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)