const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    fontFamily : 'Inter'
}

const fontsSlice = createSlice({
    name: 'fonts',
    initialState,
    reducers:{
        setFont:(state, action)=>{
            state.fontFamily = 'Inter2'
        }
    }
})

export const { setFont } = fontsSlice.actions
export default fontsSlice