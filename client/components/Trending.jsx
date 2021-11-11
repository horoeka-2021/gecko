import React, { useState } from 'react'
import { getTrending } from '../api'
export default function Trending () {
  const [data, setData] = useState({ coins: [] })
  //   console.log(data)

  function handleClicked () {
    getTrending()
      .then(ele => {
        console.log(ele)
        setData(ele)
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='bullsEye'>
      {data.coins.map(ele => {
        return (
          <div key={ele.item.coin_id}>
            <img src={ele.item.large} alt={ele.item.name}></img>
          </div>
        )
      })}
      <div className='trend-btn' onClick={handleClicked}></div>
    </div>
  )
}
