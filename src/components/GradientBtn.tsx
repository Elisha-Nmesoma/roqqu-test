'use client'
import { useState, useEffect } from 'react'
interface BtnProps {
    sales:number;
}
const Btn: React.FC<BtnProps> = ({ sales }) => {
    const [trade, setTrade] = useState<null | string>(null);
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
