// here we create the store 
// and we wil update it in our Applayout using a provider from react-redux library 

import {configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store