import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cart, wish, view, star1 } from '../assets';
import { products } from '../constants';
import { addToCart } from '../features/cartSlice';
import { addToFavourite } from '../features/favouriteSlice';
import { Link } from 'react-router-dom';

const Collections = () => {
    const [filter, setFilter] = useState('All Collections');

    const filteredCollections = products.filter(item => {
        if (filter === 'All Collections') return true;
        return item.details === filter;
    });

    const dispatch = useDispatch();

    const handleAddToCart = (id) => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    const handleAddToFavourite = (id) => {
        dispatch(addToFavourite({
            productId: id,
            quantity: 1
        }));
    }

    return (
        <div className='w-[90%]  h-auto mt-10 m-auto mb-32 overflow-x-hidden'>
            <h1 className='font-semibold mb-4 w-32 text-center bg-[#F3EEE7] text-[#B18B5E]'>THIS MONTH</h1>
            <h1 className=' text-4xl lg:text-6xl font-bold mb-8 '>Trendy Collection</h1>
            <div className=" space-x-4 mb-8">
                <button onClick={() => setFilter('All Collections')}
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
            <div className="w-full grid grid-cols-2 ss:flex ss:flex-wrap ss:justify-center md:justify-evenly gap-3 md:gap-5">
                {filteredCollections.map((product) => {
                    const { id, img, name, price, slug } = product;
                    return (
                        <div key={id} className="cursor-pointer card relative group ss:w-[260px] h-[350px] overflow-hidden  ">
                            <div className="relative w-full bg-[#F5F1E6] flex justify-center items-center h-72 max-h-[80%] gap-5">
                                <Link to={slug}>
                                    <img
                                        src={img}
                                        alt={name}
                                        className="object-cover hover:scale-105 transition-all ease-in-out duration-500"
                                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                                    />
                                </Link>
                                <div className="absolute z-30 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 justify-between p-1 px-4 items-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img onClick={() => handleAddToCart(id)}
                                        src={cart}
                                        alt="Cart"
                                        className="w-6 h-6 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                    />
                                    <img onClick={() => handleAddToFavourite(id)}
                                        src={wish}
                                        alt="Wish"
                                        className="w-6 h-6 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                    />
                                    <Link to={slug} className='flex-shrink-0'>
                                    <img
                                        src={view}
                                        alt="View"
                                        className="w-6 h-6 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                    />
                                    </Link>
                                </div>
                            </div>
                            <h2 className="mt-2 text-xl font-bold">{name}</h2>
                            <div className='flex gap-1 my-1'>
                                <img className='w-5' src={star1} alt="" />
                                <img className='w-5' src={star1} alt="" />
                                <img className='w-5' src={star1} alt="" />
                                <img className='w-5' src={star1} alt="" />
                            </div>
                            <p className="text-lg ">${price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Collections;
