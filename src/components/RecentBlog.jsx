import React, { useState } from 'react'
import { blog1, blog2, blog3, blog5, img18, right, right2 } from '../assets'
import { Link } from 'react-router-dom'

const RecentBlog = () => {
  const [ isHover, setIsHover] = useState(false)

  return (
    <div className='w-full h-auto bg-[#F5F1E6] md:h-screen md:flex md:items-center md:justify-center md:flex-col mb-10 py-10'>
        <div className='flex flex-col items-center my-16'>
        <h1 className='bg-[#EAE2D2] w-32 text-center text-[#B18B5E]'>READ BLOGS</h1>
        <h1 className='text-center text-4xl font-semibold mt-4'>Recent Blogs</h1>
        </div>


        <div className='flex flex-col gap-12 items-center  justify-around sm:px-10 sm:flex-row'>

        <div className="card w-[90%] h-auto m-auto bg-white px-5 py-6 flex flex-col gap-3 md:flex-row sm:items-center justify-center">
        <div className='flex m-auto flex-col md:gap-5 item-center justify-center gap-3'>
        <h1 className='bg-[#F5F1E6] text-[#B18B5E] w-32 text-center p-1 rounded-xl'>Chair Design</h1>
        <p className='hover:text-[#B18B5E] transition-all ease-in-out duration-500 cursor-pointer flex gap-6'>By Alex Manie<span>07 jan, 2024</span></p>
        <h1 className='text-3xl font-semibold'>Arrangement That's Nearly Perfect.</h1>
        <Link to='blog'>
        <div className='w-14 h-14 rounded-full flex justify-center items-center bg-[#F5F1E6] hover:bg-[#B18B5E] transition-all duration-500 ease-in-out cursor-pointer'
        onMouseEnter={()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        >
        {isHover ? <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#FFFFFF"></path> </g></svg> : 
        <svg className='w-6 h-6'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#B18B5E"></path> </g></svg>


        }
        </div>
        </Link>
        </div>

        <div className='m-auto'>        
            <img className='h-96 w-[30rem] object-cover ' src={blog5} alt="" /></div>

        </div>

        <div className="card w-[90%] h-auto m-auto bg-white px-5 py-6 flex flex-col gap-3 md:flex-row sm:items-center justify-center">
        <div className='flex m-auto flex-col md:gap-5 item-center justify-center gap-3'>
        <h1 className='bg-[#F5F1E6] text-[#B18B5E] w-32 text-center p-1 rounded-xl'>Chair Design</h1>
        <p className='hover:text-[#B18B5E] transition-all ease-in-out duration-500 cursor-pointer flex gap-6'>By Alex Manie<span>07 jan, 2024</span></p>
        <h1 className='text-3xl font-semibold'>Arrangement That's Nearly Perfect.</h1>
        <Link to='/blog'>
        <div className='w-14 h-14 rounded-full flex justify-center items-center bg-[#F5F1E6] hover:bg-[#B18B5E] transition-all duration-500 ease-in-out cursor-pointer'
        onMouseEnter={()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        >
        {isHover ? <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#FFFFFF"></path> </g></svg> : 
        <svg className='w-6 h-6'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#B18B5E"></path> </g></svg>
        }
        </div>
        </Link>
        </div>

        <div className='m-auto'>        
            <img className='h-96 object-fit' src={blog2} alt="" /></div>

        </div>

        </div>
    </div>
  )
}

export default RecentBlog