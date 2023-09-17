import { configureStore } from "@reduxjs/toolkit";
import ExpensesSlice from "./ExpensesSlice";


export const Store = configureStore({
    reducer:{
        expenses : ExpensesSlice,
    }
});