import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { gecko } from '../api'

import Trending from './Trending'
import CoinInfo from './CoinInfo'
import ExpandInfo from './ExpandInfo'

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
      <h2>{geckoState}</h2>
      <Route path='/' exact component={Trending} />
      <Route path='/:id' component={CoinInfo} />
      <Route path='/:id/info' component={ExpandInfo} />
    </>
  )
}

export default App
