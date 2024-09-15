import React, { useState } from 'react'
import Image from 'next/image';

function Currency() {
    const currencies = [
        {
            id: "1",
            country: "Nigeria",
            currency: "NGN",
            img: "/ngn.png",
        },
        {
            id: "2",
            country: "British Pounds",
            currency: "GDP",
            img: "/british.png",
        },
        {
            id: "3",
            country: "US Dollar",
            currency: "USD",
            img: "/usa.png",
        },
        {
            id: "4",
            country: "European Euros",
            currency: "EUR",
            img: "/euro.png",
        }
    ];
    const [currency, setCurency] = useState<string>("NGN");
    const [country, setCountry] = useState<boolean>(false);

    return (
        <button className='flex gap-1 items-center relative'
            onClick={() => setCountry(!country)}>
            <p>{currency}</p>
            <Image src="/Vector.png" alt="" width={6} height={6} />


            {country && (
                <div className='bg-primary border border-border2 rounded-xl absolute top-4 right-0  w-[220px] overflow-hidden'>
                    {currencies.map((item) => (
                        <div
                            key={item.id}
                            className={`flex gap-3 text-start pl-4 py-4 w-full ${item.currency === currency ? `bg-secondary2` : null}`}
                            onClick={() => setCurency(item.currency)} >
                                {/* country image */}
                            <div className='rounded-full w-8 relative overflow-hidden'>
                                <Image src={item.img} alt={item.country} fill className='object-center ' />
                            </div>
                            <div >
                                <h2>{item.country}</h2>
                                <p>{item.currency}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </button>
    )
}

export default Currency