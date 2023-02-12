import { createSlice  } from "@reduxjs/toolkit";

export const privateMessageSlice = createSlice({
    name:"messageCard",
    initialState : {
        messageCardState : false
    },
    reducers : {
        setMessageCard  : (state,action)=>{
            state.messageCardState = action.payload
            console.log("koooo ",action.payload)
        }
    }
})

export const  { setMessageCard } = privateMessageSlice.actions

export default privateMessageSlice.reducer;