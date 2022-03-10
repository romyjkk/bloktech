const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const { engine } = require('express-handlebars')

// defining port

const PORT = 3000

// setting up view engine

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// setting up bodyparser -> ur able to see the data that's being sent from the client

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//define our static folder

app.use(express.static('static'))



app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about')
})

// app.post('likeUser', function(req, res) {
//     // req.body
// })

app.listen(PORT, function() {
    console.log('App listening to port:', PORT)
})

// express()
//     .use('/static', express.static('static'))

//     .get('/', onhome)
//     .get('/about', onabout)
//     .get('/match', onmatch)

//     .listen(3000)

// function onhome(req, res) {
//     res.send('<h1>Hello World!</h1>')
// }

// function onabout(req, res) {
//     res.send('<h1>About me</h1>')
// }

// function onmatch(req, res) {
//     res.send('<h1>Start swiping!</h1>')
// }

/* handlebars installation */

// import express from 'express'
// import { engine } from 'express-handlebars'

// const app = express()



// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.listen(3000)