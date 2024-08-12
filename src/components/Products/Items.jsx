import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart, wish, view } from '../../assets';
import { products } from '../../constants';
import Title from '../Title';
import { addToCart } from '../../features/cartSlice';
import { addToFavourite } from '../../features/favouriteSlice';
import { Link } from 'react-router-dom';

const Items = () => {
    const [filter, setFilter] = useState('All Collections');

    const dispatch = useDispatch();

    const filteredCollections = products.filter(item => {
        if (filter === 'All Collections') return true;
        return item.details === filter;
    });

    

    const handleAddToCart = (id) => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    const handleAddToFavourite = (id)=>{
        dispatch(addToFavourite({
            productId:id,
            quantity:1
        }))
    }

    return (
        <>
            <Title
                heading='Products'
                text='Home > Products'
            />
            <div className='w-full h-auto mt-10'>
                <div className='w-full flex flex-col items-center gap-6 justify-center'>
                <h1 className='text-center bg-[#EBE5D9] w-32 font-bold mb-4 text-[#B18B5E]'>THIS MONTH</h1>
                <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8'>Trendy Collection</h1>
                </div>
                <div className="flex justify-center md:justify-end md:items-end space-x-4 mb-8 w-[80%] m-auto whitespace-nowrap">
                    <div className='md:flex md:items-center gap-7'>
                        <h1 className='flex  items-center my-4 gap-2 md:pb-7'>
                            <span>
                                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 4V10M19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14M19 14V20M12 4V16M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16ZM5 8V20M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
                                </svg>
                            </span>
                            Filters
                        </h1>
                        <div className=" space-x-4 mb-8">
                <button  onClick={() => setFilter('All Collections')}
                
                className={`p-2 ${filter === 'All Collections' ? 'border-b-2 border-[#B18B5E]' : ''}`}>All Collections</button>
                <button
                    onClick={() => setFilter('New in')}
                    className={`p-2  ${filter === 'New in' ? 'border-b-2 border-[#B18B5E]' : ''}`}
                >
                    New in
                </button>
                <button
                    onClick={() => setFilter('Top rated')}
                    className={`p-2  ${filter === 'Top rated' ? 'border-b-2 border-[#B18B5E]' : ''}`}
                >
                    Top Rated
                </button>
            </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                    {filteredCollections.map((product) => {
                        const { id, img, name, price,slug} = product;
                        return (
                           
                            <div key={id} className="cursor-pointer card flex-shrink-0 relative group max-w-xs w-[35rem] border border-[#D1C8B7] h-[350px]">
                                <div className="relative w-full bg-white flex justify-center items-center h-72"
                                    style={{ maxHeight: '80%' }}>
                                    <Link className='' to={slug}>
                                    <img
                                        src={img}
                                        alt={name}
                                        className="object-cover hover:scale-105 transition-all ease-in-out duration-500"
                                        style={{ maxHeight: '90%', maxWidth: '90%' }}
                                    /></Link>
                                    <div className="absolute z-30 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 justify-between p-1 px-4 items-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <img onClick={() => handleAddToCart(id)}
                                            src={cart}
                                            alt="Cart"
                                            className="w-8 h-8 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                        />
                                        <img onClick={()=> handleAddToFavourite(id)}
                                            src={wish}
                                            alt="Wish"
                                            className="w-8 h-8 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                        />
                                        <Link to={slug} className='flex-shrink-0'>
                                        <img
                                            src={view}
                                            alt="View"
                                            className="w-8 h-8 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <h2 className="mt-2 text-center">{name}</h2>
                                <p className="text-lg text-center">USD {price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Items;
