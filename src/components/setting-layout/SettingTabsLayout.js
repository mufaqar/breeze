"use client"

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Stack } from '@mui/material';
// import SvgIcon from "@material-ui/core/SvgIcon";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import Image from 'next/image';

const TabPanel = (props) => {
  console.log("🚀 ~ file: SettingTabsLayout.js:11 ~ TabPanel ~ props", props)
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

const SettingTabsLayout = (props) => {
  // console.log(props);
  const { homeModuleData: { panelTitle, panelList }, children } = props;
  console.log(children);

  const [value, setValue] = useState(1);
  const [isFullWidthPanel, setIsFullWidthPanel] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", minHeight: "500px", borderRadius: 1.5, mt: 4.2 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1, borderColor: 'divider', width: isFullWidthPanel ? "218px" : "100px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mx={isFullWidthPanel ? 2 : 1}>
          <Typography className='mb-5' variant={isFullWidthPanel ? 'h5' : 'h6'} fontWeight={600} textTransform="capitalize">{panelTitle}</Typography>
          
        </Stack>
        {panelList.map((tabPanel, index) => (

          <Tab key={index} className="tablist hover:bg-blue-100" sx={{
            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: isFullWidthPanel ? "start" : "center", gap: 1, p: 1, borderRadius: "8px", mx: 2, my: 0.5, minHeight: "auto", minWidth: !isFullWidthPanel && "auto",
          }}
            icon={tabPanel.icon}
            label={
              <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
                {isFullWidthPanel && <Typography textTransform="capitalize" fontWeight={500}>{tabPanel.title}</Typography>}
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
     
    </Box>
  );
}

export default SettingTabsLayout;