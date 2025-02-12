import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";



export const add_product = createAsyncThunk(
    'product/add_product',
    async(product,{rejectWithValue,fulfillWithValue}) => {
        
        
        try {
           const {data} = await api.post('/product-add',product,{withCredentials: true})
           
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)




export const get_products = createAsyncThunk(
    'product/get_products',
    async({perPage,page,searchValue,id},{rejectWithValue,fulfillWithValue}) => {
               
        
        try {            
           const {data} = await api.post(`/products-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`,{id},{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_product = createAsyncThunk(
    'product/get_product',
    async(productId,{rejectWithValue,fulfillWithValue}) => {        
        try {            
           const {data} = await api.get(`/product-get/${productId}`,{withCredentials: true})           
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const update_product = createAsyncThunk(
    'product/update_product',
    async(product,{rejectWithValue,fulfillWithValue}) => {        
        try {            
           const {data} = await api.post(`/product-update`,product,{withCredentials: true})           
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const update_product_image = createAsyncThunk(
    'product/update_product_image',
    async({oldImage,newImage,productId},{rejectWithValue,fulfillWithValue}) => {        
        try {         
            const formData = new FormData()
            formData.append('oldImage', oldImage)
            formData.append('newImage', newImage) 
            formData.append('productId', productId) 
           const {data} = await api.post(`/product-image-update`,formData,{withCredentials: true})           
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)





export const productReducer = createSlice({
    name: 'product',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        imageLoader: false,
        products: [],
        totalProduct: 0,
        product : ''
    },
    reducers : {
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(add_product.pending, (state,{payload})=>{
           state.loader = true; 
        })
        .addCase(add_product.rejected, (state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.error
         })
        .addCase(add_product.fulfilled, (state,{payload})=>{
            state.loader = false; 
            state.successMessage = payload.message;
            
         })
         .addCase(get_products.fulfilled, (state,{payload})=>{
            state.totalProduct = payload.totalProduct;
            state.products = payload.products
         })
         .addCase(get_product.fulfilled, (state,{payload})=>{
            state.product = payload.product
         })
         .addCase(update_product.pending, (state,{payload})=>{
            state.loader = true; 
         })
         .addCase(update_product.rejected, (state,{payload})=>{
             state.loader = false;
             state.errorMessage = payload.error
          })
         .addCase(update_product.fulfilled, (state,{payload})=>{
             state.loader = false; 
             state.successMessage = payload.message;
             state.product = payload.product             
          })
          .addCase(update_product_image.fulfilled, (state,{payload})=>{
            state.imageLoader = false;
            state.successMessage = payload.message;
            state.product = payload.product             
         })
         .addCase(update_product_image.rejected, (state,{payload})=>{
            state.imageLoader = false;
            state.errorMessage = payload.error
         })
         .addCase(update_product_image.pending, (state,{payload})=>{
            state.imageLoader = true; 
         })         

 
        
    }
})
export const {messageClear} = productReducer.actions
export default productReducer.reducer