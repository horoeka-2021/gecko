import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getTrending } from '../api'
export default function Trending () {
  const [data, setData] = useState({ coins: [] })
  const [style, setStyle] = useState({
    display: 'block'
  })
  //   console.log(data)

  function handleClicked () {
    getTrending()
      .then(ele => {
        console.log(ele)
        setData(ele)
        setStyle({ display: 'none' })
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='bullsEye'>
      <div className='ring2'>
        <h2 className='title' style={style}>coinGun</h2>
        {data.coins.map((ele, idx) => {
          return (
            <Link to={`/${ele.item.id}`} key={ele.item.coin_id} >
              <img src={ele.item.large} alt={ele.item.name} ></img>
            </Link>
          )
        })}
        <div className='trend-btn' onClick={handleClicked} style={style}></div>
      </div>
    </div>
  )
}
