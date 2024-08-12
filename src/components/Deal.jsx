import React from 'react';
import { graysofa, sofaset } from '../assets';

const Deal = () => {
  return (
    <div className='w-full h-auto md:flex md:flex-col lg:flex-row bg-[#F5F1E6] justify-center my-10'>
        
      <div className="leftside lg:w-[50%] sm:min-h-[70%] lg:h-auto lg:flex  mb-6 pt-6  py-10">
      <div className='w-[85%] h-[90%] sm:h-[25rem] lg:w-[70%] bg-[#B18B5E] flex justify-center items-center m-auto'>
            <div className='h-[80%] my-5 w-[85%] border'>
              <div className='px-6 pt-8 flex flex-col items-start gap-6 text-white'>
                <h1>HOT DEAL FURNITURE</h1>
                <h1 className='text-[2.5rem]'>Live Furniture You Love</h1>
                <button className='bg-white p-4 px-8 mb-3 text-black font-semibold'>BUY NOW</button>
              </div>
            </div>
          </div>
      </div>


      <div className="rightside lg:w-[50%] md:h-[50%] max-h-[50%]">
        <img className='max-w-full' src={graysofa} alt="" />
      </div>
    </div>
  );
};

export default Deal;
