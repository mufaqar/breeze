const { configureStore } = require("@reduxjs/toolkit");
import changeBackgroundSlice from '../store/features/background/changebackgroundSlice'

const store = configureStore({
    reducer: {
        changeBackground: changeBackgroundSlice.reducer,
    }
})

export default store;