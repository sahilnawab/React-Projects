import todoReducer from "../feature/TodoSlice";
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: todoReducer

})