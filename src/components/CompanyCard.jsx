import React from 'react'

const CompanyCard = ({ name, description, buttonText, color }) => {
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className="card flex flex-col items-start gap-10 p-6 h-72 ss:w-[30rem] sm:w-80 lg:w-[28rem]"
    >
      <h1 className='text-xl font-bold'>{name}</h1>
      <p>{description}</p>
      <button className='bg-transparent border-black border text-black py-2 px-4'><span>


        
      </span>
        {buttonText}
      </button>
    </div>
  )
}

export default CompanyCard
