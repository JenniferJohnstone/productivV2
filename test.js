const express = require("express")
const cors = require('cors')
const gatsby = require("gatsby-plugin-nodejs")
const mongoose = require('mongoose')
const dotenv = require('dotenv')

var myEnv = dotenv.config({ path: '/.env' })

myEnv = myEnv.parsed


const app = express()
app.use(cors());
app.use(express.json())

const url = 'mongodb+srv://productiv:' + 'jenny' + '@cluster0.arbvm.mongodb.net/Productiv?retryWrites=true&w=majority'
//currently the secret is not hidden due to some issue, will fix later

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// connecting to the database

const userSchema = new mongoose.Schema({
    userName: String,
    lastLogDate: String,
    password: String,
    pomodoros: Number
})

const User = mongoose.model('user', userSchema)


gatsby.prepare({ app }, () => {
    app.get('/', (request, response) => {
        response.send('<h1>I have changed ' + url + '</h1>')
    })


    //login function, so far it just checks the username 
    app.post('/login', (request, response) => {
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

})


app.listen(process.env.PORT || 5000)

console.log('server is running but I cant tell you the port')