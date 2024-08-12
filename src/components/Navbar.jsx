import React,{useEffect, useState} from 'react';
import { logo, circle, cart } from '../assets'; // Import together
import { navLinks } from '../constants';
import { Link,NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../features/menuslice';
import '../App.css'
const Navbar = () => {
    const dispatch = useDispatch()
    const handleOpenMenu = ()=>{
        dispatch(toggleStatusTab())
    }

    const [total, setTotal] = useState(0)
    const [favouriteTotal, setFavouriteTotal] = useState(0)

    const carts = useSelector(store => store.cart.items)
    const favourite = useSelector(store => store.favourite.favourites)


    useEffect(()=>{
        let total = 0
        carts.forEach(item => total += item.quantity)
        setTotal(total)
    },[carts])

    useEffect(()=>{
        let total = 0
        favourite.forEach(item => total += item.quantity)
        setFavouriteTotal(total)
    }, [favourite])

    
    
    return (
        <nav className='flex items-center justify-between shadow-md lg:justify-around w-full bg-white p-4 fixed z-50'>
            <Link to='home'>
            <div className='relative flex items-center gap-2'>
                <img className='relative w-10' src={circle} alt="Circle" />
                <img className='absolute w-10 top-0 left-0' src={logo} alt="Logo" />
                <h1 className='text-lg head uppercase font-extrabold md:text-xl'>ABODE</h1>
            </div>
            </Link>
            <ul className='md:flex gap-6 hidden relative lg:-left-12 xl:-left-16'>
            {navLinks.map(({id,title},index)=>{
                   return( 
                   <li className='navlinks hover:text-[#B18B5E] transition-all duration-500 ease-in-out' key={index}><Link to={id}>{title}</Link></li>
                )
                })}
            </ul>

            <div className='gap-4 items-center flex'>
            <form action="/search" className=" max-w-xl py-2 pl-6 rounded-full bg-gray-50 border hidden lg:flex focus-within:border-gray-300">
                <input type="text" placeholder="Search anything" className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" />
                <button type="submit" className="flex flex-row items-center justify-center px-2 rounded-full w-12 h-11 border bg-[#b18b5e] text-white  border-transparent  mr-1">
                <svg  className='h-5 w-5'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="51.7" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="51.7" d="M338.29 338.29L448 448"/></svg>
                </button>
                
            </form>
            <div className='flex items-center gap-4'>
            <Link to='favourites'>
            <div className="relative h-8 w-8 ">
  <svg className="h-full w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="black" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/>
  </svg>
  <span className="absolute left-[1.1rem] top-0 right-0 bg-[#B18B5E] w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">{favouriteTotal}</span>
</div>
            </Link>

              <Link to='cart'>
              <div className='h-8 w-8 relative '>
               <svg className='h-full w-full cursor-pointer'   xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"/>
               </svg>
               <span className="absolute left-[1.1rem] top-0 right-0 bg-[#B18B5E] w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">{total}</span>
               </div>
              </Link>
                <svg onClick={handleOpenMenu} className='h-10 w-10 cursor-pointer'   xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 7.5h17M3.5 12h14m-14 4.5h17"/></svg>
                </div>
                </div>
          
            
        </nav>
    );
};

export default Navbar;
