// store slice creation
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        notification: null
    },
    reducers: {
        addItem: (state, action) => {
            // addItem is the name of action which calls the reducer function, reducer function takes-In two params state and action payload
            // action.payload will be the item that we add
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id); // we can use findIndex or find method
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantityCount++;
                state.notification = {type: 'success', message: 'Quantity updated'}
              } else {
                state.items.push({ ...action.payload, quantityCount: 1 });
                state.notification = {type: 'success', message: 'Item added to cart'}
              }
        },
        removeItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id); // we can use findIndex or find method
            if(existingItemIndex !== -1){
                state.items[existingItemIndex].quantityCount--;
                state.notification = {type: 'success', message: 'Quantity updated'}
                if(state.items[existingItemIndex].quantityCount === 0){
                    state.items.splice(existingItemIndex, 1)
                    state.notification = {type: 'success', message: 'Item removed'}
                }
            }
        },
        removeFullItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if(existingItemIndex !== -1){
                 state.items.splice(existingItemIndex, 1);
                 state.notification = {type: 'success', message: 'Item removed'}
            }
        },
        clearCart: (state) => {
            state.items = []
            state.notification = {type: 'success', message: 'Cart cleared'}

        },
        clearNotification: (state) => {
            state.notification = null;
        }
    }
})

export const { addItem, removeItem, clearCart, removeFullItem, clearNotification } = cartSlice.actions
export default cartSlice.reducer // it combines all the reducer functions and exports as a single reducer

// dont forget to import it into store as a slice