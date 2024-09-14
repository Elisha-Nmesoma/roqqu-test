'use client'
import React, {useState} from 'react'

function Hamburger({ hamburgerClick }) {
    const options = ['Exchange', 'Wallets', 'Roqqu Hub', 'Log out'];
    const [selected, setSelected] = useState(null);
    const clciks = (index) => {
        setSelected(index)
    }
    return (
        <ul className={`flex flex-col gap-1 bg-primary w-fit h-fit pt-0 text-grey rounded-xl border border-[#373B3F] overflow-hidden absolute top-[8.5vh] right-5 md:hidden `}>
            {options.map((option, index) => (
                <li
                    key={option}
                    id={`option-${index}`}
                    className='pl-3 py-3 pr-16 text-start w-full font-medium text-sm'
                    onClick={()=> {
                        hamburgerClick(),
                        clciks(index)
                    }}
                    style={{  backgroundColor: index === selected ? "#252A30" : undefined}}
                    >
                    {option}
                </li>
            ))}
        </ul>
    )
}

export default Hamburger