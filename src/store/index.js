import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './UI-Slice';
import cartReducer from './cartSlice'
const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer
    }
})


export default store