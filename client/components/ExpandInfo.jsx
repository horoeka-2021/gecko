import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
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
      .catch(err => {
        res.status(500).json({ errorEpanded: err.message })
      })
  }, [])

  return (
    <h1>{coinData.description.en}</h1>
  )
}
