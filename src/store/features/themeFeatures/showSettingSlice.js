const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  link: false,
  bookmarks: false,
  weather: false,
  greetings: false,
  todo: false,
  quotes: false,
  search: false,
};

const showSettingSlice = createSlice({
  name: "hide-show-general-settings",
  initialState,
  reducers: {
    setlink: (state) => {
      state.link = !state.link;
    },
    setbookmarks: (state) => {
      state.bookmarks = !state.bookmarks;
    },
    setweather: (state) => {
      state.weather = !state.weather;
    },
    setgreetings: (state) => {
      state.greetings = !state.greetings;
    },
    settodo: (state) => {
      state.todo = !state.todo;
    },
    setquotes: (state) => {
      state.quotes = !state.quotes;
    },
    setsearch: (state) => {
      state.search = !state.search;
    },
  },
});

export const { setlink, setbookmarks, setweather, setgreetings, settodo, setquotes, setsearch } =
  showSettingSlice.actions;
export default showSettingSlice;
