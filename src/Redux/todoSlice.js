import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ["test"]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            state.value = [...state.value, action.payload]

        }
    }
}) 

export default todoSlice.reducer

export const {addTodo} =  todoSlice.actions