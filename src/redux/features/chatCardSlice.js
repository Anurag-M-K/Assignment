import { createSlice  } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name:"chatCard",
    initialState:{
        cardState : false,
    },
    reducers : {
        setCard :(state,action)=>{
            console.log("from chat slice ",action.payload)
            state.cardState = action.payload
        }
    }
})

export const  { setCard } = cardSlice.actions

export default cardSlice.reducer