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


