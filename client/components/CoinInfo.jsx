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
        <img src={coinData.item.large} alt={coinData.item.name}></img>
        <h2>{coinData.item.name} ({coinData.item.symbol})</h2>
        <p className='coinDets'>Market Cap: {coinData.item.market_cap_rank}</p>
        <p className='coinDets'>Price in Bitcoin: {coinData.item.price_btc}</p>
        <Link to="/" className='home-btn'>Back to Trending</Link>
        <Link to={`/${id}/info`} className='expand-btn'>More Info</Link>
      </div>
    </div>
  )
}
