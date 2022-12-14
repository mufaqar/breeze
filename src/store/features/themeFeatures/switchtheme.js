const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    darkMode : false
}

const switchThemeSlice = createSlice({
    name: "switch-theme-slice",
    initialState,
    reducers:{
        changeThemeToDarkAndLight:(state, action)=>{
            state.darkMode = action.payload
        },
    }
})


export default switchThemeSlice
export const {changeThemeToDarkAndLight} = switchThemeSlice.actions