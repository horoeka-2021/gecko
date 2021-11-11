const express = require('express')
const request = require('superagent')
const { NormalModule } = require('webpack')
const router = express.Router()

const geckoURL = 'https://api.coingecko.com/api/v3'

// the ping route to coingecko
router.get('/ping', (req, res) => {
  request.get(`${geckoURL}/ping`)
    .then(response => {
      res.json(response.body)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

// route to get trending coins info from coingecko api
router.get('/trending', (req, res) => {
  request.get(`${geckoURL}/search/trending`)
    .then(response => {
      res.json(response.body)
      return null
    })
    .catch(err => {
      res.status(500).json({ errortrending: err.message })
    })
})

// route to get all coins info from coingecko api
router.get('/:id', (req, res) => {
  const id = req.params.id
  request.get(`${geckoURL}/coins/${id}?tickers=true`)
    .then(response => {
      res.json(response.body)
      return null
    })
    .catch(err => {
      res.status(500).json({ errorallcoin: err.message })
    })
})

module.exports = router

// https://api.coingecko.com/api/v3/search/trending
// server.use('/api/v3/search/trending', trending)
