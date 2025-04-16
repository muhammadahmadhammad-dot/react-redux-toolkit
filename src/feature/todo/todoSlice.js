import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{}] ,
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add: (state, action)=>{
            state.todos.push(action.payload)
        },
        remove: (state, action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id != action.payload))
        },
        update: (state, action)=>{
            state.todos.map((todo)=>(todo.id == action.payload.id ? action.payload : todo))
        },
    }

}) 
export const {add,remove,update} = todoSlice.actions

export default todoSlice.reducer