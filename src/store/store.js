const { configureStore } = require("@reduxjs/toolkit");
import changeBackgroundSlice from './features/themeFeatures/changebackgroundSlice'

const store = configureStore({
    reducer: {
        changeBackground: changeBackgroundSlice.reducer,
    }
})

export default store;