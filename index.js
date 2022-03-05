const express = require('express')

express()
    .use('/static', express.static('static'))

    .get('/', onhome)
    .get('/about', onabout)
    .get('/match', onmatch)

    .listen(8000)

function onhome(req, res) {
    res.send('<h1>Hello World!</h1>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}

function onmatch(req, res) {
    res.send('<h1>Start swiping!</h1>')
}