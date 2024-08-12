import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants';
import { useDispatch } from 'react-redux';
import { changeQuantity, addToCart } from '../features/cartSlice';
import { addToFavourite } from '../features/favouriteSlice';
import { star1 } from '../assets';

const Details = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [details, setDetails] = useState(null);
    const [quantity, setQuantity] = useState(1); 

    useEffect(() => {
        const product = products.find(product => product.slug === slug);
        if (product) {
            setDetails(product);
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    if (!details) {
        return <div>Loading...</div>; // Optional: Add a loading state
    }

    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            dispatch(changeQuantity({ productId: details.id, quantity: newQuantity }));
            return newQuantity;
        });
    };

    const handleDecreaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(prevQuantity - 1, 1); // Prevent quantity from going below 1
            dispatch(changeQuantity({ productId: details.id, quantity: newQuantity }));
            return newQuantity;
        });
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ productId: details.id, quantity }));
    };

    const handleAddToFavourite = ()=>{
        dispatch(addToFavourite({
            productId: details.id,
            quantity:quantity
        }))
    }

    return (
        <>
            <Title heading='Product Details' text='Welcome to product detail section'/>
            <div className='w-[90%] m-auto'>
                <div className='md:flex md:gap-20 md:items-start'>
                    <div className='bg-[#F5F1E6] w-full mt-16 flex items-center justify-center xs:[70%] ss:[w-50%] sm:w-[50%] m-auto md:w-[40%] md:flex-col'>
                        <img src={details.img} alt={details.name} />
                    </div>
                    <section className='md:w-[60%] mt-10'>
                        <div>
                            <h1 className='text-lg bg-[#EB753B] text-white w-32 text-center font-semibold'>Construction</h1>
                            <div className='mt-3 flex gap-1'>
                                <img className='w-6' src={star1} alt="" />
                                <img className='w-6' src={star1} alt="" />
                                <img className='w-6' src={star1} alt="" />
                            </div>
                            <h1 className='text-lg md:text-xl '>10 Reviews</h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-2xl font-semibold'>{details.name}</h1>
                            <h1 className='text-3xl md:text-5xl'>${details.price}</h1>
                            <p className='text-lg'>{details.description}</p>
                        </div>
                        <div className='flex gap-10 mt-10'>
                            <div className='flex gap-4 border w-32 justify-around p-2 rounded-full items-center'>
                                <svg onClick={handleDecreaseQuantity} className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <h1>{quantity}</h1>
                                <svg onClick={handleIncreaseQuantity} className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#0F0F0F"></path>
                                </svg>
                            </div>
                            <button onClick={handleAddToCart} className='bg-[#BD9C76] text-white p-5  rounded-full w-44'>ADD TO CART</button>
                            <button><svg onClick={handleAddToFavourite} className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                        </div>
                    </section>
                </div>
                <div className='mt-32 text-sm md:text-base'>
                    <p>In marketing a product is an object or system made available for consumer use it is anything that can be offered to a market to the desire or need of a retailing, products are often referred to as merchandise, and in manufacturing, products are bought as materials and then sold as finished goods. A service regarded to as a type of product. Commodities are usually raw materials metals and agricultural products, but a commodity can also be anything wide the open market. In project management, the formal definition of the project deliverables

A product can be classified as tangible or intangible. A tangible product is a physical object that can be perceived by touch building, vehicle, gadget, An intangible product is a product that can only be perceived indirectly such as an insurance policy. can be broadly classified under intangible be durable or non durable. A product line is "a group of products that are closely either because they function in a similar manner, are sold to the same customergroups.</p>
                </div>
            </div>
        </>
    );
};

export default Details;
