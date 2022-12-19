"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Stack,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
  Radio,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
// import SvgIcon from "@material-ui/core/SvgIcon";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import BackgroundSettingTab from '../background.setting.tab'
import { useDispatch, useSelector } from "react-redux";
import { changeThemeToDarkAndLight } from "../../store/features/themeFeatures/switchtheme";
import { setFont } from '../../store/features/themeFeatures/fontsSlice'


const fonts = [
  {
   type: "Classic",
   FontFamily: 'Inter' 
  },
  {
    type: "Modern",
    FontFamily: 'Montserrat' 
   },
   {
    type: "Startup",
    FontFamily: 'Playfair Display' 
   },
   {
    type: "Retro",
    FontFamily: '' 
   },
   {
    type: "Warehouse",
    FontFamily: '' 
   },
   {
    type: "Quirky",
    FontFamily: '' 
   },
]

const swithData = [
  {
    id: 1,
    name: "Link",
  },
  {
    id: 2,
    name: "Bookmarks Bar",
  },
  {
    id: 3,
    name: "Weather",
  },
  {
    id: 4,
    name: "Greetings",
  },
  {
    id: 5,
    name: "Todo",
  },
  {
    id: 6,
    name: "Quotes",
  },
  {
    id: 7,
    name: "Search",
  },
];

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto #3F9BFC",
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
  boxShadow: "none",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return <Radio disableRipple color="default" checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />;
}

const SwitchSetting = ({ title }) => {
  const theme = useSelector((state)=>state.swithDarkmode.darkMode)
  
  return (
    <Box className="flex justify-between item-center py-2" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
      <Typography
        component="h4"
        className="text-base font-semibold flex flex-col items-center justify-center"
        sx={{ color: "secondary.light" }}
      >
        {title}
      </Typography>
      <input class={`mui-switch ${theme ? 'bg-[#44403C] border-transparent' : ''}`} type="checkbox"></input>
    </Box>
  );
};

const General = () => {

  const switchFontFamily = useSelector((state) => state.switchFont.fontFamily);


  // const [dateFormate, setDateFormate] = React.useState("Friday, Jul 8");
  const [timeFormate, setTimeFormate] = React.useState("9:18 PM");
  const [font,setFont] = React.useState()
  const [fontType,setFontType] = React.useState()

  const handleChange = (event) => {
    setDateFormate(event.target.value);
  };
  const handleTimeFormate = (event) => {
    setTimeFormate(event.target.value);
  };

  const theme = useSelector((state)=>state.swithDarkmode.darkMode)
  const dispatch = useDispatch()

  const lightMode = (i) => {
    dispatch(changeThemeToDarkAndLight(i))
  }

  const darkMode = (i) => {
    dispatch(changeThemeToDarkAndLight(i))
  }

  

  const changeFont = (font) => {
    setFontType(font.type)
    localStorage.setItem('fontFamily', JSON.stringify(font.FontFamily))
    location.reload();
  }

  const fontFamily = JSON.parse(localStorage.getItem('fontFamily'))
  // console.log("🚀 ~ file: SettingTabsLayout.js:191 ~ General ~ fontFamily", fontFamily)

  // console.log("🚀 ~ file: SettingTabsLayout.js:135 ~ General ~ theme", theme)
  const dateHandleChange = (e) =>{
    e.preventDefault()
    // setDateFormate(e.target.value)
    localStorage.setItem('dateFormate', JSON.stringify(e.target.value))
    location.reload();
  }

  return (
    <Box className="px-8 h-[calc(100%-61px)] overflow-y-scroll generalScroll">
      <Typography component="h6" className="uppercase text-lg mb-6 mt-3 font-semibold" sx={{ color: "secondary.contrastText"}}>
        Show
      </Typography>
      {swithData.map((item, i) => (
        <SwitchSetting title={item.name} key={i} />
      ))}
      <Typography component="h6" className="uppercase text-lg mb-3 mt-10 font-semibold" sx={{ color: "secondary.contrastText"}}>
        APPEARANCE
      </Typography>
      {/* Theme */}
      <Box className="flex justify-between items-center pb-[1.5rem]" sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
        <Typography
          component="h4"
          className="text-base font-semibold flex flex-col items-center justify-center"
          sx={{ color: "secondary.light" }}
        >
          Theme
        </Typography>
        <Box className="lightDarkModeSwitch">
          <FormControl>
            <RadioGroup defaultValue="light" aria-labelledby="demo-customized-radios" name="customized-radios" row>
              <Box className={`bg-transparent mr-4 p-3 rounded-lg ${theme ? '' : 'bg-[#F5F5F5] border-[#3F9BFC]'}`} onClick={()=>lightMode(false)} sx={{ border: 1, borderColor: "secondary.main"}}>
                <FormControlLabel value="light" control={<BpRadio />} label="Light" className="text-sm font-semibold" />
                <div className="bg-[#E7E5E4] p-[6px] rounded-md">
                  <div className="bg-white p-[6px] rounded-md">
                    <div className="bg-[#E7E5E4] p-[2px] rounded-md"></div>
                  </div>
                </div>
              </Box>

              <Box
                className={`p-3 rounded-lg ${theme ? 'bg-[#292524] border-[#3F9BFC]' : ''}`}
                sx={{ border: 1, borderColor: "secondary.main"}}
                onClick={()=>darkMode(true)}
              >
                <FormControlLabel value="dark" control={<BpRadio />} label="Dark" className="text-sm font-semibold" />
                <div className="bg-[#292524] p-[6px] rounded-md">
                  <div className="bg-[#44403C] p-[6px] rounded-md">
                    <div className="bg-[#78716C] p-[2px] rounded-md"></div>
                  </div>
                </div>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>

      {/* Fonts */}
      <Box
        className="flex justify-between items-center"
        sx={{ borderBottom: 1, borderColor: "secondary.main" }}
        style={{ padding: "1.5rem 0" }}
      >
        <Typography component="h4" className="text-base font-semibold " sx={{ color: "secondary.light" }}>
          Fonts
          <sup className="font-semibold text-[10px] text-[#78716C] bg-[#E7E5E4] px-2 py-1 rounded-md uppercase">
            Plus
          </sup>
        </Typography>
        <Box className="flex justify-between item-center">
          {fonts.map((font, i) => (
            <div key={i} className="flex flex-col ml-4 justify-center items-center ">
              <Box className={`p-4 px-10 rounded-lg cursor-pointer capitalize ${ font.type === fontType ? theme && 'text-white' : 'text-[#78716C]' }`} sx={{ border: 1, 
                borderColor: `${fontFamily === font.type ? 'primary.main' : 'secondary.main'}` }}
              onClick={()=>changeFont(font)}>Aa</Box>
              <Typography className="text-sm font-semibold mt-2" sx={{ color: 'primary.contrastText' }}>{font.type}</Typography>
            </div>
          ))}
        </Box>
      </Box>

      {/* Date and Time */}
      <Box className="date-and-time-formate">
        <Typography component="h4" className="text-lg font-semibold mt-10" sx={{ color: "secondary.contrastText" }}>
          Date & Time
        </Typography>

        <Box className="max-w-[310px] mt-2 _rounded">
          <Typography
            component="h4"
            className="text-base font-medium mt-4 mb-2"
            sx={{ color: "secondary.light" }}
          >
            Date Formate
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={JSON.parse(localStorage.getItem('dateFormate'))}
              onChange={dateHandleChange}
            >
              <MenuItem value='dddd, MMMM YYYY' className="flex justify-between text-xs font-medium"> Friday, Jul 8 </MenuItem>
              <MenuItem value='YYYY-MM-DD' className="flex justify-between text-xs font-medium"> 2022-07-08</MenuItem>
              <MenuItem value='DD/MM/YYYY' className="flex justify-between text-xs font-medium"> 08/07/2022</MenuItem>
              <MenuItem value='MM/DD/YYYY' className="flex justify-between text-xs font-medium"> 07/08/2022</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="max-w-[310px] mt-2 mb-10 ">
          <Typography
            component="h4"
            className="text-base font-medium mt-4 mb-2"
            sx={{ color: "secondary.light" }}
          >
            Time Formate
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeFormate}
              onChange={handleTimeFormate}
            >
              <MenuItem value={10} className="flex justify-between text-xs font-medium"> 9:18 PM </MenuItem>
              
            </Select>
          </FormControl>
        </Box>

      </Box>
    </Box>
  );
};

const Background = () => {
  return (
    <Box className="px-8 h-[calc(100%-61px)] overflow-y-scroll generalScroll rounded-lg">
      <BackgroundSettingTab/>
    </Box>
  );
};

const TabPanel = (props) => {
  // console.log("🚀 ~ file: SettingTabsLayout.js:11 ~ TabPanel ~ props", props);
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

const SettingTabsLayout = (props) => {
  console.log(props);
  const {
    homeModuleData: { panelTitle, panelList },
    children,
    closeSetting,
  } = props;

  const [value, setValue] = useState(1);
  const [isFullWidthPanel, setIsFullWidthPanel] = useState(true);

  const handleChange = (event) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        minHeight: "500px",
        borderRadius: 1.5,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: isFullWidthPanel ? "218px" : "100px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mx={isFullWidthPanel ? 2 : 1}>
          <Typography
            className="mb-5"
            variant={isFullWidthPanel ? "h5" : "h6"}
            fontWeight={600}
            textTransform="capitalize"
          >
            {panelTitle}
          </Typography>
        </Stack>
        {panelList.map((tabPanel, index) => (
          <Tab
            key={index}
            className={`tablist`}
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
              <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
                {isFullWidthPanel && (
                  <Typography textTransform="capitalize" fontWeight={500} sx={{ color: "secondary.light" }}>
                    {tabPanel.title}
                  </Typography>
                )}
              </Stack>
            }
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={value} index={1} className="w-full p-0 TabPanel">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="p-0">
          <Box className="flex justify-between item-center w-full ">
            <Typography className="text-lg font-semibold" sx={{ color: "secondary.light" }}>General</Typography>
            <CloseIcon onClick={() => closeSetting()} className="cursor-pointer" />
          </Box>
        </Box>
        <General />
      </TabPanel>

      <TabPanel value={value} index={2} className="w-full p-0 TabPanel">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="p-0">
          <Box className="flex justify-between item-center w-full ">
            <Typography className="text-lg font-semibold" sx={{ color: "secondary.light" }}>Background</Typography>
            <CloseIcon onClick={() => closeSetting()} className="cursor-pointer" />
          </Box>
        </Box>
        <Background />
      </TabPanel>
    </Box>
  );
};

export default SettingTabsLayout;
