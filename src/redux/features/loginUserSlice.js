import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        loginUserDetails:[]
    },
    reducers:{
        setLoginUserDetails:(state,action)=>{

            state.userDetails =  action.payload

        }
    }
})

export const userState = (state)=>state.users;

export const {setLoginUserDetails} = userSlice.actions