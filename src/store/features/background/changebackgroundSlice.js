import { createSlice } from "@reduxjs/toolkit";
import iniBackground from '../../../../public/assets/images/login-bg.png'
import iniBackground2 from '../../../../public/assets/images/login-bg2.png'

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