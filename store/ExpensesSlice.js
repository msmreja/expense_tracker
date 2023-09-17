import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ExpensesSlice = createSlice({
    name: 'Expenses',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        update(state, action) {
        
        },
        remove(state) {

        },
    }
});

export const { add, update, remove } = ExpensesSlice.actions;
export default ExpensesSlice.reducer;
