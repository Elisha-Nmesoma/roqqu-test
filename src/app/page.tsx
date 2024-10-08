import Image from "next/image";
import Button from '@/components/btn'
import Navbar from '@/components/Navbar'
import MarketInfo from '@/components/marketInfo'
import TradingView from '@/components/TradingView'

export default function Home() {
  return (
      <div className='flex flex-col gap-2 mb-20'>
      <Navbar />
      <div className='flex flex-col gap-2 px-2'>
        <MarketInfo />
        <TradingView />
      </div>
      <Button />
    </div>
  );
}
