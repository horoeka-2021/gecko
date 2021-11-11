import React, { useState, useEffect } from 'react'
import { gecko } from '../api'
// import Coin from './Coin'
import Trending from './Trending'

function App () {
  const [geckoState, setGecko] = useState('')

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
      <h2>Gecko says: {geckoState}</h2>
      {/* <p>{coins.name}</p> */}
      <Trending/>
      {/* <p>Bitcoin Price: ${coinPrice}</p> */}
    </>
  )
}

export default App
