import React, { useState, useEffect } from 'react'
import { getWelcome, gecko} from '../api'
import Coin from './Coin'

function App () {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [geckoState, setGecko] = useState('')

  // Example code for welcome statement
  useEffect(() => {
    getWelcome()
      .then(res => {
        setWelcomeStatement(res.statement)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  // ping gecko api
  useEffect(() => {
    gecko()
      .then(res => {
        // console.log('res: ', res)
        setGecko(res.gecko_says)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <h2>Gecko says: {geckoState}</h2>
      {/* <p>{coins.name}</p> */}
      <Coin />
      {/* <p>Bitcoin Price: ${coinPrice}</p> */}
    </>
  )
}

export default App
