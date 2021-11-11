import request from 'superagent'

const geckoURL = 'https://api.coingecko.com/api/v3/'

// ping gecko api
export function gecko () {
  return request
    .get(`${geckoURL}/ping`)
    .then(response => response.body)
}

// list all coins gecko api supports
export function getGeckoCoins () {
  return request
    .get(`${geckoURL}/coins/list`)
    .then(response => response.body)
}

// this function gets an api from our server
export function getCoinInfo (id) {
  return request
    .get(`/coinGecko/${id}`)
    .then(response => {
      return response.body.output
    })
}
