import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos :[]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState ,
    reducers : {
        addTodo :(state, action)=>{
            const todo = action.payload
            
            state.todos.push(todo)
        }
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer