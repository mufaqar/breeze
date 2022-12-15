const { configureStore } = require("@reduxjs/toolkit");
import changeBackgroundSlice from './features/themeFeatures/changebackgroundSlice'
import switchThemeSlice from './features/themeFeatures/switchtheme'
import fontsSlice from './features/themeFeatures/fontsSlice'

const store = configureStore({
    reducer: {
        changeBackground: changeBackgroundSlice.reducer,
        swithDarkmode: switchThemeSlice.reducer,
        switchFont: fontsSlice.reducer
    }
})

export default store;