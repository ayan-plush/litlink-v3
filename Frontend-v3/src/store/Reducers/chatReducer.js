import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import {jwtDecode} from 'jwt-decode'

export const add_friend = createAsyncThunk(
    'chat/add_friend',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }
           const {data} = await api.post('/chat/user/add-user-friend',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const add_admin = createAsyncThunk(
    'chat/add_admin',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/add-user-admin',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const send_message = createAsyncThunk(
    'chat/send_message',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/send-message-to-user',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const send_message_book = createAsyncThunk(
    'chat/send_message_book',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }
           const {data} = await api.post('/chat/user/send-book-to-user',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const send_message_admin = createAsyncThunk(
    'chat/send_message_admin',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/send-message-to-admin',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_user_messages = createAsyncThunk(
    'chat/get_user_messages',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/get-messages',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_admin_messages = createAsyncThunk(
    'chat/get_admin_messages',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/get-admin-messages',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_friends = createAsyncThunk(
    'chat/get_user_friends',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/get-friends',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_admins = createAsyncThunk(
    'chat/get_user_admins',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }            
           const {data} = await api.post('/chat/user/get-admin-messages',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_recipient_books = createAsyncThunk(
    'chat/get_recipient_books',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            info = { ...info, accessToken }
           const {data} = await api.post('/chat/user/get-recipient-books',info,{withCredentials: true})
            
            return fulfillWithValue(data)
        }
        catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)




export const chatReducer = createSlice({
    name: 'chat',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        my_friends: [],
        my_admins: [],
        admin_messages:[],
        current_admin:"",
        current_seller:"",
        current_seller_books:[],
        fb_messages:[],
        current_friend:"",
        adminsuccessMessage: '',
        adminerrorMessage: '',
    },
    reducers : {
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        },
        adminmessageClear : (state,_)=>{
            state.adminerrorMessage=""
            state.adminsuccessMessage=""
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(add_friend.fulfilled, (state,{payload})=>{
        state.my_friends = payload.MyFriends;
        state.current_friend = payload.currentFriend;
        state.fb_messages = payload.messages
        })
        .addCase(add_admin.fulfilled, (state,{payload})=>{
            state.my_admins = payload.MyFriends_admin;
            state.current_admin = payload.currentFriend_admin;
            state.admin_messages = payload.messages
        })
        .addCase(get_friends.fulfilled, (state,{payload})=>{
            state.my_friends = payload.newFriends;
        })
        .addCase(send_message.fulfilled, (state,{payload})=>{
        state.my_friends = payload.newFriends;
        state.fb_messages =[...state.fb_messages,payload.message] ;
        state.successMessage = 'Message Sent! 💌'
        })
        .addCase(send_message_book.fulfilled, (state,{payload})=>{
        state.my_friends = payload.newFriends;
        state.fb_messages =[...state.fb_messages,payload.message] ;
        state.successMessage = 'Message Sent! 💌'
        })
        .addCase(send_message_admin.fulfilled, (state,{payload})=>{
            state.my_admins = payload.newFriends;
            state.admin_messages =[...state.admin_messages,payload.message] ;
            state.adminsuccessMessage = 'Message Sent! 💌'
            })
        .addCase(get_user_messages.fulfilled, (state,{payload})=>{
            state.fb_messages = payload.messages
        })
        .addCase(get_admin_messages.fulfilled, (state,{payload})=>{
            state.admin_messages = payload.messages
        })
        .addCase(get_recipient_books.fulfilled, (state,{payload})=>{
            state.current_seller_books = payload.recipient_books
        })
    }
})
export const {messageClear,adminmessageClear} = chatReducer.actions
export default chatReducer.reducer