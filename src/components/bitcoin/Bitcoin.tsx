import React, { useEffect, useState } from 'react'
import style from "./bitcoin.module.css"
import UserPage from '../usersPage/UsersPage'

export default function Bitcoin(): JSX.Element {
    const [price, setPrice] = useState<string>("")
    const [data, setData] = useState<string>("")
    async function loadBitcoinPrise(): Promise<void>{
    const res = await fetch ("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    const obj = await res.json();
    const bitcoinPrice = obj.bitcoin.usd.toFixed(2);


    setPrice(bitcoinPrice);
    setData(new Date().toLocaleString())
    }
useEffect(()=> {
    loadBitcoinPrise();
}, [])
  return (
    <div className={style.container}>
      <h1>Price Bitcoin</h1>
      <p className={style.date}>Дата: {data}</p>
      <p className={style.price}>Цена: {price}</p>
      <button className={style.button} type='button' onClick={()=> loadBitcoinPrise()}>Next Kurs</button>
      <UserPage />
    </div>
  )
}
