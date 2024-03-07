
/**
 * SUBSCRIBING
 * 
 * useSelector( store => store.cart.items ) -- subscribing to the items of cart slice of store
 * useSelector( store => store.cart ) -- subscribing to the cart slice of store
 * useSelector( store => store ) -- subscribing to whole store 
 * */
// 

import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { IMG_CDN_URL } from "../../constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // subscribing to the items of cart slice of store
    const cartItems = useSelector(store => store.cart.items)

    // modifying/ dispatching action
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cartItems.map((item) => (
                    <div className="border rounded-lg overflow-hidden shadow-lg" key={item.id}>
                        <img className="w-full h-64 object-cover" src={`${IMG_CDN_URL}${item.imageId}`} alt={item.name} />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600 mb-2">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-end">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-2" onClick={()=> handleClearCart()}>
                    Clear cart
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Checkout
                </button>

            </div>
        </div>
    );
};

export default Cart;


