import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/api/productsApi";
import authReducer from "./services/slices/authSlice";
import productReducer from "./services/slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
});
