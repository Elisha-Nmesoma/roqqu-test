import React from 'react'
import Image from 'next/image'
import Btn from './GradientBtn'
import Type from './Type'

interface LimitProps {
  sales: number;
}
const Limit:React.FC<LimitProps> = ({ sales }) => {
  return (
    <div className='flex flex-col gap-4'>
      {/* market trade type */}
      <div className='rounded-md border border-border3 flex justify-between p-2'>
        {/* order price */}
        <div className='flex gap-1 items-center text-xs'>
          <p>Limit price</p>
          <Image src="/u_info-circle.png" alt="" width={10} height={10} />
        </div>
        {/* price */}
        <div className='text-sm' >
          <p>0.00 USD</p>
        </div>
      </div>

      {/* ammount */}
      <div className='rounded-md border border-border3 flex justify-between p-2'>
        {/* order price */}
        <div className='flex gap-1 items-center text-xs'>
          <p>Amount</p>
          <Image src="/u_info-circle.png" alt="" width={10} height={10} />
        </div>
        {/* price */}
        <div className='text-sm' >
          <p>0.00 USD</p>
        </div>
      </div>

      {/* type */}
      <div className='rounded-md border border-border3 flex justify-between p-2'>
        {/* order price */}
        <div className='flex gap-1 items-center text-xs'>
          <p>Type</p>
          <Image src="/u_info-circle.png" alt="" width={10} height={10} />
        </div>
        {/* select */}
        <Type />
      </div>


      {/* checkbox area */}
      <div className='flex gap-1'>
        <input type='checkbox' className='h-4 w-4 rounded-md' />
        <p className='flex gap-1 items-center'>
          Post Only
          <span>
            <Image src="/u_info-circle.png" alt="" width={10} height={10} />
          </span>
        </p>
      </div>

      {/* button */}
      <div className='text-sm flex flex-col gap-2'>
        <p className='flex justify-between items-center'>
          Total
          <span>0.00</span>
        </p>
        <Btn sales={sales} />
      </div>
    </div>
  )
}

export default Limit