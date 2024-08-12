import React from 'react'
// import { off } from '../constants';
import { products } from '../constants'
import { Link } from 'react-router-dom'

const Off = () => {
  
  const sixth = products[6]
  const seventh = products[9]

  const off = [sixth, seventh];

  return (
    <div className='w-full h-screen md:h-auto'>
        <div className="cards h-96 md:flex md:items-center md:justify-evenly  px-2 lg:px-12 md:gap-5">
        {off.map((product, index) => {
          const {id, img, name, slug, offf}  = product
          return (
            <div
              key={index}
              className="card h-full sm:w-[80%] bg-[#EBF9FD] pl-6 py-4 flex items-center gap-16 m-auto justify-between mb-6 overflow-hidden md:mx-10"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-xl text-[#B18B5E] font-bold whitespace-nowrap">{offf}</h2>
                <h1 className="text-2xl font-semibold ">{name}</h1>
                <Link to={slug}>
                <button className="bg-[#B18B5E] text-white px-4 py-4 w-40 text-xl flex items-center gap-1">Buy Now <span><svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span></button>
                </Link>
              </div>
              <div className='w-80'>
              <img className="w-full" src={img} alt="" />
              </div>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Off