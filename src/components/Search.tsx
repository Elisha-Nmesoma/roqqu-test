import React from 'react'

const Search = () => {
    const markets = [
        {
            id: "01",
            title: "All",
            coins: [
                {
                    id: "1",
                    img: "",
                    name: "BTC-USDT",
                    price: 23234.6,
                    change: "0.005"
                },
                {
                    id: "1",
                    img: "",
                    name: "BTC-USDT",
                    price: 23234.6,
                    change: "0.005"
                }
            ]
        },
        {
            id: "02",
            title: "USD",
            coins: [
                {
                    id: "1",
                    img: "",
                    name: "BTC-USDT",
                    price: 23234.6,
                    change: "0.005"
                }
            ]
        },
        {
            id: "03",
            title: "BTC",
            coins: [
                {
                    id: "1",
                    img: "",
                    name: "BTC-USDT",
                    price: 23234.6,
                    change: "0.005"
                }
            ]
        }
    ]
    return (
        <div className='bg-primary'>
            <h2 className='text-white font-bold'>Select Market</h2>
            <input
                type='text'
                placeholder='Search'
                className='border border-border rounded-lg'
            />
            <div>
                {markets.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <div>
                            {item.coins.map((coin) => (
                                <div>
                                    <div>
                                        <div>
                                            <img src={coin.img} />
                                        </div>
                                        <p>{coin.name}</p>
                                    </div>
                                    <div>
                                        <p>${coin.price}</p>
                                        <p>+{coin.change}%</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search