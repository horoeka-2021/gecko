import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCoinInfo } from '../api'

export default function ExpandInfo () {
  const { id } = useParams()
  console.log('id expand', id)
  const dataTemp = { description: { en: '' } }
  const [coinData, setcoinData] = useState(dataTemp)

  useEffect(() => {
    getCoinInfo(id)
      .then(coin => {
        console.log('expanded info', coin)
        setcoinData(coin)
        return null
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <p className='moreInfo'>{coinData.description.en}</p>
    // <h1>hello world</h1>
  )
}
