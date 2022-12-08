import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Modal,
  OutlinedInput,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Time from "../components/date-and-time/time";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Pause from "../../public/assets/svg/pause.svg";
import Stop from "../../public/assets/svg/stop.svg";
import Restart from "../../public/assets/svg/restart.svg";
import Tick from "../../public/assets/svg/tick.svg";
import Delete from "../../public/assets/svg/delete.svg";
import Pen from "../../public/assets/svg/pen.svg";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "@emotion/styled";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 6,
  width: 22,
  height: 22,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "transparent",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#3F9BFC",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  boxShadow: "none",
  "&:before": {
    display: "block",
    width: 22,
    height: 22,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            "&:hover": { bgcolor: "transparent" },
          }}
          disableRipple
          color="default"
          checkedIcon={<BpCheckedIcon />}
          icon={<BpIcon />}
          inputProps={{ "aria-label": "Checkbox demo" }}
          {...props}
        />
      }
      label={props.labels}
    />
  );
}

export default function PomodoroModule() {
  const [open, setOpen] = useState(1);
  const [estValue, setEstValue] = useState(1);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [editList, setEditlist] = useState(null);
  const [start, setStart] = useState(false);
  const [clearTask, setClearTask] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "526px",
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "12px",
    p: "24px",
  };

  const handleOpen = () => setOpenModel(true);
  const handleClose = () => setOpenModel(false);

  const ChangeTabs = (id) => {
    setOpen(id);
  };

  const saveTask = () => {
    setTaskList([...taskList, { task, estValue }]);
    setTask("");
    setEstValue(1);
    setShowInput(true);
  };

  const handleEditLIst = (id) => {
    if (editList === id) {
      return setEditlist(null);
    }
    return setEditlist(id);
  };

  // taskList component
  const TaskList = ({ taskList }) => {
    return (
      <Box className="relative overflow-y-scroll overflow-x-hidden max-h-[162px] taskList mt-4">
        {taskList.map((list, i) => (
          <Box className="relative mt-2 " key={i}>
            <Box
              key={i}
              sx={{ color: "secondary.main" }}
              className="text-sm font-normal flex justify-between items-center bg-white/25  backdrop-blur-[1px] px-3 py-[6px] first:mt-0 rounded-lg mr-2"
            >
              <BpCheckbox label={list.task} />
              <Box className="flex items-center space-x-2">
                <Typography>1/{list.estValue}</Typography>
                <MoreVertIcon
                  sx={{ color: "secondary.main" }}
                  className="cursor-pointer"
                  onClick={() => handleEditLIst(i)}
                />
              </Box>
            </Box>
            {editList === i && (
              <Box className="absolute right-52 top-12 ">
                <EditBtn text1="Edit task" text2="Delete task" icon1={<Pen />} icon2={<Delete />} style="absolute" />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  const PlayPauseBtn = ({ title, icon, padding }) => {
    return (
      <Button
        variant="contained"
        startIcon={icon}
        className={`rounded-full py-[10px] font-semibold text-base capitalize ${padding}`}
        sx={{ color: "secondary.contrastText", backgroundColor: "secondary.main" }}
        onClick={() => setStart(!start)}
      >
        {title}
      </Button>
    );
  };

  const EditBtn = ({ icon1, icon2, text1, text2, style }) => {
    return (
      <Paper sx={{ color: "secondary.main", borderRadius: "10px" }} className={` z-10 ${style} block`}>
        <Box
          className="flex items-center w-[180px] cursor-pointer p-2"
          sx={{ borderBottom: 1, borderColor: "primary.light" }}
        >
          {icon1}
          <Typography className="text-sm font-normal ml-2" sx={{ color: "secondary.contrastText" }}>
            {text1}
          </Typography>
        </Box>
        <Box className="flex cursor-pointer items-center p-2">
          {icon2}
          <Typography className="text-sm font-normal ml-2" sx={{ color: "secondary.contrastText" }}>
            {text2}
          </Typography>
        </Box>
      </Paper>
    );
  };

  return (
    <>
      <Box component="main" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2">
        <Box className="flex relative justify-center flex-col items-center">
          <Box component="section" className="flex items-center space-x-4 ">
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
          {!start ? (
            <Box className="flex items-center space-x-5 mt-1">
              <PlayPauseBtn title="Start" icon={<PlayArrowIcon />} padding="px-12" />
              <SettingsIcon sx={{ color: "secondary.main" }} className="cursor-pointer" onClick={handleOpen} />
            </Box>
          ) : (
            <Box className="flex items-center space-x-5 mt-2">
              <PlayPauseBtn title="Pause" icon={<Pause />} padding="px-8" />
              <Box className="bg-white/25 backdrop-blur-[1px] cursor-pointer p-[14px] rounded-full flex justify-center items-center">
                <Stop />
              </Box>
              <Box className="bg-white/25 backdrop-blur-[1px] cursor-pointer p-[12px] rounded-full flex justify-center items-center">
                <Restart />
              </Box>
              <SettingsIcon sx={{ color: "secondary.main" }} className="cursor-pointer" />
            </Box>
          )}

          <Typography
            className="text-sm font-normal mt-4"
            sx={{ color: "secondary.main" }}
          >{`#0 Time to focus!`}</Typography>
          <Box className="mt-4 w-[430px]">
            <Box className="flex justify-between pr-5 items-center">
              <Typography className="text-2xl font-medium text-left" sx={{ color: "secondary.main" }}>
                Task
              </Typography>
              <Box className="flex items-center relative">
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

                <MoreVertIcon
                  sx={{ color: "secondary.main" }}
                  className="cursor-pointer"
                  onClick={() => setClearTask(!clearTask)}
                />
                {clearTask && (
                  <EditBtn
                    text1="Clear finished task"
                    text2="Clear all task"
                    icon1={<Tick />}
                    icon2={<Delete />}
                    style="absolute top-10 right-0"
                  />
                )}
              </Box>
            </Box>
            {showInput && <TaskList taskList={taskList} />}

            <Box className={taskList.length > 1 ? showInput && "hidden" : "block"}>
              <TextField
                id="standard-basic"
                focused
                color="secondary"
                className={`w-full pr-4 mt-2 z-0 _placeholder`}
                placeholder="Write a new task"
                variant="standard"
                multiline
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Box>
          </Box>

          <div className={task.length > 0 ? "block absolute -bottom-24" : "hidden"}>
            <Box className="mt-2 flex justify-between items-center w-[430px] pr-5">
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

            <Box className="flex justify-between w-[430px] pr-5">
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

      <Paper>
        <Modal
          open={openModel}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box className="flex justify-between items-center">
              <Typography component="h5" className="text-2xl font-bold" sx={{ color: "secondary.contrastText" }}>
                Settings
              </Typography>
              <ClearIcon className="cursor-pointer" onClick={handleClose} />
            </Box>
            <Typography
              component="h6"
              className="text-base font-semibold mt-8"
              sx={{ color: "secondary.contrastText" }}
            >
              Settings
            </Typography>
            <Box className="grid grid-cols-3 gap-2 mt-4">
              <FormControl variant="outlined">
                <Typography className="text-base font-normal mb-2" sx={{ color: "secondary.contrastText" }}>
                  Pomodoro
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange("weight")}
                  endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "minutes",
                  }}
                />
              </FormControl>
              <FormControl variant="outlined">
                <Typography className="text-base font-normal mb-2" sx={{ color: "secondary.contrastText" }}>
                  Short Break
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange("weight")}
                  endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "minutes",
                  }}
                />
              </FormControl>
              <FormControl variant="outlined">
                <Typography className="text-base font-normal mb-2" sx={{ color: "secondary.contrastText" }}>
                  Long Break
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange("weight")}
                  endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "minutes",
                  }}
                />
              </FormControl>
            </Box>
            <Box className="pt-[1px] my-6" sx={{ backgroundColor: "primary.light" }}></Box>
            <Box className="flex justify-between item-center">
              <Typography component="h4" className="text-base font-semibold" sx={{ color: "secondary.contrastText" }}>
                Auto start breaks
              </Typography>
              <input class="mui-switch" type="checkbox"></input>
            </Box>
            <Box className="flex justify-between item-center mt-2">
              <Typography component="h4" className="text-base font-semibold" sx={{ color: "secondary.contrastText" }}>
                Auto start pomodoros
              </Typography>
              <input class="mui-switch" type="checkbox"></input>
            </Box>
            <Box className="pt-[1px] my-6" sx={{ backgroundColor: "primary.light" }}></Box>
            <Box className="flex justify-between item-center ">
              <Typography
                component="h4"
                className="text-base font-semibold w-10/12 flex justify-start items-center"
                sx={{ color: "secondary.contrastText" }}
              >
                Long break interval
              </Typography>
              <FormControl variant="outlined" className="w-2/12">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange("weight")}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "minutes",
                  }}
                />
              </FormControl>
            </Box>
            <Button className="w-full font-semibold text-white bg-[#3F9BFC] hover:bg-blue-500 text-base rounded-full mt-6 p-3">
              Save
            </Button>
          </Box>
        </Modal>
      </Paper>
    </>
  );
}
