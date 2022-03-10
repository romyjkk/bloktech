# code notes

express code -> run a server + display 'Hello World!'

    var express = require('express')
    var app = express()
    var PORT = 3000

    app.get('/', function(req, res) {
        res.send('Hello World!')
    })

    app.listen(PORT, function() {
        console.log('App running on port', PORT)
    })

adding an html file?

    app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html")
    })

// express()
// .use('/static', express.static('static'))

// .get('/', onhome)
// .get('/about', onabout)

// .listen(8000)

// function onhome(req, res) {
//     res.send('Hello World!')
// }

// function onabout(req, res) {
//     res.send('About me')
// }


handlebars


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
// define our port
const PORT = 3000
// setup the view engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// setup bodyparser to be able to see the data thats being sent from the client
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// define our static folder
app.use(express.static('static'))

app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.post('/likeUser', function(req, res) {
    // req.body
    
})

app.listen(PORT, function() {
    console.log('App listening to port:', PORT)
})

