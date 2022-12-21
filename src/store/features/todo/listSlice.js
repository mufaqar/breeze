import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ListItems: [
    {
      title: "Project",
      color: "#22C55E",
      value: "2",
    },
    {
      title: "Personal",
      color: "#F59E0B",
      value: "3",
    },
    {
      title: "Work",
      color: "#EF4444",
      value: "4",
    },
  ],
}

const listSlice = createSlice({
    name: 'lists-slice',
    initialState,
    reducers:{
      addNewList:(state,action)=>{
        console.log('response', action.payload)
      }
    }
})

export const {addNewList} = listSlice.actions
export default listSlice