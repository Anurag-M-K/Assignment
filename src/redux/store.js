import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/loginUserSlice";
import { usersSlice } from "./features/usersSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cardSlice } from "./features/chatCardSlice";
import { privateChatSlice } from "./features/privateChatSlice";
import { privateMessageSlice } from './features/privateCardStateSlice'

const persistConfig = {
    key:"root",
    version : 1,
    storage
}

const reducer = combineReducers({
    users:usersSlice.reducer,
    user:userSlice.reducer,
    chatCard : cardSlice.reducer,
    privateChat : privateChatSlice.reducer,
    messageCard : privateMessageSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig,reducer);

export default configureStore({
    reducer : persistedReducer
});