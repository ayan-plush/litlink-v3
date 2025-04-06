import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const add_to_wishlist = createAsyncThunk(
    'wishlist/add_to_wishlist',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        
        try {
        
           const {data} = await api.post('/wishlist/product/add-to-wishlist',info,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const remove_from_wishlist = createAsyncThunk(
    'wishlist/remove_from_wishlist',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        
        try {
           const {data} = await api.post('/wishlist/product/delete-from-wishlist',info,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_from_wishlist = createAsyncThunk(
    'wishlist/get_from_wishlist',
    async(userId,{rejectWithValue,fulfillWithValue}) => {

        try {
           const {data} = await api.get(`/wishlist/product/get-wishlist/${userId}`,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)





export const wishlistReducer = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist_products: [],
        wishlist_product_count: 0,
        successMessage: '',
        errorMessage: '',
        unavailable_products:[]
    },
    reducers : {
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(add_to_wishlist.fulfilled, (state,{payload})=>{
        state.successMessage = payload.message;
        state.wishlist_product_count = payload.productCount;
         })
        .addCase(add_to_wishlist.rejected, (state,{payload})=>{
            state.errorMessage = payload.error;
            state.wishlist_product_count = payload.productCount;

         })
         .addCase(get_from_wishlist.fulfilled, (state,{payload})=>{
            state.successMessage = payload.message;
            state.wishlist_products = payload.productWis;
            state.wishlist_product_count = payload.productCount;

         })
         .addCase(remove_from_wishlist.fulfilled, (state,{payload})=>{
            state.successMessage = payload.message;
            state.wishlist_product_count = payload.productCount;
         })
         .addCase(remove_from_wishlist.rejected, (state,{payload})=>{
            state.errorMessage = payload.error;
         })
        
    }
})
export const {messageClear} = wishlistReducer.actions
export default wishlistReducer.reducer