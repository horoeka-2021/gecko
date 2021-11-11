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

export function getTrending () {
  const dataTemp = {
    coins:
    [{
      item: {
        id: 'wall-street-games',
        coin_id: 15872,
        name: 'Wall Street Games',
        symbol: 'WSG',
        market_cap_rank: 739,
        thumb: 'https://assets.coingecko.com/coins/images/15872/thumb/X3Awe42.png?1622181358',
        small: 'https://assets.coingecko.com/coins/images/15872/small/X3Awe42.png?1622181358',
        large: 'https://assets.coingecko.com/coins/images/15872/large/X3Awe42.png?1622181358',
        slug: 'wall-street-games',
        price_btc: 2.0138621325076614e-12,
        score: 0
      }
    },
    {
      item:
          {
            id: 'exeedme',
            coin_id: 13518,
            name: 'Exeedme',
            symbol: 'XED',
            market_cap_rank: 628,
            thumb: 'https://assets.coingecko.com/coins/images/13518/thumb/exeedme.png?1610669597',
            small: 'https://assets.coingecko.com/coins/images/13518/small/exeedme.png?1610669597',
            large: 'https://assets.coingecko.com/coins/images/13518/large/exeedme.png?1610669597',
            slug: 'exeedme',
            price_btc: 0.000011606948405511718,
            score: 1
          }
    },
    {
      item: {
        id: 'taboo-token',
        coin_id: 6111,
        name: 'Taboo Token',
        symbol: 'TABOO',
        market_cap_rank: 315,
        thumb: 'https://assets.coingecko.com/coins/images/6111/thumb/taboo.PNG?1624500776',
        small: 'https://assets.coingecko.com/coins/images/6111/small/taboo.PNG?1624500776',
        large: 'https://assets.coingecko.com/coins/images/6111/large/taboo.PNG?1624500776',
        slug: 'taboo-token',
        price_btc: 3.6419207323891436e-7,
        score: 2
      }
    }
    ]

  }

  return Promise.resolve(dataTemp)
}
