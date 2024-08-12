import React from 'react';
import Title from '../Title';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items) || []; // Ensure items is correctly retrieved

    return (
        <>
            <Title 
                heading='Cart'
                text='Welcome to Cart Section'
            />
            <div className="w-full h-screen p-4">
                <div className="md:w-[80%] m-auto overflow-x-auto h-[30rem]">
                    <table className="min-w-full border-collapse m-auto">
                        <thead>
                            <tr className="bg-white ">
                                <th className="border p-4 text-center">Images</th>
                                <th className="border p-4 text-center">Products</th>
                                <th className="border p-4 text-center">Unit Price</th>
                                <th className="border p-4 text-center">Quantity</th>
                                <th className="border p-4 text-center">Total</th>
                                <th className="border p-4 text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <CartItems key={item.productId} data={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cart;
