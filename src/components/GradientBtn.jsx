'use client'
import { useState, useEffect } from 'react'

const Btn = ({ sales }) => {
    const [trade, setTrade] = useState(null);
    const setBtc = () => {
        if (sales === 0) {
            setTrade("Buy")
        } else if (sales === 1) {
            setTrade("Sell")
        }
    }
    useEffect(() => {
        setBtc()
    }, [sales])


    return (
        <button className='bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 w-full rounded-lg text-white py-2'>
            {trade} BTC
        </button>
    )
}

export default Btn