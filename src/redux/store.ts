import {configureStore} from "@reduxjs/toolkit";
import UsersReducer from "../redux/Users/UsersSlice"
import MessagesReducer from '../redux/Messages/MessagesSlice'

export const store = configureStore({
    reducer: {
        users:UsersReducer,
        messages:MessagesReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch