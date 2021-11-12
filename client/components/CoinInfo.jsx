import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTrending } from '../api'

export default function CoinInfo () {
  const { id } = useParams()
  console.log('id:', id)
  const dataTemp = {
    item: {
      id: '',
      coin_id: null,
      name: '',
      symbol: '',
      market_cap_rank: null,
      thumb: '',
      small: '',
      large: '',
      slug: '',
      price_btc: null,
      score: 0
    }
  }
  const [coinData, setcoinData] = useState(dataTemp)

  useEffect(() => {
    getTrending()
      .then(ele => {
        console.log('trend data', ele)
        const coinDetails = ele.coins.find(details => details.item.id === id)
        console.log('coin details: ', coinDetails)
        return coinDetails
      })
      .then((foundData) => {
        console.log('foundData: ', foundData)
        setcoinData(foundData)
        return null
      })
      .catch(err => console.error(err))
  }, [])

  // console.log('coindata: ', coinData)

  return (
    <div className='bullsEye'>
      <div className='coinInfo'>
        <h1>hello</h1>
        <img src={coinData.item.large} alt={coinData.item.name}></img>
        <h3>{coinData.item.name}({coinData.item.symbol})</h3>
        <p>Market Cap: {coinData.item.market_cap_rank}</p>
        <p>Price in Bitcoin: {coinData.item.price_btc}</p>
      </div>
      <Link to="/" className='home-btn'>Back to Trending</Link>
    </div>
  )
}
