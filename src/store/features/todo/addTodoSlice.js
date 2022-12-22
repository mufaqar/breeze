import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos:[
        {
            title: "Meeting with Client",
            listTitle: 'Personal',
            color: "#F59E0B",
        },
        {
            title: "Creating Wireframe #1",
            listTitle: 'Personal',
            color: "#F59E0B",
        }
    ]
}

const addTodoSlice = createSlice({
    name: "add-new-todo",
    initialState,
    reducers:{
        newTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})

export const {newTodo} = addTodoSlice.actions
export default addTodoSlice