'use client'
import { useState, useEffect } from 'react'
import Limit from './Limit';
import Market from './Market';
import StopLimit from './StopLimit';
import Currency from './Currency';

const Trades = [
  {
    title: "Buy",
    color: "#25C26E",
    type: ["Limit", "Market", "Stop-Limit"]
  },
  {
    title: "Sell",
    color: "#FF554A",
    type: ["Limit", "Market", "Stop-Limit"]
  }
];
interface TradeProps {
  selectedSale?: number; // Specify the type of selectedSale
}

const Trade: React.FC<TradeProps>  = ({ selectedSale }) => {
  const [sales, setSales] = useState<number>(0); // Default to Buy
  const [selectedType, setSelectedType] = useState(Trades[0].type[0]); // Default to first type of Buy
  const [marketOrder, setMarketOrder] = useState<number>(0); // Default to Limit (index 0)

  // Update sales when selectedSale changes (for mobile devices)
  useEffect(() => {
    if (selectedSale === 0) {
      setSales(0);
    } else if (selectedSale === 1) {
      setSales(1);
    }
  }, [selectedSale]);

  // Update selectedType whenever the sales index changes
  useEffect(() => {
    setSelectedType(Trades[sales].type[0]); // Set to the first type (e.g., Limit) whenever sales changes
    setMarketOrder(0); // Reset to 'Limit'
  }, [sales]);

  // Handle sales click (Buy/Sell button)
  const salesClick = (index: number) => {
    setSales(index); // Set Buy or Sell
    setSelectedType(Trades[index].type[0]); // Set the first order type by default
    setMarketOrder(0); // Reset to 'Limit'
  };

  // Handle changing the selected type
  const handleTypeChange = (type:string, index: number) => {
    setSelectedType(type);
    setMarketOrder(index); // Set the market order index (0 for Limit, 1 for Market, 2 for Stop-Limit)
  };

  // Function to render the buttons for order types
  const renderOrderTypes = () => {
    return (
      <div className='flex items-center justify-between mt-4'>
        {Trades[sales].type.map((type, index) => (
          <button
            key={index}
            className={`text-grey text-xs py-2 px-4 text-center transition duration-150 ease-in-out rounded-full ${selectedType === type ? 'bg-marketBg text-white' : ''}`}
            onClick={() => handleTypeChange(type, index)} // Set the selected type and market order index on click
          >
            {type}
          </button>
        ))}
      </div>
    );
  };

  // Function to render the correct component based on the selected market order
  const renderSalesOrder = () => {
    switch (marketOrder) {
      case 0:
        return <Limit sales={sales} />;
      case 1:
        return <Market sales={sales} />;
      case 2:
        return <StopLimit sales={sales} />;
      default:
        return null;
    }
  };

  return (
    <section className='p-2 text-grey text-xs'>
      <div className='pb-4 flex flex-col gap-4'>
        <div className='bg-black rounded-lg'>
          {Trades.map((item, index) => (
            <button
              key={index}
              className={`text-grey text-xs p-2 w-1/2 text-center transition duration-150 ease-in-out ${index === sales ? 'text-white rounded-lg border bg-secondary2' : ''}`}
              style={index === sales ? { borderColor: item.color } : undefined}
              onClick={() => salesClick(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Render Order Types */}
        <div>{renderOrderTypes()}</div>

        {/* Render Sales Order Components */}
        <div className='h-full w-full'>{renderSalesOrder()}</div>

        <div className='pt-4 flex flex-col gap-4 border-t border-t-border3'>
          {/* Balance */}
          <div className='flex justify-between items-center'>
            <p className='flex flex-col gap-2'>
              Total account value <span className='text-white'>0.00</span>
            </p>
            <Currency />
          </div>

          {/* Open Orders */}
          <div className='flex justify-between items-center'>
            <p className='flex flex-col gap-2'>
              Open Orders <span className='text-white text-sm'>0.00</span>
            </p>
            <p className='flex flex-col gap-2'>
              Available <span className='text-white text-sm'> 0.00</span>
            </p>
          </div>

          <button className='text-white bg-blue rounded-md text-sm py-2 px-4 w-fit'>
            Deposit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trade;
