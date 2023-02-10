import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name:'users',
    initialState:{
        userDetails:[]
    },
    reducers:{
        setUserDetails:(state,action)=>{
console.log("from slice ",action.payload)
            state.userDetails =  action.payload

        }
    }
})

export const userState = (state)=>state.users;

export const {setUserDetails} = usersSlice.actions