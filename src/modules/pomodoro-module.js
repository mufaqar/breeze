import { Box, Button, TextField, Typography } from "@mui/material";
import SearchEngine from "../components/searchEngine";
import Time from "../components/date-and-time/time";
import DateComp from "../components/date-and-time/date";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


export default function PomodoroModule() {
  const [open, setOpen] = useState(1);

  const ChangeTabs = (id) => {
    setOpen(id);
  };

  return (
    <>
    <Box component="main" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2">
        <Box className="flex justify-center flex-col items-center">
          <Box component="section" className="flex items-center space-x-4 mb-3">
            <Box
              variant="outlined"
              style={{ borderColor: "secondary.main" }}
              className={`flex text-base rounded-full p-1 px-2 cursor-pointer ${
                open === 1 ? "font-semibold" : "font-medium"
              }`}
              sx={{ color: "secondary.main", border: 1 }}
              onClick={() => ChangeTabs(1)}
            >
              Pomodoro
            </Box>
            <Box
              variant="outlined"
              className={`flex text-base rounded-full p-1 px-2 cursor-pointer ${
                open === 2 ? "font-semibold" : "font-medium"
              }`}
              sx={{ color: "secondary.main" }}
              onClick={() => ChangeTabs(2)}
            >
              Short break
            </Box>
            <Box
              variant="outlined"
              className={`flex text-base rounded-full p-1 px-2 cursor-pointer ${
                open === 3 ? "font-semibold" : "font-medium"
              }`}
              sx={{ color: "secondary.main" }}
              onClick={() => ChangeTabs(3)}
            >
              Long break
            </Box>
          </Box>
          <Time />
          <Box className="flex items-center space-x-5 mt-2">
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              className="rounded-full px-16 font-semibold text-base capitalize"
              sx={{ color: "secondary.main" }}
              style={{ backgroundColor: "secondary.contrastText" }}
            >
              Start
            </Button>
            <SettingsIcon sx={{ color: "secondary.main" }} className="cursor-pointer" />
          </Box>
          <Typography
            className="text-sm font-normal mt-4"
            sx={{ color: "secondary.main" }}
          >{`#0 Time to focus!`}</Typography>
          <Box className="mt-4 w-[400px]">
            <Typography className="text-2xl font-medium text-left" sx={{ color: "secondary.main" }}>
              Task
            </Typography>
            <TextField
              id="standard-basic"
              focused
              color="secondary"
              className="w-full mt-5 _placeholder"
              placeholder="Write a new task"
              variant="standard"
              multiline
            />
            
          </Box>
        </Box>
      </Box>
    </>
  )
}
