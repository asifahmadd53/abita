import React, { useState } from 'react';
import { blog1, blog2, blogimg1, blogimg2, blogimg3, blogimg4, blogimg5, img18, img22, left, right, sofaset } from '../../assets';
import Video from '../About/Video';
import { sofachair } from '../../assets';
import Text from './Text';
import { video2 } from '../../assets';
const Left = () => {
  const images = [blogimg3, blogimg4, blogimg5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='w-full md:w-[60%] h-auto bg-white'>
      <div className='w-[90%] md:w-[80%] lg:w-[90%] m-auto bg-[#F6F6F6] p-4'>
        {/* Image and content container */}
        <div className='relative'>
          <div className='mb-4'>
            <img className='w-full object-cover h-56 sm:h-80 lg:h-96 ' src={blogimg1} alt="" />
          </div>

          {/* Content section matching image width */}
          
          <Text/>
        </div>

        <div className='mb-4'>
          <Video img={blogimg2} video={video2} />
        </div>

       <Text/>

        <div className='relative overflow-hidden h-80 sm:h-96  '>
          <div className='flex transition-transform duration-500 ease-in-out w-full h-full' style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
            {images.map((image, index) => (
              <img
                key={index}
                className='w-full h-full flex-shrink-0 object-cover object-bottom'
                src={image}
                alt={`Image ${index}`}
              />
            ))}
          </div>
          <div
            onClick={handleScrollLeft}
            className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#B18B5E] cursor-pointer p-1 transition-all ease-in-out duration-500'
          >
            <img className='w-10' src={left} alt="Left Arrow" />
          </div>
          <div
            onClick={handleScrollRight}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#B18B5E] cursor-pointer p-1 transition-all ease-in-out duration-500'
          >
            <img className='w-10' src={right} alt="Right Arrow" />
          </div>
        </div>

       <Text/>
      </div>
    </div>
  );
};

export default Left;
