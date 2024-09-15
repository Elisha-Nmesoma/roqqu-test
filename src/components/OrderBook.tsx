'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import WebSocketOrderBook from './websocketOrderbook';
import ClosePrice from './ClosePrice';

// Define the type for the orderbook entries
interface Order {
  price: number;
  amount: number;
  total:number;
}

// Define the type for the orderbook structure
interface Orderbook {
  buy: Order[];
  sell: Order[];
}

const OrderBook = () => {
  const [orderbook, setOrderbook] = useState<Orderbook>({ buy: [], sell: [] });
  const [filteredOrderbook, setFilteredOrderbook] = useState<Orderbook>({ buy: [], sell: [] });
  const [num, setNum] = useState<number>(10);
  const [sliced, setSliced] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'all' | 'buy' | 'sell'>('all');

  // Handle WebSocket data updates
  useEffect(() => {
    applyFilter(orderbook);
  }, [orderbook, num, viewMode]);

  // Apply the filter based on viewMode (all, buy, or sell)
  const applyFilter = (orderbook: Orderbook) => {
    if (viewMode === 'all') {
      setFilteredOrderbook({
        buy: orderbook.buy.slice(0, num),
        sell: orderbook.sell.slice(0, num),
      });
    } else if (viewMode === 'buy') {
      setFilteredOrderbook({
        buy: orderbook.buy.slice(0, 100),
        sell: [],
      });
    } else if (viewMode === 'sell') {
      setFilteredOrderbook({
        buy: [],
        sell: orderbook.sell.slice(0, 100),
      });
    }
  };

  // Filter functions for displaying buy, sell, or both
  const showAll = () => setViewMode('all');
  const showBuy = () => setViewMode('buy');
  const showSell = () => setViewMode('sell');
  const sliceClick = () => setSliced(!sliced);
  const slices = (index: number) => {setNum((index + 1) * 5)};

  const [activeButton, setActiveButton] = useState<number>(1);
  const handleButtonClick = (buttonIndex: number) => setActiveButton(buttonIndex);




  return (
    <section className="py-2">
      {/* WebSocket component to update orderbook */}
      <WebSocketOrderBook setOrderbook={setOrderbook} />

      <section className='flex flex-row items-center justify-between w-full'>
        {/* Buttons for filtering buy/sell */}
        <div className='flex'>
          <button className={`flex flex-col gap-[2px] p-3 rounded-[4px] cursor-pointer ${activeButton === 1 ? 'bg-black' : ''}`}
            onClick={() => {
              showAll();
              handleButtonClick(1);
            }}>
            <div className='w-3 h-[2px] bg-Orange rounded-sm'></div>
            <div className='w-3 h-[2px] bg-lightgrey rounded-sm'></div>
            <div className='w-3 h-[2px] bg-green rounded-sm'></div>
          </button>

          <button className={`flex flex-col gap-[2px] p-3 rounded-[4px] cursor-pointer ${activeButton === 2 ? 'bg-black' : ''}`}
            onClick={() => {
              showBuy();
              handleButtonClick(2);
            }}>
            <div className='w-3 h-[2px] bg-lightgrey rounded-sm'></div>
            <div className='w-3 h-[2px] bg-lightgrey rounded-sm'></div>
            <div className='w-3 h-[2px] bg-green rounded-sm'></div>
          </button>

          <button className={`flex flex-col gap-[2px] p-3 rounded-[4px] cursor-pointer ${activeButton === 3 ? 'bg-black' : ''}`}
            onClick={() => {
              showSell();
              handleButtonClick(3);
            }}>
            <div className='w-3 h-[2px] bg-Orange rounded-sm'></div>
            <div className='w-3 h-[2px] bg-lightgrey rounded-sm'></div>
            <div className='w-3 h-[2px] bg-lightgrey rounded-sm'></div>
          </button>
        </div>

        {/* Dropdown for selecting the number of orderbook entries */}
        <div className='cursor-pointer flex justify-between items-center gap-3 bg-marketBg rounded-md p-2 text-white font-light text-xs relative' onClick={sliceClick}>
          <p>{num}</p>
          <div className=''>
            <Image src="/Vector.png" alt="" width={9} height={9} />
          </div>
          {sliced && (
            <div className='flex flex-col items-center gap-1 bg-marketBg absolute w-full top-[1.8rem] left-0 rounded-b-md pb-2'>
              {Array.from({ length: 6 }, (_, i) => (i + 1) * 5).map((item, index) => (
                <p key={index} onClick={() => { sliceClick(); slices(index); }} className='hover:bg-black w-full text-center'>
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Orderbook Table */}
      <div className="flex flex-col h-full overflow-y-hidden scrollbar">
        {/* Header row */}
        <div className="flex gap-3 text-grey font-medium text-xs justify-between">
          <p className="text-start w-2/6">Price < br /><span className='text-[8px]'>(USDT)</span></p> 
          <p className=" text-end  w-2/6">Amount < br/> <span className='text-[8px]'>(BTC)</span></p>
          <p className="text-end  w-2/6">Total</p>
        </div>

        {/* Sell orders (ask) */}
        <div className={`overflow-y-scroll scrollbar flex flex-col 
        ${
          activeButton === 1 ? 'h-[11rem] md:h-[11.6rem]' 
          : 
          activeButton === 2 ? 'h-0' 
          :
           activeButton === 3 ? 'h-[22rem] md:h-[24.2rem]'
           : " "  }
             `}>
          {filteredOrderbook.sell.map((item, index) => (
            <div key={index} className="flex justify-between gap-3 w-full " id="sell">
              <p className="text-Orange w-2/6">{item.price.toFixed(2)}</p>
              <p className="text-white text-end  w-2/6 ">{item.amount.toFixed(4)}</p>
              <p className="text-white text-end  w-2/6">{item.total.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Close Price */}
        <div className="text-center text-xl font-bold py-2">
          <ClosePrice />
        </div>

        {/* Buy orders (bid) */}
      <div className={`overflow-y-scroll scrollbar flex flex-col  
         ${
          activeButton === 1 ? 'h-[11rem] md:h-[11.6rem]' 
          : 
          activeButton === 2 ? ' h-[22rem] md:h-[23.4rem]' 
          :
           activeButton === 3 ? 'h-0'
           : " "  }  `}>
          {filteredOrderbook.buy.map((item, index) => (
            <div key={index} className="flex justify-between gap-3" id="buy">
              <p className="text-green w-2/6">{item.price.toFixed(2)}</p>
              <p className="text-white text-end w-2/6">{item.amount.toFixed(4)}</p>
              <p className="text-white text-end w-2/6">{(item.price * item.amount).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OrderBook;
