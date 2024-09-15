'use client'
import Image from 'next/image';
import { useState } from 'react';

function Type() {
    const options = ['Fill or kill', 'Good till cancelled', 'Good till date', 'Immediate or cancel'];
    const [type, setType] = useState<string>(options[1]);
    const [displayType, setDisplayType] = useState<boolean>(false)
    return (
        <section className='flex items-center gap-1 relative'
         onClick={()=>  setDisplayType(!displayType)}>
            <button>{type}</button>
            <span>
                <Image src="/Vector.png" alt="" width={5} height={5} />
            </span>
            {displayType && (
                <div className='flex flex-col items-center absolute top-8 -right-2 bg-primary rounded-md border border-border2 text-xs text-white w-[183px] h-[183px] overflow-hidden'>
                    {options.map((option, index) => (
                        <p
                            key={option}
                            id={`option-${index}`}
                            className={`pl-3 py-3 w-full h-full text-start cursor-pointer font-medium ${option === type ? `bg-secondary2` : null}`}
                            onClick={() => setType(option)}>
                            {option}
                        </p>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Type