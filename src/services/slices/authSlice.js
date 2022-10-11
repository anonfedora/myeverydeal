import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

export const register = createAsyncThunk(
  "api/register",
  async (data, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${API_URL}/api/register`, data);
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "api/login",
  async (data, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${API_URL}/api/login`, data);
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    name: "",
    email: "",
    _id: "",
    token: localStorage.getItem("token") || null,
    status: null,
  },
  reducers: {
    authUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          isAuthenticated: true,
          name: user.name,
          email: user.email,
          _id: user.id,
          loading: false,
          status: "success",
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        name: "",
        email: "",
        _id: "",
        status: null,
      };
    },
  },
  extraReducers: {
    [register.pending]: (state, action) => {
      return { ...state, status: "loading" };
    },
    [register.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        toast.success(`Success! Welcome, ${user.name}!`, {
          duration: 5000,
          position: "top-right",
          style: {
            minWidth: 210,
            minHeight: 65,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
            fontSize: 17,
          },
        });
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user.id,
          createdAt: user.createdAt,
          loading: false,
          status: "success",
          isAuthenticated: true,
        };
      }
    },
    [register.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: "error",
      };
    },
    [login.pending]: (state, action) => {
      return { ...state, status: "loading" };
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        toast.success(`Welcome back, ${user.name}!`, {
          duration: 5000,
          position: "top-right",
          style: {
            minWidth: 210,
            maxWidth: 65,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
            fontSize: 17,
          },
        });
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          _id: user.id,
          loading: false,
          status: "success",
          isAuthenticated: true,
        };
      }
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: "error",
        error: action.payload,
      };
    },
  },
});

export const { authUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
