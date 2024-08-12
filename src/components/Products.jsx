import React, { useRef } from "react";
import { cart, img5, left, right, star, star1, view, wish } from "../assets";
import { products } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToFavourite } from "../features/favouriteSlice";
import { Link } from "react-router-dom";

const Products = () => {
    const sliderRef = useRef(null);

    const handleLeft = () => {
        sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    };
    const handleRight = () => {
        sliderRef.current.scrollBy({ left: -425, behavior: "smooth" });
    };

    const dispatch = useDispatch();

    const handleAddToCart = (id) => {
        console.log(`Dispatching addToCart for product ${id}`);
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    const handleAddToFavourite = (id)=>{
      dispatch(addToFavourite({
        productId: id,
        quantity: 1
      }))
    }
    

    return (
        <div className="w-full h-screen mt-32">
            <div className="flex items-center justify-center">
            <h1 className="text-center bg-[#F3EEE7] text-[#B18B5E] font-bold mb-4 w-28 h-7 flex justify-center items-center px-1">TOP SALE</h1>
            </div>
            <h1 className="text-center text-4xl md:text-5xl my-5 md:my-10 mb-8 logo font-extrabold">Featured Products</h1>
            <div className="cards w-[85%] mx-auto relative ">
                <div className="absolute top-1/2 -left-2 md:-left-5 transform -translate-y-1/2 z-50 ">
                    <img onClick={handleLeft} className="w-10 bg-white h-10 md:w-12 md:h-12 rounded-full cursor-pointer" src={left} alt="Left" />
                </div>
                <div onClick={handleRight} className="absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 z-50">
                    <img className="w-10 bg-white h-10 rounded-full cursor-pointer md:w-12 md:h-12" src={right} alt="Right" />
                </div>
                <div ref={sliderRef} className="flex gap-10 md:gap-1 overflow-x-auto p-4 md:overflow-hidden slider">
                    {products.map((product) => {
                        const { id, img, name, price, slug } = product;
                        return (
                            <div
                                key={id}
                                className="cursor-pointer card min-h-96 max-w-[24rem] flex-shrink-0 relative group ml-2 md:ml-0 mr-4"
                            >
                                <div className="relative w-80 md:w-96 h-[22rem]  bg-[#F5F1E6] ml-5">
                                <Link to={slug} className="flex-shrink-0 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="object-cover hover:scale-105 transition-all ease-in-out duration-500 min-h-80 max-w-[70%] "
                                    />
                                    </Link>
                                    <div className="absolute z-30 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-5 justify-between p-2 px-6 w-50 items-center md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                                        <img onClick={() => handleAddToCart(id)}
                                            src={cart}
                                            alt="Cart"
                                            className="w-8 h-8 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                        />
                                        <img onClick={()=> {handleAddToFavourite(id)}}
                                            src={wish}
                                            alt="Wish"
                                            className="w-8 h-8 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                        />
                                        <Link to={slug} className="flex-shrink-0">
                                        <img
                                            src={view}
                                            alt="View"
                                            className="w-8 h-8 p-1 cursor-pointer bg-[#B18B5E] rounded-full"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <h2 className="mt-2 relative right-4 md:right-0 text-xl font-semibold mb-2 ">{name}</h2>
                                <div className="flex gap-1 mb-2 relative right-4 md:right-0">
                                <img className="w-5" src={star1} alt="" />
                                <img className="w-5" src={star1} alt="" />
                                <img className="w-5" src={star1} alt="" />
                                <img className="w-5" src={star1} alt="" />
                                
                                </div>
                                <p className="text-lg text-[#B18B5E] relative right-4 md:right-0">USD {price}</p>
                            </div>
                        
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
