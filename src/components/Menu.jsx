import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { logo } from '../assets';
import { NavLink } from 'react-router-dom';
import { contactinfo, navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleStatusTab } from '../features/menuslice';

const Menu = () => {
    
    const statusTab = useSelector(state => state.menu.statusTab);
    const dispatch = useDispatch();
    const menuRef = useRef(null);

    const closeMenuTab = () => {
        dispatch(toggleStatusTab());
    };

    return (
        <>
            {statusTab && (
                <div 
                    className="fixed inset-0 bg-[#000000cb]  z-40" 
                    onClick={closeMenuTab}
                ></div>
            )}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 bg-shadow-2xl w-80 md:w-[25rem] h-screen overflow-y-auto transform transition-all duration-700 bg-[#191919] z-50 border-l-4 border-[#B18B5E]
                ${statusTab ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className='flex items-center justify-between p-3 px-6'>
                    <div className='relative flex items-center gap-2'>
                        <div className='bg-[#B18B5E] rounded-full h-11 w-11 items-center flex justify-center'>
                            <img className='absolute w-10 top-0' src={logo} alt="Logo" />
                        </div>
                        <h1 className='text-lg logo text-white'>Abita</h1>
                    </div>
                    <div className='bg-[#B18B5E] rounded-full h-11 w-11 items-center flex justify-center'>
                        <svg onClick={closeMenuTab} className='w-8 h-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" strokeLinecap="round" d="m6 6l12 12m0-12L6 18"/>
                        </svg>
                    </div>
                </div>
                <hr className="w-[90%] m-auto border-t border-neutral-700 outline-none mt-3" />

                <div className="relative p-3 rounded-lg w-full max-w-lg">
                <input
  type="text"
  className="rounded-md p-3 w-full bg-transparent border border-transparent outline-none text-white focus:border-b-white focus:outline-none focus:ring-0"
  placeholder="What are you searching for"
/>

                    <button type="submit" className="absolute right-6 top-6">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="51.7" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/>
                            <path fill="none" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="51.7" d="M338.29 338.29L448 448"/>
                        </svg>
                    </button>
                </div>
                <hr className="w-[90%] m-auto border-t border-neutral-700 outline-none mt-3" />

                <ul className='flex md:hidden gap-4 flex-col items-start px-6 text-white'>
                    {navLinks.map(({id,title},index)=>{
                        return( 
                            <>
                                <li className='mt-3 font-semibold' key={index}><Link onClick={closeMenuTab} to={id}>{title}</Link></li>
                                <hr className="w-full m-auto border-t border-neutral-700 outline-none " />
                            </>
                        )
                    })}
                </ul>

                <h1 className='text-white text-xl p-4 font-bold'>Contact info</h1>
                <ul>
                    {contactinfo.map(({img,info}, index)=>{
                        return (
                            <li className='flex items-center gap-5 mb-6 px-6 hover:text-[#B18B5E] cursor-pointer transition-all ease-in-out duration-500'>
                                <img className='border border-neutral-700 hover:bg-[#B18B5E] cursor-pointer transition-all ease-in-out duration-500 p-4 rounded-full ' src={img} alt="" />
                                <h1 className='text-white hover:text-[#B18B5E] cursor-pointer transition-all ease-in-out duration-500'>{info}</h1>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Menu;
