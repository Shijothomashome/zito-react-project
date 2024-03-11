
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
import empty_cart_image from "../images/empty_cart.png"
import { Link } from "react-router-dom";

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

        <div className="py-4  px-4 sm:px-6 lg:px-8  lg:mb-0 bg-gray-100">
                <h2 className="text-xl font-bold mb-4 text-center sans-serif text-gray-600 underline ">My Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="flex lg:flex-row flex-col gap-10 lg:gap-3 justify-center items-center">
                        <img className="w-2/4 " src={empty_cart_image} alt="cart is empty image" />
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <p className="font-bold">Your cart is empty</p>
                            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                <Link to="/">Go To Purchase</Link>
                            </button>
                        </div>
                    </div>) : (
                    <div className="flex flex-col  lg:flex-row">
                        <ul className="divide-y divide-gray-300 bg-white border  rounded py-2 px-6 sm:w-4/5 mx-auto lg:w-1/2 lg:mb-10">
                            {cartItems.map((item, index) => (

                                <li key={index} className="py-4 flex flex-col sm:flex-row justify-between items-center">

                                    <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start ">
                                        <div className="relative">
                                            {item.imageId ? (<img className="w-20 h-20 object-cover rounded-lg " src={`${IMG_CDN_URL}${item.imageId}`} alt={extractName(item.name)} />
                                            ) : (
                                                <img className="w-20 h-20 object-cover rounded-lg " src={dummy_food_image} alt={extractName(item.name)} />
                                            )}
                                            <i class="fa-solid fa-xmark absolute text-white -top-1 -left-1 bg-[#fb542b] text-small rounded-3xl p-px cursor-pointer" title="Remove item" onClick={() => handleRemoveFullItem(item)}></i>
                                        </div>

                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{extractName(item.name)}</h3>
                                            <p className="text-gray-500">{item.category}</p>
                                            <div className="flex justify-center items-center sm:w-20 w-auto ">
                                                <div className="inline-flex items-center my-2 px-3 py-1 border border-gray-500 bg-white rounded">
                                                    <button className="relative group">
                                                        <i className="fa-solid fa-minus mr-2 text-gray-500" onClick={() => handleRemoveItem(item)}></i>
                                                        <span className="absolute bg-gray-800 text-white py-1 px-2 rounded text-xs bottom-8 left-0 transition-opacity opacity-0 group-hover:opacity-100">Remove</span>
                                                    </button>
                                                    <p className="mr-2">{item.quantityCount}</p>
                                                    <button className="relative group">
                                                        <i className="fa-solid fa-plus text-green-800" onClick={() => handleAddItem(item)}></i>
                                                        <span className="absolute bg-gray-800 text-white py-1 px-2 rounded text-xs bottom-8 left-0 transition-opacity opacity-0 group-hover:opacity-100">Add</span>
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-base  text-gray-600 sans-serif"> {`${item.quantityCount} x ${((item.price / 200) || (item.defaultPrice / 200)).toFixed(2)} = \u20B9 ${((item.price / 200) || (item.defaultPrice / 200)) * item.quantityCount.toFixed(2)}`}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex   justify-center sm:justify-end  lg:items-start">
                            <div className="flex flex-col bg-black rounded p-6 md:p-8 border md:mr-14 lg:mr-0 ">
                                <div className="flex justify-between items-center mb-4 ">
                                    <span className="text-sm font-thin text-white">Item Total:</span>
                                    <span className="text-sm font-thin text-white">&#8377; {cartItems.reduce((total, item) => total + ((item.price || item.defaultPrice) / 200) * item.quantityCount, 0).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-thin text-white">GST (5%):</span>
                                    <span className="text-sm font-thin text-white">&#8377; {(cartItems.reduce((total, item) => total + ((item.price || item.defaultPrice) / 200) * item.quantityCount, 0) * 0.05).toFixed(2)}</span>
                                </div>

                                <div className="h-px w-full bg-gray-500 mb-2 -p-6"></div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-thin text-white">Total:</span>
                                    <span className="text-sm font-thin text-white">&#8377; {(cartItems.reduce((total, item) => total + ((item.price || item.defaultPrice) / 200) * item.quantityCount, 0) * 1.05).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-end -mb-4">

                                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mx-2 whitespace-nowrap font-thin text-sm" onClick={() => handleClearCart()}>
                                        Clear cart
                                    </button>
                                    <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded whitespace-nowrap font-base text-sm">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>

    );
};



export default Cart;


