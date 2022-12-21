"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Stack,
  Button,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// import SvgIcon from "@material-ui/core/SvgIcon";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {addNewList} from '../../store/features/todo/listSlice'

const homeModuleData = {
  panelTitle: "todo",
  panelList: [
    {
      icon: <HomeOutlinedIcon />,
      title: "home",
      value: 3,
    },
    {
      icon: <DateRangeOutlinedIcon />,
      title: "todo",
      value: 2,
    },
    {
      icon: <CheckBoxOutlinedIcon />,
      title: "completed",
      value: 3,
    },
  ],
  listTitle: "Lists",
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `verical-tab-${index}`,
    "aria-controls": `verical-tabpanel-${index}`,
  };
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -65%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "12px",
};

const TabsLayout = (props) => {
  // console.log(props);
  const { panelTitle, panelList, listTitle, ListItems } = homeModuleData;
  const { children } = props;
  console.log(children);

  const [value, setValue] = useState(1);
  const [isFullWidthPanel, setIsFullWidthPanel] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useSelector((state) => state.swithDarkmode.darkMode);
  const lists = useSelector((state) => state.lists.ListItems);
  console.log("🚀 ~ file: SettingTabsLayout.js:118 ~ General ~ lists", lists)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listColor, setListColor] = React.useState("");
  const [listName, setListName] = React.useState("");

  const dispatch = useDispatch()

  const handleBadge = (event) => {
    setListColor(event.target.value);
  };
  
  const SaveList = (listColor,listName) => {
    dispatch(addNewList(listColor,listName))
    setListColor('')
    setListName('')
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        minHeight: "500px",
        borderRadius: 1.5,
        mt: 2.5,
      }}
      className="h-[calc(100vh-160px)]"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={theme ? "darkTodoTabs" : "lightTodoTabs"}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: isFullWidthPanel ? "218px" : "100px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          mb={2}
          mx={isFullWidthPanel ? 2 : 1}
        >
          <Typography variant={isFullWidthPanel ? "h5" : "h6"} fontWeight={600} textTransform="capitalize">
            {panelTitle}
          </Typography>
          <Stack alignItems="center" sx={{ cursor: "pointer" }} onClick={() => setIsFullWidthPanel(!isFullWidthPanel)}>
            {isFullWidthPanel ? (
              <KeyboardDoubleArrowLeft sx={{ color: "gray" }} />
            ) : (
              <KeyboardDoubleArrowRight sx={{ color: "gray" }} />
            )}
          </Stack>
        </Stack>

        {panelList.map((tabPanel, index) => (
          <Tab
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: isFullWidthPanel ? "start" : "center",
              gap: 1,
              p: 1,
              borderRadius: "8px",
              mx: 2,
              my: 0.5,
              minHeight: "auto",
              minWidth: !isFullWidthPanel && "auto",
            }}
            icon={tabPanel.icon}
            label={
              <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center" className="">
                {isFullWidthPanel && (
                  <Typography textTransform="capitalize" className="text-sm title" fontWeight={400}>
                    {tabPanel.title}
                  </Typography>
                )}
                <Typography color="#78716C" py={0.5} className={`rounded-md tabValue font-normal text-xs`} px={1}>
                  {tabPanel.value}
                </Typography>
              </Stack>
            }
            {...a11yProps(index)}
          />
        ))}

        <Typography component="h5" className="text-sm font-semibold text-[#78716C] mt-7 ml-4">
          {listTitle}
        </Typography>

        {lists.map((tabPanel, index) => (
          <Tab
            key={index}
            className="item-center"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: isFullWidthPanel ? "start" : "center",
              gap: 1,
              p: 1,
              borderRadius: "8px",
              mx: 2,
              my: 0.5,
              minHeight: "auto",
              minWidth: !isFullWidthPanel && "auto",
            }}
            icon={<Box className={`rounded-full p-[6px] mt-[6px]`} style={{ background: tabPanel.color }}></Box>}
            label={
              <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center" className="">
                {isFullWidthPanel && (
                  <Typography textTransform="capitalize" className="text-sm title" fontWeight={400}>
                    {tabPanel.title}
                  </Typography>
                )}
                <Typography color="#78716C" py={0.5} className={`rounded-md tabValue font-normal text-xs`} px={1}>
                  {tabPanel.value}
                </Typography>
              </Stack>
            }
            {...a11yProps(index)}
          />
        ))}
        <Box className="px-4 mt-4 my-6">
          <Button
            variant="outlined"
            className="text-sm capitalize border-none p-2 font-semibold"
            startIcon={<AddOutlinedIcon />}
            onClick={handleOpen}
          >
            New List
          </Button>
          <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box className="flex justify-between items-center">
                <Typography id="modal-modal-title" variant="h6" className="text-xl font-semibold" component="h2">
                  Add list
                </Typography>
                <Box
                  sx={{ border: 1, borderColor: "#F5F5F5" }}
                  className="flex cursor-pointer justify-between items-center flex-col p-1 px-2 rounded-md"
                  onClick={handleClose}
                >
                  <CloseIcon className="w-4" />
                </Box>
              </Box>
              <Box className="mt-3">
                <InputLabel className="text-sm font-medium mb-2" sx={{ color: "secondary.contrastText" }}>
                  List name
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={`w-full  ${theme ? "_inputDark" : "_inputLight"}`}
                  sx={{ "& fieldset": { border: "none" } }}
                  border="none"
                  value={listName}
                  onChange={(e)=>setListName(e.target.value)}
                />
                <Box fullWidth className="mt-4 badgeSelector">
                  <InputLabel className="text-sm font-medium mb-2" sx={{ color: "secondary.contrastText" }}>
                    Color
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={listColor}
                    sx={{ "& fieldset": { border: "none" } }}
                    // IconComponent={() => ( <KeyboardArrowDownIcon /> )}
                    className={`w-full  ${theme ? "_inputDark" : "_inputLight"}`}
                    onChange={handleBadge}
                  >
                    <MenuItem value="#CA4C3E" className="text-sm font-medium">
                      <span className="bg-[#CA4C3E] p-[6px] mr-2 inline-block rounded-full"></span> Red
                    </MenuItem>
                    <MenuItem value="#F19E4B" className="text-sm font-medium">
                      <span className="bg-[#F19E4B] p-[6px] mr-2 inline-block rounded-full"></span> Orange
                    </MenuItem>
                    <MenuItem value="#F3D246" className="text-sm font-medium">
                      <span className="bg-[#F3D246] p-[6px] mr-2 inline-block rounded-full"></span> Yellow
                    </MenuItem>
                    <MenuItem value="#B1B851" className="text-sm font-medium">
                      <span className="bg-[#B1B851] p-[6px] mr-2 inline-block rounded-full"></span> Olive Green
                    </MenuItem>
                    <MenuItem value="#22C55E" className="text-sm font-medium">
                      <span className="bg-[#22C55E] p-[6px] mr-2 inline-block rounded-full"></span> Green
                    </MenuItem>
                    <MenuItem value="#428DAA" className="text-sm font-medium">
                      <span className="bg-[#428DAA] p-[6px] mr-2 inline-block rounded-full"></span> Teal
                    </MenuItem>
                    <MenuItem value="#4FA7EF" className="text-sm font-medium">
                      <span className="bg-[#4FA7EF] p-[6px] mr-2 inline-block rounded-full"></span> Sky Blue
                    </MenuItem>
                  </Select>
                </Box>
                <Button className={`w-full rounded-full ${listName.length === 0 || listColor.length === 0 ? 'bg-[#D6D3D1]' : 'bg-[#4FA7EF]'}  mt-6 p-3 capitalize text-white font-semibold text-base`} onClick={SaveList} >Add</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Tabs>

      {/* {children.map((item, index) => (
        <TabPanel value={value} index={index + 1} className="w-full" key={index}>
          {item}
        </TabPanel>
      ))} */}

      {/* HOME TAB PANNEL */}
      <TabPanel value={value} index={1} className="w-full">
        <TodoHome />
      </TabPanel>
      {/* xx HOME TAB PANNEL xx */}

      {/* TODO TAB PANNEL */}
      <TabPanel value={value} index={2} className="w-full">
        <Todo />
      </TabPanel>
      {/* xx TODO TAB PANNEL xx */}

      {/* COMPLETED TAB PANNEL */}
      <TabPanel value={value} index={3} className="w-full">
        <CompletedTodo />
      </TabPanel>
      {/* xx COMPLETED TAB PANNEL xx */}

      {/* PROJECT TAB PANNEL */}
      <TabPanel value={value} index={5} className="w-full">
        <ProjectTodo />
      </TabPanel>
      {/* xx PROJECT TAB PANNEL xx */}

      {/* PERSONAL TAB PANNEL */}
      <TabPanel value={value} index={6} className="w-full">
        <PersonalTodo />
      </TabPanel>
      {/* xx PERSONAL TAB PANNEL xx */}

      {/* WORK TAB PANNEL */}
      <TabPanel value={value} index={7} className="w-full">
        <WorkTodo />
      </TabPanel>
      {/* xx WORK TAB PANNEL xx */}
    </Box>
  );
};

export default TabsLayout;

const TodoHome = () => {
  return (
    <>
      <Box component="section" className="max-w-[800px] w-full mx-auto bg-red-300">
        TodoHome
      </Box>
    </>
  );
};

const Todo = () => {
  return (
    <>
      <Box component="section" className="max-w-[800px] w-full mx-auto bg-red-300">
        Todo
      </Box>
    </>
  );
};

const CompletedTodo = () => {
  return (
    <>
      <Box component="section" className="max-w-[800px] w-full mx-auto bg-red-300">
        CompletedTodo
      </Box>
    </>
  );
};

const ProjectTodo = () => {
  return (
    <>
      <Box component="section" className="max-w-[800px] w-full mx-auto bg-red-300">
        ProjectTodo
      </Box>
    </>
  );
};

const PersonalTodo = () => {
  return (
    <>
      <Box component="section" className="max-w-[800px] w-full mx-auto bg-red-300">
        PersonalTodo
      </Box>
    </>
  );
};

const WorkTodo = () => {
  return (
    <>
      <Box component="section" className="max-w-[800px] w-full mx-auto bg-red-300">
        WorkTodo
      </Box>
    </>
  );
};
