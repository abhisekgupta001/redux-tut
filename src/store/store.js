import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import ProductsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductsReducer,
    //product: productReducere, -we can add as many reducers we want here by creating slices
  },
});

export default store;
