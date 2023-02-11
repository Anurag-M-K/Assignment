import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        loginUserDetails:[]
    },
    reducers:{
        setLoginUserDetails:(state,action)=>{
            
            state.loginUserDetails =  action.payload
            console.log("from slice single ",action.userDetails)

        }
    }
})


export const {setLoginUserDetails} = userSlice.actions;

export default userSlice.reducer;