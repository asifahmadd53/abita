import React, { useEffect, useMemo, useState } from 'react';
import { bg, img2, img11, img6, circle, img4, img3, img24, img25, img17, img23, img26 } from '../assets';
import Services from './Services';
import Off from './Off';
import Products from './Products';
import Deal from './Deal';
import Collections from './Collections';
import Testimonials from './Testimonials';
import RecentBlog from './RecentBlog';
import Footer from './Footer';
import Companies from './companies';
import { Link } from 'react-router-dom';

const images = [img26, img3, img23];



const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  
  return (
    <>
    <div className='relative h-[130vh]  md:h-auto w-full max-w-full min-w-full overflow-hidden'>
      
      <img className='h-full w-full object-cover' src={bg} alt="Background" />

      <div className='flex flex-col md:flex-row   absolute inset-0 pt-20 md:pt-52  md:justify-around px-5 md:px-10 w-full'>
        <div className='left text-white  pt-10  ss:pl-16 sm:pl-32 md:pl-12 logo  w-full'>
          <h5 className='font-semibold text-center p-2 max-w-[10rem] bg-[#EBE5D9] text-[#B18B5E] whitespace-normal'>NEW ARRIVAL...</h5>
          <h1 className='text-5xl mt-3 font-bold text-[#161616] lg:text-7xl logo'>Elevate</h1>
          <h1 className='text-5xl font-bold text-[#161616]  lg:text-7xl logo'>Your Home Aesthetics</h1>
          <p className='mt-4 max-w-md text-[#161616] text-start logo'>
            A furniture e-commerce company operating in the digital space, offering a wide range of furniture.
          </p>
          <div className='mt-5 flex gap-6'>
            <Link to='shop'><button className='uppercase bg-[#B18B5E] p-2 md:p-4 border border-[#B18B5E] hover:bg-transparent hover:border-[#B18B5E] transition-all ease-in-out hover:text-[#B18B5E] duration-500 px-9 whitespace-nowrap py-4 md:w-44'>
              Buy Now
            </button></Link>
            <button className='uppercase md:p-4 p-2 whitespace-nowrap border border-[#B18B5E] hover:bg-[#B18B5E] transition-all ease-in-out duration-500 text-[#B18B5E] hover:text-white py-4 md:w-44'>
              View Details
            </button>
          </div>
        </div>
        <div className='relative flex justify-center mt-10'>
         
          <div className='relative w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] flex lg:w-[40rem] lg:h-[40rem] items-center justify-center'>
            
            
            <div className='hidden md:block w-[22rem] h-[22rem] lg:w-[28rem] lg:h-[28rem] rounded-full md:relative md:bottom-20 bg-[#B18B5E]'>

            </div>


            {/* Rotating images */}
            <div className='flex flex-col md:flex-row'>
            <img
              className='absolute z-30 inset-0 w-full h-full object-cover cursor-pointer'
              src={images[currentIndex]}
              alt="Hero"
              onClick={handleImageClick}
            />
            
            {/* Navigation dots */}
            <div className='flex gap-2 md:flex-col relative top-32 md:top-0 md:left-10'>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 z-40 rounded-full ${currentIndex === index ? 'bg-[#B18B5E]' : 'bg-slate-900'}`}
                  onClick={() => handleButtonClick(index)}
                ></button>
              ))}
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <Off/>
    <Products/>
    <Deal/>
    <Collections/>
    <Testimonials/>
    <RecentBlog/>
    <Companies/> 
    
    </>

  );
};

export default Hero;
