const { configureStore } = require("@reduxjs/toolkit");
import changeBackgroundSlice from './features/themeFeatures/changebackgroundSlice'
import switchThemeSlice from './features/themeFeatures/switchtheme'
import fontsSlice from './features/themeFeatures/fontsSlice'
import showSettingSlice from './features/themeFeatures/showSettingSlice'
import soundScapeSlice from './features/soundscape/soundScapeSlice'
import listSlice from './features/todo/listSlice'
import addTodoSlice from './features/todo/addTodoSlice'

const store = configureStore({
    reducer: {
        changeBackground: changeBackgroundSlice.reducer,
        swithDarkmode: switchThemeSlice.reducer,
        switchFont: fontsSlice.reducer,
        hideShow: showSettingSlice.reducer,
        soundscape: soundScapeSlice.reducer,
        lists: listSlice.reducer,
        addTodo: addTodoSlice.reducer,
    }
})

export default store;