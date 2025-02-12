import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import {jwtDecode} from 'jwt-decode'

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {            
           const {data} = await api.post('/admin-login',info,{withCredentials: true})
           localStorage.setItem('accessToken',data.token)
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        
        try {
           const {data} = await api.post('/seller-register',info,{withCredentials: true})
            localStorage.setItem('accessToken',data.token)
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const seller_login = createAsyncThunk(
    'auth/seller_login',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {            
            
           const {data} = await api.post('/seller-login',info,{withCredentials: true})
           localStorage.setItem('accessToken',data.token)
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async({token},{rejectWithValue,fulfillWithValue}) => {
        try {            
            
           const {data} = await api.get('/get-user',{token},{withCredentials: true})
           
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const returnRole = (token) => {
    if (token) {

        const decodeToken = jwtDecode(token)
        const expireTime = new Date(decodeToken.exp * 1000)
        if(new Date() > expireTime){
            localStorage.removeItem('accessToken')
            return ''
        }
        else {
            return decodeToken.role
            
        }
        
    } 
}

export const profile_image_upload = createAsyncThunk(
    'auth/profile_image_upload',
    async(image,{rejectWithValue,fulfillWithValue}) => {
                
        try {
           const {data} = await api.post('/profile-image-upload',image,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const add_shopInfo = createAsyncThunk(
    'auth/add_shopInfo',
    async(obj,{rejectWithValue,fulfillWithValue}) => {
                
        try {
           const {data} = await api.post('/shopInfo-upload',obj,{withCredentials: true})
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const logout = createAsyncThunk(
    'auth/logout',
    async({navigate,role},{rejectWithValue,fulfillWithValue}) => {
        try {            
           const {data} = await api.get('/logout',{withCredentials: true})
           localStorage.removeItem('accessToken',data.token)
           if (role==='admin') {
            navigate('/admin/login')
           } else {
            navigate('/')
           }
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)






export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
        role: returnRole(localStorage.getItem('accessToken')),
        token: localStorage.getItem('accessToken')
    },
    reducers : {
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(admin_login.pending, (state,{payload})=>{
           state.loader = true; 
        })
        .addCase(admin_login.rejected, (state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.error
         })
         .addCase(admin_login.fulfilled, (state,{payload})=>{
            state.loader = false;
            state.successMessage = payload.message;
            state.token = payload.token;
            state.role = returnRole(payload.token)
         })

         .addCase(seller_register.pending, (state,{payload})=>{
            state.loader = true; 
         })
         .addCase(seller_register.rejected, (state,{payload})=>{
             state.loader = false;
             state.errorMessage = payload.error
          })
          .addCase(seller_register.fulfilled, (state,{payload})=>{
             state.loader = false;
             state.successMessage = payload.message;
             state.token = payload.token;
            state.role = returnRole(payload.token)
          })

          .addCase(seller_login.pending, (state,{payload})=>{
            state.loader = true; 
         })
         .addCase(seller_login.rejected, (state,{payload})=>{
             state.loader = false;
             state.errorMessage = payload.error
          })
          .addCase(seller_login.fulfilled, (state,{payload})=>{
             state.loader = false;
             state.successMessage = payload.message;
             state.token = payload.token;
            state.role = returnRole(payload.token)
          })
          .addCase(get_user_info.fulfilled, (state,{payload})=>{
            state.loader = false;
            state.userInfo = payload.userInfo
         })
         .addCase(profile_image_upload.pending, (state,{payload})=>{
            state.loader = true; 
         })
         .addCase(profile_image_upload.rejected, (state,{payload})=>{
             state.loader = false;
             state.errorMessage = payload.error
          })
          .addCase(profile_image_upload.fulfilled, (state,{payload})=>{
             state.loader = false;
             state.successMessage = payload.message;
             state.userInfo = payload.userInfo
          })
          .addCase(add_shopInfo.pending, (state,{payload})=>{
            state.loader = true; 
         })
         .addCase(add_shopInfo.rejected, (state,{payload})=>{
             state.loader = false;
             state.errorMessage = payload.error
          })
          .addCase(add_shopInfo.fulfilled, (state,{payload})=>{
             state.loader = false;
             state.successMessage = payload.message;
             state.userInfo = payload.result
          })
          .addCase(logout.fulfilled, (state,{payload})=>{
            state.userInfo = '';
            state.token = '';
            state.role = '';
         })
    }
})
export const {messageClear} = authReducer.actions
export default authReducer.reducer