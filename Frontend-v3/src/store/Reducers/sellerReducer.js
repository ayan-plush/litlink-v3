import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";






export const get_seller_request = createAsyncThunk(
    'seller/get_seller_request',
    async({perPage,page,searchValue},{rejectWithValue,fulfillWithValue}) => {              
        
        try {
            const accessToken = localStorage.getItem('accessToken')            
           const {data} = await api.post(`/sellers-request-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`,{accessToken},{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_sellers = createAsyncThunk(
    'seller/get_sellers',
    async({perPage,page,searchValue},{rejectWithValue,fulfillWithValue}) => {              
        
        try { 
           const accessToken = localStorage.getItem('accessToken')
           const info = {accessToken}           
           const {data} = await api.post(`/sellers-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`,info,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_seller = createAsyncThunk(
    'seller/get_seller',
    async(sellerId,{rejectWithValue,fulfillWithValue}) => {              
        
        try {
            const accessToken = localStorage.getItem('accessToken')
           const info = {accessToken}          
           const {data} = await api.post(`/seller-get/${sellerId}`,info,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const update_seller_status = createAsyncThunk(
    'seller/update_seller_status',
    async(obj,{rejectWithValue,fulfillWithValue}) => {              
        try {
            const accessToken = localStorage.getItem('accessToken')
            obj = {...obj,accessToken}           
           const {data} = await api.post(`/seller-status-update`,obj,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)







export const sellerReducer = createSlice({
    name: 'seller',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        sellers: [],
        totalSeller: 0,
        seller: '',
        totalPendingSeller: 0,
        pendingSellers: []
    },
    reducers : {
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        }

    },
    extraReducers:(builder) => {
        builder
        
         .addCase(get_seller_request.fulfilled, (state,{payload})=>{
            state.totalPendingSeller = payload.totalPendingSeller;
            state.pendingSellers = payload.pendingSellers
         })
         .addCase(get_sellers.fulfilled, (state,{payload})=>{
            state.totalSeller = payload.totalSeller;
            state.sellers = payload.sellers
         })
         .addCase(get_seller.fulfilled, (state,{payload})=>{
            state.seller = payload.seller
         })
         .addCase(update_seller_status.rejected, (state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.errorMessage
         })
         .addCase(update_seller_status.pending, (state,{payload})=>{
            state.loader = true
         })
         .addCase(update_seller_status.fulfilled, (state,{payload})=>{
            state.loader = false;
            state.successMessage = payload.message
         })
        
    }
})
export const {messageClear} = sellerReducer.actions
export default sellerReducer.reducer