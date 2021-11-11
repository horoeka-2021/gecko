const path = require('path')
const express = require('express')
const coinGecko = require('./routes/coinGecko')
const welcome = require('./routes/welcome')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.use('/coinGecko', coinGecko)

module.exports = server
