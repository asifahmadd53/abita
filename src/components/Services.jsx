import React from 'react'
import { truck } from '../assets'
import { services } from '../constants'

const Services = () => {
  // Split services into two groups
  const firstGroup = services.slice(0, 2)
  const secondGroup = services.slice(2, 4)

  return (
    <div className='md:w-[90%] m-auto'>
      <div className='my-20 flex flex-wrap items-center justify-evenly gap-6'>
        {firstGroup.concat(secondGroup).map(({ img, h, text }, index) => (
          <div key={index} className='flex mb-6 items-center gap-6'>
            <img className='w-16' src={img} alt="" />
            <div>
              <h1 className='font-bold text-lg'>{h}</h1>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
