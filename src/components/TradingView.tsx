'use client'
import Trade from "./Trade"
import Orders from "./Orders"
import TradeWidget from "./TradeWidget"
import RecentTrade from "./RecentTrade"
import { useState } from "react"
import BtcOrders from "./BtcOrders"
import OrderBook from "./OrderBook"




const MobileTradeView = () => {
  const view = ["Chart", "Orderbook", "Recent trade"];
  const [selectedView, setSelectedView] = useState<number>(0); // Default to "Chart" view

  // Function to render the correct component based on selected view
  const renderSelectedView = () => {
    switch (selectedView) {
      case 0:
        return <TradeWidget />;
      case 1:
        return <OrderBook />;
      case 2:
        return <RecentTrade />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-black rounded-md p-[2px] text-grey text-xs cursor-pointer">
        {view.map((item, index) => (
          <button  
          key={index}
          className={`w-2/6 py-1.5 text-center  ${index === selectedView ? 'text-white bg-[#21262C] rounded-md border-r-0 px-4 ' : ''}`}
          onClick={() => setSelectedView(index)}  >
            {item}
            </button>
        ))}
      </div>
      <div className=" h-[calc(100vh-19rem)] bg-secondary border border-border2 md:rounded-md">{renderSelectedView()}</div> 
      <Orders />
    </div>
  )
}
const DesktopTradeView = () => {
  const view = ["chart", "Orderbook", "Recent trade"]
  return (
    <div className=' rounded-sm w-full md:grid gap-2 md:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-5 hidden '>
      <div className='bg-secondary border border-border2 md:rounded-md  md:col-span-2 lg:col-span-3 md:row-start-1 md:row-end-1'>
        <TradeWidget />
      </div>
      <div className='bg-secondary border border-border2 md:rounded-md md:h-[35.063rem] md:col-span-2 md:grid-row-2 lg:grid-row-1 lg:col-start-4 lg:col-end-4 '>
        <BtcOrders />
      </div>
      <div className='bg-secondary border border-border2 md:rounded-md h-fit pb-4  md:col-start-3 md:col-end-3 lg:col-start-5 lg:col-end-5 md:row-start-1 md:row-span-2   '>
        <Trade />
      </div>
      <div className=' md:row-start-3 md:col-span-3 lg:col-span-4 lg:row-start-2'>
        <Orders />
      </div>
    </div>
  )
}

const TradingView = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileTradeView />
      </div>
      <div className="hidden md:block">
        <DesktopTradeView />
      </div>
    </div>
  )
}

export default TradingView