var express = require('express')
var app = express()
var PORT = 3000

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html")
    })

app.listen(PORT, function() {
    console.log('App running on port', PORT)
})