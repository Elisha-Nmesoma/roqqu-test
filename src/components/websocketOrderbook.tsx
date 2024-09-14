'use client';
import { useEffect } from 'react';

interface Order {
    price: number;
    amount: number;
    total:number;
}

interface Orderbook {
    buy: Order[];
    sell: Order[];
    bestBuy?: number;
}

interface BtcTickerData {
    E: number;  // Event time
    c: string; // Current price
    o: string;  // Open price 
    p: string;  // Price change percentage
    h: string;  // 24h High price
    l: string;  // 24h Low price
    v: string;  // 24h Volume
}
// intially i had an issue with this because it reqiures me to pass down the props (orderbook and lastprice) at the same time to the orderbook component while i needed the to be in a differnrt componet.
//to solve this this isse u had to make them condtionally render . using this i do not need to pass down the props at the samme compnent.
interface WebSocketOrderBookProps {
    setOrderbook?: (orderbook: Orderbook) => void;
    setLastPrice?: (price: number) => void;
    setBTCTickerData?: (data: { abchange: number; change: number; high: number; low: number; volume: number }) => void;
}

const WebSocketOrderBook = ({ setOrderbook, setLastPrice, setBTCTickerData }: WebSocketOrderBookProps) => {
    useEffect(() => {
        let ws: WebSocket | null = null;
        let wsTicker: WebSocket | null = null;
        let socket: WebSocket | null = null;

        if (setOrderbook) {
            ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth');
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                const bids = data.b || [];
                const asks = data.a || [];

                const buyOrders = bids.map((bid: [string, string]) => ({
                    price: parseFloat(bid[0]),
                    amount: parseFloat(bid[1]),
                    total: parseFloat(bid[0]) * parseFloat(bid[1]),
                }));
                const sellOrders = asks.map((ask: [string, string]) => ({
                    price: parseFloat(ask[0]),
                    amount: parseFloat(ask[1]),
                    total: parseFloat(ask[0]) * parseFloat(ask[1]),
                }));

                // Get the best buy and sell prices
                const bestSell = sellOrders.length > 0 ? buyOrders[0].price : undefined;
                const bestBuy = buyOrders.length > 0 ? sellOrders[0].price : undefined;

                const updatedOrderbook: Orderbook = {
                    buy: buyOrders,
                    sell: sellOrders,
                    bestBuy,
                };
                setOrderbook(updatedOrderbook);
            };
        }

        if (setLastPrice) {
            wsTicker = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
            wsTicker.onmessage = (event) => {
                const data = JSON.parse(event.data);
                const lastPrice = parseFloat(data.c);

               if (!isNaN(lastPrice) && lastPrice !== 0) {
                    setLastPrice(lastPrice);
                }
            };
        }

        if (setBTCTickerData) {
            socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker');
            socket.onmessage = (event) => {
                const data: BtcTickerData = JSON.parse(event.data);
                const { c, o, h, l, v } = data;
                setBTCTickerData({
                    abchange: ((parseFloat(c) - parseFloat(o))),
                    change: ((parseFloat(c) - parseFloat(o)) / parseFloat(o)) * 100,
                    high: parseFloat(h),
                    low: parseFloat(l),
                    volume: parseFloat(v),
                });
            };
        }

        return () => {
            if (wsTicker) {wsTicker.onclose = () => setTimeout(() => 3000)}
            if (ws) {ws.onclose = () => setTimeout(() => 3000)}
            // if (ws) ws.close();
            // if (wsTicker) wsTicker.close();
            if (socket) socket.close();
        };
    }, [setOrderbook, setLastPrice, setBTCTickerData]);

    return null;
};

export default WebSocketOrderBook;

