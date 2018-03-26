require('dotenv').config()
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./api/routes/xclipRoutes')
routes(app)

app.listen(port)

// response for invalid route
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

console.log('xbclip API server started on ' + port)
