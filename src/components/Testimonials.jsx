import React, { useRef } from 'react';
import { room, left2, right2, star, left } from '../assets';
import { testimonials } from '../constants';

const Testimonials = () => {

  const refSlider = useRef()

  const handleleft = ()=>{
    refSlider.current.scrollBy({ left: 450, behavior: "smooth" });
  }
 const handleright = ()=>{
    refSlider.current.scrollBy({left : -450, behavior: "smooth"})
  }

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <img className='w-full h-full object-cover' src={room} alt="Room" />
      <div className='absolute inset-0 bg-gradient-to-t from-[#000000ac] to-[#00000089]' />
      <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-4'>
        
        <div className='text-xl font-bold mb-4'>Testimonials</div>
        <div className='text-lg mb-8'>Client Feedback</div>
        <div className='flex flex-col items-center justify-between w-full md:max-w-[82rem]'>
          
          <div ref={refSlider} className="cards flex overflow-x-auto md:overflow-hidden slider w-full h-full space-x-4 gap-20 ml-3 md:ml-0">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="card min-w-[21rem] bg-white p-4 text-center text-black flex flex-col gap-2 items-start px-10  py-6 ml-2">
                <img className='w-12 h-10' src={testimonial.ratingImg} alt="Rating" />
                <h1 className='text-xl font-semibold'>{testimonial.name}</h1>
                <p className='text-lg'>{testimonial.feedback}</p>
                <p className='text-[.85rem] text-start'>{testimonial.description}</p>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center mt-10 gap-4'>
            <img onClick={handleleft} className="w-12 h-12 border-yellow-600 border rounded-full cursor-pointer" src={left2} alt="Left" />
            <img onClick={handleright} className="w-12 h-12 rounded-full border-yellow-600 border cursor-pointer text-white" src={right2} alt="Right" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
