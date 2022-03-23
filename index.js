require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {
    engine
} = require('express-handlebars')

// database opzetten

const mongoose = require('mongoose')
const dbKey = process.env.MONGO_URI

mongoose.connect(dbKey, {
        useNewURLParser: true
    })
    .then(() => console.log('Database is connected!'))
    .catch(err => console.log(err))

app.use(express.urlencoded({
    extended: false
}))

// nog meer database

// https://www.youtube.com/watch?v=DZBGEVgL2eE

const User = require("./models/fashion")

run()

async function run() {
    try {
        const user = await User.create({
            name: "Shirt",
            price: 5
        })

        console.log(user)
        user.sayHi()
    } catch (e) { //catching the error and sending a message
        console.log(e.message)
    }
}

// defining port

const PORT = 3000

// setting up view engine

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// setting up bodyparser -> ur able to see the data that's being sent from the client

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//define our static folder

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/like', (req, res) => {
    res.render('like')
})

app.post('/likeUser', (req, res) => {
    // req.body
})


app.listen(PORT, function () {
    console.log('App listening to port:', PORT)
})