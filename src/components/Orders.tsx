"use client"
import { useState } from "react";

function Orders() {
    const orders = ["Open Orders", "Postions", "Order History", "Trade History"];
    const [selectedOrder, setSelectedOrder] = useState<null | number>(null);
    
    return (
        <div className=' flex flex-col gap-3 bg-secondary border border-border2 md:rounded-md p-3 rounded-sm  w-full h-[21.875rem] md:h-[35.063rem] overflow-hidden'>
            <div className=' bg-black w-full md:w-fit flex gap-3 rounded-md p-[2px] text-grey text-xs overflow-x-scroll md:overflow-x-auto whitespace-nowrap scrollbar cursor-pointer'>
                {orders.map((order, index) => (
                    <p
                        className={`inline-block w-28 py-1.5 text-center transition duration-150 ease-in-out border-r-grey16 none-border ${index === selectedOrder ? 'text-white bg-[#21262C] rounded-md p-4  ' : ''}`}
                        onClick={() => setSelectedOrder(index)} >
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
