'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import ScreenWidth from './screenWidth';
import Hamburger from '@/components/hamburger';

function Navbar() {
    const navMenu = ["Exchange", "Wallets", "Roqqu Hub"];
    const isDesktop = ScreenWidth();
    
    //hamburgerclick for mobile 
    const [burger, setBurger] = useState<boolean>(false);
    const hamburgerClick = () => {
        setTimeout(() => {
            setBurger(!burger)
        }, 500)
    };
    //menu clicks for desktop
    const [menu, setMenu] = useState<null | number>(null);

    return (
        <div className='bg-nav p-2 py-8 w-full h-[8vh] rounded-sm border-b border-b-grey16 flex justify-between items-center'>
            <div className=' md:flex md:gap-4 '>
                {/* logo */}
                <div className='relative w-28 h-10 md:border-r md:border-grey16 cursor-pointer'>
                    <Image
                        className='object-contain md:pr-4'
                        src="/logo.png"
                        alt=""
                        fill
                    />
                </div>
                {isDesktop ? (
                    <div
                        className='flex items-center gap-4 text-grey text-sm'>
                        {navMenu.map((item, index) => (
                            <p
                                className='cursor-pointer'
                                onClick={() => { setMenu(index) }}
                                style={{  color: index === menu ? "white" : undefined}}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className='flex gap-4 items-center '>
                {/* profile */}
                <div className='md:text-grey md:bg-[#12171D] md:flex items-center  md:gap-2 md:px-3 md:py-2 md:rounded-md cursor-pointer'>
                    <div className='relative w-7 h-7 rounded-full flex items-center bg-profileColor border-2 border-[#DF9090]'>
                        <Image
                            className='object-contain'
                            src="/profile.png"
                            alt=""
                            fill
                        />
                    </div>
                    <p className='hidden md:block text-sm'>Elisha Nm...</p>
                    <div className='relative w-3 h-3  hidden md:block'>
                        <Image
                            className='object-contain'
                            src="/right_arrow.png"
                            alt=""
                            fill />
                    </div>
                </div>
                {/* language */}
                <div className=' relative w-6 h-6 rounded-full cursor-pointer'>
                    <Image
                        className='object-contain'
                        src="/globe.png"
                        alt=""
                        fill
                    />
                </div>
                {!isDesktop ? (
                    // mobile menu
                    <div className=' relative w-5 h-5 rounded-full bg-green-500 cursor-pointer'>
                        <Image
                            className='object-contain'
                            src="/humber.png"
                            alt=""
                            fill
                            onClick={hamburgerClick}
                        />
                    </div>
                ) : (
                    // logout
                    <div className='relative w-5 h-5 rounded-full bg-green-500 cursor-pointer'>
                        <Image
                            className='object-contain'
                            src="/signOut.png"
                            alt=""
                            fill
                        />
                    </div>
                )}
            </div>
            {burger && (<Hamburger hamburgerClick={hamburgerClick} />)}
        </div>
    )
}

export default Navbar