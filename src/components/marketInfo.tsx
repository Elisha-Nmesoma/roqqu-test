'use client'
import {useState} from 'react'
import Image from 'next/image';
import ClosePrice from './ClosePrice';
import WebSocketOrderBook from './websocketOrderbook';

const MarketInfo = () => {
    const [BTCTickerData, setBTCTickerData] = useState({
        abchange: 0,
        change: 0,
        high: 0,
        low: 0,
        volume: 0,
      });
  const isMarketGreen = BTCTickerData.change > 0;

  const marketInfo = [
    {
      id: "333jkdf78jkf",
      pair: "BTC/USDT",
      price: <ClosePrice />,
      details: [
        {
          id: 1,
          title: "24h Change",
          value: `${BTCTickerData.abchange.toFixed(2)} ${isMarketGreen ? '+' : '-'}${BTCTickerData.change.toFixed(2)}%`,
          color: isMarketGreen ? "#25C26E" : "#FF554A", // Add color property
        },
        {
          id: 2,
          title: "24h High",
          value: `${BTCTickerData.high.toFixed(2)} ${isMarketGreen ? '+' : '-'}${BTCTickerData.change.toFixed(2)}%`,
        },
        {
          id: 3,
          title: "24h Low",
          value: `${BTCTickerData.low.toFixed(2)} ${isMarketGreen ? '+' : '-'}${BTCTickerData.change.toFixed(2)}%`,
        },
        {
          id: 4,
          title: "24h Volume",
          value: BTCTickerData.volume.toFixed(2),
        },
      ],
    },
  ];
   
    return (
        <div className=' bg-secondary border border-border2 md:rounded-md py-3 pl-3 w-full rounded-sm'>
            <WebSocketOrderBook setBTCTickerData={setBTCTickerData} />
            {marketInfo.map(item => (
                <div key={item.id} className='flex flex-col md:flex-row gap-4'>
                    <div className='flex items-center gap-4 cursor-pointer md:w-[21rem] lg:w-fit'>
                        <div className=' w-10 flex relative'>
                            <div className='bg-[#F7931A] w-8 h-8 rounded-full flex items-center justify-center'>
                                <Image src="/btc.png" alt="" width={12} height={12 } />
                            </div>
                            <div className='bg-[#6CDE07] w-8 h-8 rounded-full border-l-2 border-l-border2 absolute top-0 left-5 flex items-center justify-center'>
                                <Image src="/usdt.png" alt="" width={12} height={12} />
                            </div>
                        </div>
                        <p className='text-xl text-white'>{item.pair}</p>
                        <div className='w-5 h-5 relative'>
                            <Image src="/Frame.png" alt="" fill className='object-contain' />
                        </div>
                        <p >{item.price}</p>
                    </div>


                    <div className='flex items-center gap-4 overflow-x-scroll md:overflow-x-auto whitespace-nowrap scrollbar'>
                        {item.details.map(detail => (
                            <div key={detail.id}
                                className='text-grey text-xs border-r md:border-r-0 md:border-l border-r-grey16 md:border-l-grey16 w-[34%] md:w-fit shrink-0 flex flex-col gap-2'>
                                <p className=' md:px-4 lowercase'>{detail.title}</p>
                                <p className='text-white md:px-4 whitespace-nowrap font-medium '
                                style={{color: detail.color}}>{detail.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MarketInfo