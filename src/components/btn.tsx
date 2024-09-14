'use client'
import { useState } from 'react'
import Trade from './Trade';

const salesBtn = [
    {
        title: "Buy",
        color: "#25C26E"
    },
    {
        title: "Sell",
        color: "#FF554A"
    }
];


function Button() {
    const [selectedSale, setSelectedSale] = useState(0);
    const salesClick = (index) => {
        setSelectedSale(index)
    }
    const [showSales, setShowSales] = useState(false);
    const rendersales = () => {
        switch (selectedSale) {
            case 0:
                return <Trade selectedSale={selectedSale} />
            case 1:
                return <Trade selectedSale={selectedSale} />
            default:
                return null;
        }
    }
    return (
        <div>
            <div className='flex gap-3 justify between bg-secondary p-3 fixed w-full left-0 bottom-8 md:hidden  '>
                {salesBtn.map((item, index) => (
                    <button
                        className='mobile_btn'
                        style={{ backgroundColor: item.color }}
                        onClick={() => {
                            salesClick(index),
                                setShowSales(!showSales)
                        }} >
                        {item.title}</button>
                ))}
            </div>
            {showSales && (
                <div className='trade md:hidden'>
                    <div className='w-full bg-primary fixed bottom-0 md:hidden p-6 rounded-t-3xl  z-20'>{rendersales()}</div>
                </div>
            )}
        </div>
    )
}

export default Button