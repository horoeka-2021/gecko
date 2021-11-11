const path = require('path')
const express = require('express')
const coinGecko = require('./routes/coinGecko')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/coinGecko', coinGecko)

// https://api.coingecko.com/api/v3/search/trending
// server.use('/api/v3/search/trending', trending)

module.exports = server
