import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/loginUserSlice";
import { usersSlice } from "./features/usersSlice";

export default configureStore({
    reducer:{
        users:usersSlice.reducer,
        user:userSlice.reducer
        
    },

})