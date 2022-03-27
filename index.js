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

const connectDb = require('./controllers/connect.js')

connectDb()

// mongoose.connect(dbKey, {
//         useNewURLParser: true
//     })
//     .then(() => console.log('Database is connected!'))
//     .catch(err => console.log(err))

app.use(express.urlencoded({
    extended: false
}))

// nog meer database



const User = require("./models/fashion")
const fashion = require('./models/fashion')

// async function getFashion() {
//     try {
//         const fashion = await fashion.find({
//             "identifier": identifier
//         }).lean()

//     }
// }

// https://www.youtube.com/watch?v=DZBGEVgL2eE

// run()

// async function run() {
//     try {
//         const user = await User.findOne({
//             price: "5"
//         })
//         const user = await User.find().byName("Shirt")
//         // const user = await User.create({
//         //     name: "Shirt",
//         //     price: 5,
//         //     new: true
//     })

//         // const user = await User.create({ //another 'user'?
//         //     name: "Pants",
//         //     price: 10
//         // })

//         console.log(user)
//         // console.log(user.namedPrice)
//         // user.sayHi()
//     } catch (e) { //catching the error and sending a message
//         console.log(e.message)
//     }
// }

// defining port

const PORT = 3000

// setting up handlebars

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

app.get('/dislike', (req, res) => {
    res.render('dislike')
})

app.post('/likeUser', (req, res) => {
    // req.body
})

// error

app.use((req, res) => {
    res.status(404).send("This page doesn't exist!")
})


app.listen(PORT, function () {
    console.log('App listening to port:', PORT)
})