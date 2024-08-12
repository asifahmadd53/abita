import React from 'react'
import { companies, logos } from '../constants';
import CompanyCard from './CompanyCard';

const Companies = () => {
    return (
      <div className='w-full h-auto'>
        <div className='w-[90%] m-auto items-center justify-center sm:justify-start md:justify-between flex flex-col gap-3 ss:flex-wrap ss:flex-row md:flex-nowrap sm:gap-10'>
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
        <div className='flex items-center justify-center flex-col sm:flex-row sm:flex-wrap w-[50%] m-auto ustify-center sm:justify-start md:justify-between  gap-3 ss:flex-wrap ss:flex-row md:flex-nowrap sm:gap-10 py-10 mt-12'>
        {
                logos.map(({logo})=>{
                    return (
                        <div>
                            <img className='w-20' src={logo} alt="" />
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  };

export default Companies