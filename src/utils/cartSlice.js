// store slice creation
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {  
            // addItem is the name of action which calls the reducer function, reducer function takes-In two params state and action payload
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => { 
            state.items = []
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer // it combines all the reducer functions and exports as a single reducer

// dont forget to import it into store as a slice