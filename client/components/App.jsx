import React from 'react'
import { Route } from 'react-router-dom'
// import { gecko } from '../api'

import Trending from './Trending'
import CoinInfo from './CoinInfo'

import ExpandInfo from './ExpandInfo'

import ThreeJS from './ThreeJS'

function App () {
  // // ping gecko api
  // useEffect(() => {
  //   gecko()
  //     .then(res => {
  //       // console.log('res: ', res)
  //       setGecko(res.gecko_says)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // }, [])

  return (
    <>
      {/* <Route path='/' component={ThreeJS}/> */}
      <Route path='/' exact component={Trending} />
      <Route path='/:id' component={CoinInfo} />
      <Route path='/:id/info' component={ExpandInfo} />
    </>
  )
}

export default App
