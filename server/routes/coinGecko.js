const express = require('express')
const request = require('superagent')
const router = express.Router()

const geckoURL = 'https://api.coingecko.com/api/v3/'

router.get('/:id', (req, res) => {
  const id = req.params.id
  request.get(`${geckoURL}/coins/${id}?tickers=true`)
    .then(response => {
      res.json({ output: response.body })
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
