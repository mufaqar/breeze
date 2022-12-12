import { createSlice } from "@reduxjs/toolkit";
import iniBackground from '../../../../public/assets/images/login-bg.png'

const initialState ={
    backgroundImageURL : iniBackground
}

const changeBackgroundSlice = createSlice({
    name: 'change-background',
    initialState,
    reducers:{
        changeBg: (state, action) => {
            state.backgroundImageURL = action.payload
        },
    }    
})

export default changeBackgroundSlice