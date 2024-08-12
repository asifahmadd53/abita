import React from 'react';

const Tags = () => {
  return (
    <div className='my-16 w-[90%] p-5 bg-[#F6F6F6] m-auto'>
      <h1 className='text-2xl font-semibold'>Tags</h1>
      <div className="text-sm text-slate-600 lg:max-w-xs p-4 leading-6 flex flex-row flex-wrap gap-2">
        <span className='bg-white border border-black w-24 h-8 hover:bg-[#B18B5E] transition-all duration-500 ease-in-out text-center hover:text-white hover:cursor-pointer' 
             >Technology</span>
        <span className='bg-white border border-black w-24 h-8 hover:bg-[#B18B5E] transition-all duration-500 ease-in-out text-center hover:text-white hover:cursor-pointer' 
             >Food</span>
        <span className='bg-white border border-black w-24 h-8 hover:bg-[#B18B5E] transition-all duration-500 ease-in-out text-center hover:text-white hover:cursor-pointer' 
              >Personality</span>
        <span className='bg-white border border-black w-24 h-8 hover:bg-[#B18B5E] transition-all duration-500 ease-in-out text-center hover:text-white hover:cursor-pointer' 
              >Nature</span>
        <span className='bg-white border border-black w-24 h-8 hover:bg-[#B18B5E] transition-all duration-500 ease-in-out text-center' 
             >Life Style</span>
        <span className='bg-white border border-black w-24 h-8 hover:bg-[#B18B5E] transition-all duration-500 ease-in-out text-center hover:text-white hover:cursor-pointer' 
            >Travel</span>
      </div>
    </div>
  );
}

export default Tags;
