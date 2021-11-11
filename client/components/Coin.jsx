import React, { useState, useEffect } from 'react'
import { getGeckoCoins, getCoinInfo } from '../api'
import { findCoin } from './helper'

function App () {
  const tempCoinFound = { name: '???' }
  // const [coins, setCoins] = useState('')
  // const [coinPrice, setCoinPrice] = useState('')
  const [coinSearching, setCoinSearching] = useState('')
  const [coinSearched, setCoinSearched] = useState('')
  const [coinFound, setCoinFound] = useState(tempCoinFound)

  // global variable storing coin data from gecko
  let geckoCoins = []

  // get all coins
  useEffect(() => {
    getGeckoCoins()
      .then(res => {
        console.log('res: ', res)
        // use res (response)
        const coinFoundObj = findCoin(res, coinSearched)
        // cant get geckoCoins the global variable to be set inside this???
        // geckoCoins = { ...res }
        console.log('coinFoundObj: ', coinFoundObj)

        if (coinFoundObj) {
          setCoinFound(coinFoundObj)
        }
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }, [coinSearched])

  // console.log('geckoCoins', getGeckoCoins())

  // // do I need this in a useEffect?
  // getGeckoCoins()
  //   .then(res => {
  //     geckoCoins = getGeckoCoins()
  //     return null
  //   })
  //   .catch(err => console.error(err.message))

  // console.log('geckoCoins', geckoCoins)

  // function for when text area 'changes'
  function handleChange (event) {
    // console.log('events: ', event)
    setCoinSearching(event.target.value)
    console.log('CoinSearching: ', coinSearching)
  }

  // function for when user clicks search...
  function handleClick () {
    setCoinSearched(coinSearching)
  }

  // // search for coin
  // useEffect(() => {
  //   console.log('geckoCoins: ', geckoCoins)
  //   console.log('coinSearched: ', coinSearching)
  //   // setCoinFound(findCoin(geckoCoins, coinSearched))
  // }, [coinSearched])

  // how to show live search of database?

  // random console logs...
  // console.log('coinFound: ', coinFound)

  return (
    <>
      <textarea
        value={coinSearching}
        onChange={handleChange}
        style={{ width: '300px', height: '30px' }}
        placeholder="Type a cryptocurrency" />
      <button style={{ display: 'block' }} onClick={handleClick}>search!</button>
      {/* {coinFound.name && <p>Coin found: {coinFound.name}</p>} */}
      {coinFound.name}
    </>
  )

  // return (
  //   <>
  //     <p>{coins.name}</p>
  //     <p>Bitcoin Price: ${coinPrice}</p>
  //     <form>
  //       <label htmlFor="coin">Input desired coin</label>
  //       <input type="text" id="coin" name="coin"></input>
  //       <input type="submit" value="Search"></input>
  //     </form>
  //   </>
  // )

  // useEffect(() => {
  //   getCoinInfo('bitcoin')
  //     .then(res => {
  //       console.log('res: ', res)
  //       setCoinPrice(res.market_data.current_price.usd)
  //       return null
  //     })
  //     .catch(err => {
  //       res.send(500)
  //       console.error(err.message)
  //     })
  // }, [])
}

export default App
