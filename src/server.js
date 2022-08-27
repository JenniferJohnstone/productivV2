const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var myEnv = dotenv.config({ path: '../.env' })
myEnv = myEnv.parsed
// was having a few issues using this by require()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const url = 'mongodb+srv://productiv:' + myEnv.SECRET + '@cluster0.arbvm.mongodb.net/Productiv?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//connecting to the database 

const userSchema = new mongoose.Schema({
    userName: String,
    lastLogDate: String,
    password: String,
    pomodoros: Number
})

const User = mongoose.model('user', userSchema)
//using the schema we defined 

// var today = Date.now()
// today = new Date(today)
// today = today.toDateString()

//registration
// const user = new User({
//     userName: '101',
//     lastLogDate: today,
//     password: '101',
//     pomodoros: 3
// })

// user.save().then(result => {
//     console.log('note saved!')
// })



app.get('/', (request, response) => {
    console.log('i recieved the request')
    response.send('<h1>Hello World</h1>')
})

//testing connectivity, this url doesn't do anything else lol 
app.get('/login', (request, response) => {
    console.log('did this recieve anything?')
    response.send({ data: 'hello there!' })
})


//login function, so far it just checks the username 
app.post('/login', (request, response) => {
    console.log("I have recieved the post")
    User.find({ userName: request.body.username }, function (err, result) {
        if (err) { console.log(err) }
        else {
            if (result.length == 0) {
                response.send('no account found')
            } else {
                console.log(result)
                response.send({ 'account': result })
            }
        }
    })
})

mongoose.connection.close()



const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)