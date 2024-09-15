'use client'
import React, {useState} from 'react'

function Hamburger({ hamburgerClick }) {
    const options = ['Exchange', 'Wallets', 'Roqqu Hub', 'Log out'];
    const [selected, setSelected] = useState(null);
    return (
        <ul className={`flex flex-col gap-1 bg-primary w-fit h-fit pt-0 text-grey rounded-xl border border-[#373B3F] overflow-hidden absolute top-[8.5vh] right-5 md:hidden `}>
            {options.map((option) => (
                <li
                    key={option}
                    className='pl-3 py-3 pr-16 text-start w-full font-medium text-sm cursor-pointer hover:bg-[#252A30]'
                    onClick={()=> {
                        hamburgerClick(),
                        setSelected(option)
                    }}
                    style={{  backgroundColor: option === selected ? "#252A30" : undefined}}
                    >
                    {option}
                </li>
            ))}
        </ul>
    )
}

export default Hamburger