
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
import { extractName } from "../utils/helper";

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
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <ul className="divide-y divide-gray-200">
                    {cartItems.map((item, index) => (

                        <li key={index} className="py-4 flex flex-col sm:flex-row justify-between items-center">

                            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                                <img className="w-20 h-20 object-cover rounded-lg " src={`${IMG_CDN_URL}${item.imageId}`} alt={extractName(item.name)} />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{extractName(item.name)}</h3>
                                    <p className="text-gray-500">{item.category}</p>
                                </div>
                            </div>
                            <div>
                                <span className="text-lg font-semibold">&#8377; {((item.price / 200) || (item.defaultPrice / 200)).toFixed(2)}</span>
                                {console.log(item.price)}
                                {console.log(item.defaultPrice)}

                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 flex justify-between items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => handleClearCart()}>
                        Clear cart
                    </button>
                    <div>
                        <span className="text-lg font-semibold">Total: &#8377; {cartItems.reduce((total, item) => total + ((item.price || item.defaultPrice) / 200), 0).toFixed(2)}</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;


