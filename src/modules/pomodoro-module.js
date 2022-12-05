import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import SearchEngine from "../components/searchEngine";
import Time from "../components/date-and-time/time";
import DateComp from "../components/date-and-time/date";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";


export default function PomodoroModule() {
  const [open, setOpen] = useState(1);
  const [estValue, setEstValue] = useState(1);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [editList, setEditlist] = useState(false);

  const ChangeTabs = (id) => {
    setOpen(id);
  };

  const saveTask = () => {
    setTaskList([...taskList, { task, estValue }]);
    setTask("");
    setEstValue(1);
    setShowInput(true);
  };

  // taskList component
  const TaskList = ({ taskList }) => {
    console.log("🚀 ~ file: pomodoro-module.js:31 ~ TaskList ~ taskList", taskList);
    return (
      <Box className="max-h-[150px] overflow-y-scroll taskList mt-4">
        {taskList.map((list, i) => (
          <Box className="bg-white/25 backdrop-blur-[1px] px-3 relative py-[6px] mt-2 first:mt-0 rounded-lg mr-2" key={i}>
            <Box
              key={i}
              sx={{ color: "secondary.main" }}
              className="text-sm font-normal flex justify-between items-center"
            >
              <FormControlLabel
                value="end"
                control={<Checkbox sx={{ color: "secondary.main" }} />}
                label={list.task}
                labelPlacement="end"
                sx={{ color: "secondary.main" }}
              />
              <Box className="flex items-center space-x-2">
                <Typography>1/{list.estValue}</Typography>
                <MoreVertIcon
                  sx={{ color: "secondary.main" }}
                  className="cursor-pointer"
                  onClick={() => setEditlist(!editList)}
                />
              </Box>
            </Box>
            <Paper className={`absolute -bottom-6 z- right-0 ${editList ? "block" : "hidden"} `}>123</Paper>
          </Box>
        ))}
      </Box>
    );
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
              sx={{ color: "secondary.contrastText", backgroundColor: "secondary.main" }}
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
            <Box className="flex justify-between items-center">
              <Typography className="text-2xl font-medium text-left" sx={{ color: "secondary.main" }}>
                Task
              </Typography>
              <Box className="flex items-center">
                {taskList.length > 1 && (
                  <Button
                    variant="outlined"
                    sx={{ color: "secondary.main", borderColor: "secondary.main" }}
                    className="rounded-full font-semibold mr-4 text-sm"
                    startIcon={<AddIcon />}
                    onClick={() => setShowInput(!showInput)}
                  >
                    Add Task
                  </Button>
                )}

                <MoreVertIcon sx={{ color: "secondary.main" }} className="cursor-pointer" />
              </Box>
            </Box>
            {showInput && <TaskList taskList={taskList} />}

            <Box className={taskList.length > 1 ? showInput && "hidden" : "block"}>
              <TextField
                id="standard-basic"
                focused
                color="secondary"
                className={`w-full mt-5 _placeholder`}
                placeholder="Write a new task"
                variant="standard"
                multiline
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Box>
          </Box>

          <div className={task.length > 0 ? "block" : "hidden"}>
            <Box className="mt-2 flex justify-between items-center w-[400px]">
              <Typography sx={{ color: "secondary.main" }} className="font-normal text-base">
                Est Pomodoros
              </Typography>
              <Box className="flex items-center">
                <RemoveIcon
                  sx={{ color: "secondary.main" }}
                  className="cursor-pointer"
                  onClick={() => (estValue <= 0 ? setEstValue(0) : setEstValue(estValue - 1))}
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  inputProps={{ min: 0, style: { textAlign: "center" } }}
                  sx={{
                    "& fieldset": { border: "none" },
                    color: "secondary.main",
                  }}
                  className="text-center w-12 font-semibold text-base _textwhite"
                  value={estValue}
                />
                <AddIcon
                  sx={{ color: "secondary.main" }}
                  className="cursor-pointer"
                  onClick={() => setEstValue(estValue + 1)}
                />
              </Box>
            </Box>

            <Box className="flex justify-between w-[400px]">
              <Button
                variant="outlined"
                className="rounded-full px-16 py-[10px] font-semibold text-base capitalize"
                sx={{ color: "secondary.main" }}
                color="secondary"
                onClick={() => setTask("")}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className="rounded-full px-16 py-[10px] font-semibold text-base capitalize"
                sx={{ color: "secondary.contrastText", backgroundColor: "secondary.main" }}
                onClick={saveTask}
              >
                Save
              </Button>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
}
