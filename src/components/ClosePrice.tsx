'use client';
import React, { useState } from 'react';
import WebSocketOrderBook from './websocketOrderbook';

const ClosePrice = () => {
  const [lastPrice, setLastPrice] = useState<number>(0);
  const [bestBuy, setBestBuy] = useState<number | undefined>(undefined);
  
  

  return (
    <div>
      <WebSocketOrderBook
        setOrderbook={(orderbook) => {
          setBestBuy(orderbook.bestBuy);
        }}
        setLastPrice={setLastPrice}
      />
      <p
        className={lastPrice === bestBuy ? "text-green" : "text-red"}>
        ${lastPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  );
};

export default ClosePrice;
