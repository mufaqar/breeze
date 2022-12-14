const { configureStore } = require("@reduxjs/toolkit");
import changeBackgroundSlice from './features/themeFeatures/changebackgroundSlice'
import switchThemeSlice from './features/themeFeatures/switchtheme'

const store = configureStore({
    reducer: {
        changeBackground: changeBackgroundSlice.reducer,
        swithDarkmode: switchThemeSlice.reducer
    }
})

export default store;