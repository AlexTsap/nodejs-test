const meaningOfLife = require('./lib/meaningOfLife')
const multiply = require('./lib/multiply')
const express = require('express')

module.exports = () => multiply(meaningOfLife())

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
