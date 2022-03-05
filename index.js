const express = require('express')

express()
    .use('/static', express.static('static'))

    .get('/', onhome)
    .get('/about', onabout)

    .listen(8000)

function onhome(req, res) {
    res.send('<h1>Hello World!</h1>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}