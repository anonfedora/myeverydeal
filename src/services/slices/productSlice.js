import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api/index";

const initialState = {
  status: "",
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const config = {
    "Content-Type": "application/json",
  };
  try {
    const {data} = await axios.get(`${API_URL}`, config);
    console.log(data)
    return data;
  } catch (error) {}
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      return { ...state, status: "loading" };
    },
    [fetchProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        status: "success",
        products: action.payload,
        error: "",
      };
    },
    [fetchProducts.rejected]: (state, action) => {
      return { ...state, status: "failure", error: action.payload };
    },
  },
});

export default productSlice.reducer;
