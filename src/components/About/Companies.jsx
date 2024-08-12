import React from 'react'
import { companies } from '../../constants'
import CompanyCard from '../CompanyCard'

const Companies = () => {
  return (
    <div className='w-full h-auto md:h-screen flex'>
       <div className='w-[90%] m-auto items-center justify-center sm:justify-start md:justify-between flex flex-col gap-3 ss:flex-wrap ss:flex-row md:flex-nowrap sm:gap-10 my-10'>
          {companies.map((company, index) => (
            <CompanyCard
            key={index}
            name={company.name}
            description={company.p}
            buttonText={company.button}
            color={company.color}
          />
          ))}
        </div>
    </div>
  )
}

export default Companies
