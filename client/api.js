import request from 'superagent'

// this calls the ping gecko api from our server
export function gecko () {
  return request
    .get('/coinGecko/ping')
    .then(response => {
      return response.body
    })
}

// this function calls the trending coins api from our server
export function getTrending () {
  return request
    .get('/coinGecko/trending')
    .then(response => {
      return response.body
    })
}

// this function calls and gets a specific coins info from the api from our server
export function getCoinInfo (id) {
  return request
    .get(`/coinGecko/${id}`)
    .then(response => {
      return response.body.output
    })
}
