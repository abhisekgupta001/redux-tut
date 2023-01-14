import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import ProductsReducer from "./productsSlice";
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductsReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
