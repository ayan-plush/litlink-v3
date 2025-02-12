import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import {jwtDecode} from 'jwt-decode'

export const add_friend = createAsyncThunk(
    'chat/add_friend',
    async(info,{rejectWithValue,fulfillWithValue}) => {
        try {            
           const {data} = await api.post('/chat/user/add-user-friend',info,{withCredentials: true})
            
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
           const {data} = await api.post('/chat/user/send-message-to-user',info,{withCredentials: true})
            
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
           const {data} = await api.post('/chat/user/get-messages',info,{withCredentials: true})
            
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
        fb_messages:[],
        current_friend:""
    },
    reducers : {
        messageClear : (state,_)=>{
            state.errorMessage=""
            state.successMessage=""
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(add_friend.fulfilled, (state,{payload})=>{
        state.my_friends = payload.MyFriends;
        state.current_friend = payload.currentFriend;
        state.fb_messages = payload.messages
        })
        .addCase(send_message.fulfilled, (state,{payload})=>{
        state.my_friends = payload.newFriends;
        state.fb_messages =[...state.fb_messages,payload.message] ;
        state.successMessage = 'Message Sent! 💌'
        })
        .addCase(get_user_messages.fulfilled, (state,{payload})=>{
            state.fb_messages = payload.messages
        })
    }
})
export const {messageClear} = chatReducer.actions
export default chatReducer.reducer