"use client"
import React, { useState } from "react";

function Orders() {
    const orders = ["Open Orders", "Postions", "Order History", "Trade History"];
    const [selectedOrder, setSelectedOrder] = useState(null);
    const orderClicks = (index) => {
        setSelectedOrder(index);
    }
    return (
        <div className=' flex flex-col gap-3 bg-secondary border border-border2 md:rounded-md py-3 pl-3 rounded-sm  w-full h-[21.875rem] md:h-[35.063rem]'>
            <div className=' bg-black w-fit flex rounded-md p-[2px] text-grey text-xs  overflow-x-scroll md:overflow-x-auto whitespace-nowrap scrollbar cursor-pointer'>
                {orders.map((order, index) => (
                    <p
                        className={`w-28 py-1.5 text-center border-r transition duration-150 ease-in-out border-r-grey16 none-border ${index === selectedOrder ? 'text-white bg-[#21262C] rounded-md border-r-0 px-4 ' : ''}`}
                        onClick={() => { orderClicks(index)
                            
                         }} >
                        {order}
                    </p>
                ))}
            </div>

            <div className=" w-[calc(100%-12px)] h-[calc(100%-12px)] flex items-center justify-center">
                <div className=' text-center w-[18.375rem] md:w-[23rem]'>
                    <h2 className='text-white text-xl'>No Open Orders</h2>
                    <p className='text-grey text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.</p>
                </div>
            </div>
        </div>
    )
}
export default Orders
