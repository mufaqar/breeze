import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    message: false
}

const soundScapeSlice = createSlice({
    name: "soundscape-slice",
    initialState,
    reducers:{
        sounscapeMesssage:(state, action)=>{
            state.message = action.payload
        },
    }
})


export const {sounscapeMesssage} = soundScapeSlice.actions
export default soundScapeSlice