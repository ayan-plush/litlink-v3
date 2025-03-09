import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const get_category = createAsyncThunk(
    'product/get_category',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/get-categories')
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)

export const get_products = createAsyncThunk(
    'product/get_products',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/get-products')
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)


export const price_range_product = createAsyncThunk(
    'product/price_range_product',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/price-range-latest-product')
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)


export const query_products = createAsyncThunk(
    'product/query_products',
    async(query, { fulfillWithValue }) => {
        
        try {
            const {data} = await api.get(`/home/query-products?category=${query.category}&&rating=${query.rating}&&lowPrice=${query.lowPrice}&&highPrice=${query.highPrice}&&sortPrice=${query.sortPrice}&&pageNumber=${query.pageNumber}&&perPage=${query.perPage}&&searchValue=${query.searchValue?query.searchValue: ''}`)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)

export const get_product_details = createAsyncThunk(
    'product/get_product_details',
    async(productId, { fulfillWithValue }) => {        
        try {
            const {data} = await api.get(`/home/get-product-details/${productId}`)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)

export const get_friend_info = createAsyncThunk(
    'user/get_friend_info',
    async(sellerId, { fulfillWithValue,rejectWithValue }) => {        
        try {
            const {data} = await api.get(`/home/get-friend-details/${sellerId}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const homeReducer = createSlice({
    name: 'home',
    initialState:{
        categories : [],
        products : [],
        product: '',
        friend: '',
        home_products: [],
        display_products:'',
        latest_products:[],
        totalProducts: 0,
        perPage: 3,
        loader: false,
        errorMessage: "",
        priceRange : {
            low: 0,
            high: 1000,
        }
    },
    reducers : {
 
    },
    extraReducers: (builder) => {
        builder
        .addCase(get_category.rejected, (state,{payload})=>{
            state.errorMessage = payload.error
         })
        .addCase(get_category.fulfilled, (state,{payload})=>{
            state.categories = payload.categories
         })
         .addCase(get_products.rejected, (state,{payload})=>{
            state.errorMessage = payload.error,
            state.loader = false
         })
         .addCase(get_products.pending, (state,{payload})=>{
            state.loader = true; 
         })
        .addCase(get_products.fulfilled, (state,{payload})=>{
            state.latest_products = payload.latest_products,
            state.home_products = payload.products,
            state.loader = false
         })
         .addCase(price_range_product.rejected, (state,{payload})=>{
            state.errorMessage = payload.error
         })
        .addCase(price_range_product.fulfilled, (state,{payload})=>{
            state.priceRange = payload.priceRange,
            state.latest_products = payload.latest_products,
            state.products = payload.products

         })
         .addCase(query_products.rejected, (state,{payload})=>{
            state.errorMessage = payload.error
         })
        .addCase(query_products.fulfilled, (state,{payload})=>{
            state.totalProducts = payload.totalProducts,
            state.display_products = payload.result

         })
         .addCase(get_product_details.rejected, (state,{payload})=>{
            state.errorMessage = payload.error,
            state.loader = false
         })
         .addCase(get_product_details.pending, (state,{payload})=>{
            state.loader = true; 
         })
        .addCase(get_product_details.fulfilled, (state,{payload})=>{
            state.product = payload.product,
            state.loader = false

         })
         .addCase(get_friend_info.fulfilled, (state,{payload})=>{
            state.friend = payload.info
         })
    }
})

export default homeReducer.reducer