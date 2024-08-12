import React from 'react'
import { data } from '../../constants'
import { blog1, blog2, blog3, blog4, blog5, blogimg1, blogimg2, blogimg3, blogimg4, blogimg5 } from '../../assets'
import Tags from './Tags';

const cardData = [
  {
    id: 1,
    image: blog4,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    id: 2,
    image: blog3,
    title: 'Top Trends in Modern Furniture Design',
    description: 'Explore the latest trends in modern furniture design and how they can transform your living space.',
  },
  {
    id: 3,
    image: blogimg3,
    title: 'How to Choose the Perfect Sofa for Your Home',
    description: 'A guide to selecting the ideal sofa that matches your style, comfort needs, and living space.',
  },
  {
    id: 4,
    image: blogimg4,
    title: 'DIY Furniture Restoration Tips',
    description: 'Learn easy and effective techniques for restoring and refreshing old furniture pieces to give them new life.',
  },
  {
    id: 5,
    image: blogimg5,
    title: 'DIY Furniture Restoration Tips',
    description: 'Learn easy and effective techniques for restoring and refreshing old furniture pieces to give them new life.',
  }
];

const Right = () => {
  return (
    <div className='md:w-[40%]'>
        
      <div className=''>   
        <ul className="max-w-md divide-y divide-gray-200  bg-[#F6F6F6] flex flex-col items-center justify-center mt-10 mb-10 p-5">
          {data.map(({ id, name, value }) => {
            return (
              <li key={id} className="pb-3 sm:pb-4 px-6 shadow-lg mb-6 w-[90%] border ">
                <div className="flex items-center space-x-4 rtl:space-x-reverse pt-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white flex "><span><svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" fill="#000000"></circle> </g></svg></span>
                      {name}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {value}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
  {cardData.map(({ id, image, title, description }) => (
    <a key={id} href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  ss:w-[30rem] hover">
      <img className="object-cover rounded-t-lg max-h-48 max-w-48 transition-transform duration-300" src={image} alt={title} />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </a>
  ))}
</div>

<Tags/>

    </div>
  )
}

export default Right
