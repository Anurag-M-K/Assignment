import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name:'users',
    initialState:{
        userDetails:[]
    },
    reducers:{
        setUserDetails:(state,action)=>{
            state.userDetails =  action.payload

        }
    }
})


export const {setUserDetails} = usersSlice.actions
export default usersSlice.reducer;