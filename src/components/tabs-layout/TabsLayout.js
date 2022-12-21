"use client"

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Stack } from '@mui/material';
// import SvgIcon from "@material-ui/core/SvgIcon";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const homeModuleData = {
  panelTitle: "todo",
  panelList: [
      {
          icon: <HomeOutlinedIcon/>,
          title: "home",
          value: 3
      },
      {
          icon: <DateRangeOutlinedIcon/>,
          title: "todo",
          value: 2
      },
      {
          icon: <CheckBoxOutlinedIcon/>,
          title: "completed",
          value: 3
      },

  ]
}


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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `verical-tab-${index}`,
    'aria-controls': `verical-tabpanel-${index}`,
  };
}

const TabsLayout = (props) => {
  // console.log(props);
  const { panelTitle, panelList } = homeModuleData
  const { children } = props;
  console.log(children);

  const [value, setValue] = useState(1);
  const [isFullWidthPanel, setIsFullWidthPanel] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useSelector((state)=>state.swithDarkmode.darkMode)

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", minHeight: "500px", borderRadius: 1.5, mt: 4.2 }}
    className="h-[calc(100vh-235px)]"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={theme ? 'darkTodoTabs' : 'lightTodoTabs'}
        sx={{
          borderRight: 1, borderColor: 'divider', width: isFullWidthPanel ? "218px" : "100px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={2} mx={isFullWidthPanel ? 2 : 1}>
          <Typography variant={isFullWidthPanel ? 'h5' : 'h6'} fontWeight={600} textTransform="capitalize">{panelTitle}</Typography>
          <Stack alignItems="center" sx={{ cursor: "pointer" }} onClick={() => setIsFullWidthPanel(!isFullWidthPanel)}>
            {isFullWidthPanel ? <KeyboardDoubleArrowLeft sx={{ color: "gray" }} /> : <KeyboardDoubleArrowRight sx={{ color: "gray" }} />}
          </Stack>
        </Stack>


        {panelList.map((tabPanel, index) => (
          <Tab key={index} sx={{
            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: isFullWidthPanel ? "start" : "center", gap: 1, p: 1, borderRadius: "8px", mx: 2, my: 0.5, minHeight: "auto", minWidth: !isFullWidthPanel && "auto",
          }}
            icon={tabPanel.icon}
            label={
              <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center" className="">
                {isFullWidthPanel && <Typography textTransform="capitalize" fontWeight={500}>{tabPanel.title}</Typography>}
                <Typography color="#78716C" py={0.5} className={`rounded-md tabValue`} px={1}>{tabPanel.value}</Typography>
              </Stack>
            }
            {...a11yProps((index))}
          />
        ))}
      </Tabs>

      {
        children.map((item, index) => (
          <TabPanel value={value} index={index + 1} key={index}>
            {item}
          </TabPanel>
        ))
      }
      {/* <TabPanel value={value} index={1}>
        Item One sdf
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}

export default TabsLayout;