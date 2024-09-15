'use client'
import { useState } from 'react'
import OrderBook from './OrderBook'
import RecentTrade from './RecentTrade'

const BtcOrders = () => {
    const orderbook = ["Order Book", "Recent trade"];
    const [selectedBtcOrder, setSelectedBtcOrder] = useState<number>(0); //set the default view to orderbook

    // Function to render the correct component based on selected order
    const renderSelectedBtcOrder = () => {
        switch (selectedBtcOrder) {
            case 0:
                return <OrderBook />;
            case 1:
                return <RecentTrade />;
            default:
                return null;
        }
    };
    return (
        <section className='flex flex-col items-center justify-center gap-4 p-2 '>
            <div className='bg-black rounded-lg p-[2px] w-full'>
                {orderbook.map((item, index) => (
                    <button
                        className={`text-grey text-xs w-1/2 text-center transition duration-150 ease-in-out ${selectedBtcOrder === index ? ('text-white bg-[#21262C] rounded-lg border-r-0 p-2') : null}`}
                        onClick={()=> setSelectedBtcOrder(index)}>
                        {item}
                    </button>
                ))}
            </div>
            <div className='w-full h-[calc(31rem)]'>{renderSelectedBtcOrder()}</div>
        </section>
    )
}

export default BtcOrders