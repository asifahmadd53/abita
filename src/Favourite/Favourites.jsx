import React from 'react';
import Title from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../constants';
import { addToCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Favourites = () => {
    const favouriteItems = useSelector(state => state.favourite.favourites) || []; 
    const dispatch = useDispatch();

    const favouriteDetails = favouriteItems.map(fav => {
        return products.find(product => product.id === fav.productId);
    });

    const handleAddToCart = (id) => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    return (
        <>
            <Title 
                heading='Your Favourite Products'
                text='Welcome to Favourite products section'
            />
            
            <div className="p-1 flex flex-wrap items-center justify-center">
                {favouriteDetails.map((product, index) => (
                    product && (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 m-4 max-w-xs relative">
                            <div className="relative overflow-hidden">
                                <img className="object-cover w-full h-48" src={product.img} alt={product.name} />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Link to={`${product.slug}`}>
                                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                                            View Product
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">{product.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-900 font-bold text-lg">${product.price}</span>
                                <button 
                                    onClick={() => handleAddToCart(product.id)} 
                                    className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </>
    );
};

export default Favourites;
