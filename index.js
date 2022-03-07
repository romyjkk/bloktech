const express = require('express')

const PORT = 3000

express()
    .use('/static', express.static('static'))

    .get('/', onhome)
    .get('/about', onabout)
    .get('/match', onmatch)

    .listen(3000)

function onhome(req, res) {
    res.send('<h1>Hello World!</h1>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}

function onmatch(req, res) {
    res.send('<h1>Start swiping!</h1>')
}

/* handlebars installation */

import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)