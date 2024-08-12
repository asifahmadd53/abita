import React from 'react';
import { titleimg, titleimg2, titleimg3 } from '../assets'; // Make sure this path is correct


const Title = ({ heading, text }) => {
  return (
    <div className='w-full h-72 md:h-[24rem] relative'>
   
      <div className='absolute inset-0'>
        <img 
          src={titleimg2} 
          alt="Title" 
          className='object-cover w-full h-full object-top md:object-center' 
        />
  
        <div className='absolute inset-0  bg-gradient-to-r from-[#000000ba] to-[#0000004f]' />
      </div>
      

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white '>
        <h1 className='text-4xl font-bold mb-5 mt-10 md:text-6xl'>{heading}</h1>
        <p className='text-lg mt-3'>{text}</p>
      </div>
    </div>
  );
};

export default Title;
