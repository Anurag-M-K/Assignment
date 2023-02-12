import { createSlice  } from "@reduxjs/toolkit";

export const  privateChatSlice =  createSlice({
    name:"privateChat",
    initialState :{
        privateMessageState : [],

    },
    reducers: {
        setPrivateChat : ( state , action )=>{
            state.privateMessageState = action.payload;
        }
    }
})


export const { setPrivateChat } = privateChatSlice.actions

export default privateChatSlice.reducer;