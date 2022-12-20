import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setlink,
  setbookmarks,
  setweather,
  setgreetings,
  settodo,
  setquotes,
  setsearch,
} from "../store/features/themeFeatures/showSettingSlice";

export default function ShowSetting() {
  const theme = useSelector((state) => state.swithDarkmode.darkMode);
  const linkhideshow = useSelector((state) => state.hideShow.link);
  const bookmarkshideshow = useSelector((state) => state.hideShow.bookmarks);
  const weatherhideshow = useSelector((state) => state.hideShow.weather);
  const greetingshideshow = useSelector((state) => state.hideShow.greetings);
  const todohideshow = useSelector((state) => state.hideShow.todo);
  const quoteshideshow = useSelector((state) => state.hideShow.quotes);
  const searchhideshow = useSelector((state) => state.hideShow.search);
  const dispatch = useDispatch();

  return (
    <>
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Link
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="link"
          checked={linkhideshow}
          value={linkhideshow}
          onChange={() => dispatch(setlink())}
        ></input>
      </Box>
      {/*bookmark*/}
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Bookmarks Bar
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="bookmarks"
          checked={bookmarkshideshow}
          value={bookmarkshideshow}
          onChange={() => dispatch(setbookmarks())}
        ></input>
      </Box>
      {/* Weather */}
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Weather
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="weather"
          checked={weatherhideshow}
          value={weatherhideshow}
          onChange={() => dispatch(setweather())}
        ></input>
      </Box>
      {/* Greetings */}
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Greetings
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="greetings"
          checked={greetingshideshow}
          value={greetingshideshow}
          onChange={() => dispatch(setgreetings())}
        ></input>
      </Box>
      {/* Todo */}
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Todo
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="Todo"
          value={todohideshow}
          checked={todohideshow}
          onChange={() => dispatch(settodo())}
        ></input>
      </Box>
      {/* Quotes */}
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Quotes
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="quotes"
          checked={quoteshideshow}
          value={quoteshideshow}
          onChange={() => dispatch(setquotes())}
        ></input>
      </Box>
      {/* Search */}
      <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Search
        </Typography>
        <input
          className={`mui-switch ${theme ? "bg-[#44403C] border-transparent" : ""}`}
          type="checkbox"
          name="search"
          checked={searchhideshow}
          value={searchhideshow}
          onChange={() => dispatch(setsearch())}
        ></input>
      </Box>
    </>
  );
}
