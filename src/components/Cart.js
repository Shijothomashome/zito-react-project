
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
import { addItem, clearCart, removeItem, removeFullItem } from "../utils/cartSlice";
import { extractName } from "../utils/helper";
import dummy_food_image from "../images/dummy_food_image.png"

const Cart = () => {
    // subscribing to the items of cart slice of store
    const cartItems = useSelector(store => store.cart.items)



    const dispatch = useDispatch()

    // modifying / dispatching action
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    // adding item to the cartSlice store
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    // removing single quantity from the cartSlice store
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    // removing full quantity from the cartSlice store
    const handleRemoveFullItem = (item) => {
        dispatch(removeFullItem(item))
    }
    

    return (

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {console.log(cartItems)}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <ul className="divide-y divide-gray-200">
                    {cartItems.map((item, index) => (

                        <li key={index} className="py-4 flex flex-col sm:flex-row justify-between items-center">

                            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start ">
                                <div className="relative">
                                    {item.imageId ? (<img className="w-20 h-20 object-cover rounded-lg " src={`${IMG_CDN_URL}${item.imageId}`} alt={extractName(item.name)} />
                                    ) : (
                                        <img className="w-20 h-20 object-cover rounded-lg " src={dummy_food_image} alt={extractName(item.name)} />
                                    )}
                                    <i class="fa-solid fa-xmark absolute text-white -top-1 -left-1 bg-[#fb542b] text-small rounded-3xl p-px" title="Remove item" onClick={() => handleRemoveFullItem(item)}></i>
                                </div>

                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{extractName(item.name)}</h3>
                                    <p className="text-gray-500">{item.category}</p>
                                    <div className="inline-flex items-center px-3 py-1 border rounded">
                                        <button className="relative group">
                                            <i className="fa-solid fa-minus mr-2 text-red-400" onClick={() => handleRemoveItem(item)}></i>
                                            <span className="absolute bg-gray-800 text-white py-1 px-2 rounded text-xs bottom-8 left-0 transition-opacity opacity-0 group-hover:opacity-100">Remove</span>
                                        </button>
                                        <p className="mr-2">{item.quantityCount}</p>
                                        <button className="relative group">
                                            <i className="fa-solid fa-plus text-green-400" onClick={() => handleAddItem(item)}></i>
                                            <span className="absolute bg-gray-800 text-white py-1 px-2 rounded text-xs bottom-8 left-0 transition-opacity opacity-0 group-hover:opacity-100">Add</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <span className="text-lg font-semibold"> {`${item.quantityCount} x ${((item.price / 200) || (item.defaultPrice / 200)).toFixed(2)} = \u20B9 ${((item.price / 200) || (item.defaultPrice / 200)) * item.quantityCount.toFixed(2)}`}</span>

                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 flex justify-between items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => handleClearCart()}>
                        Clear cart
                    </button>
                    <div>
                        <span className="text-lg font-semibold">Total: &#8377; {cartItems.reduce((total, item) => total + ((item.price || item.defaultPrice) / 200) * item.quantityCount, 0).toFixed(2)}</span>
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


