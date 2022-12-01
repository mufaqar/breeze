import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Stack } from '@mui/material';
// import SvgIcon from "@material-ui/core/SvgIcon";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import Image from 'next/image';

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
          <Typography variant={isFullWidthPanel ? 'h5' : 'h6'} fontWeight={600} textTransform="capitalize">{panelTitle}</Typography>
          <Stack alignItems="center" sx={{ cursor: "pointer" }} onClick={() => setIsFullWidthPanel(!isFullWidthPanel)}>
            {isFullWidthPanel ? <KeyboardDoubleArrowLeft sx={{ color: "gray" }} /> : <KeyboardDoubleArrowRight sx={{ color: "gray" }} />}
          </Stack>
        </Stack>
        {panelList.map((tabPanel, index) => (

          <Tab key={index} sx={{
            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: isFullWidthPanel ? "start" : "center", gap: 1, p: 1, borderRadius: "8px", mx: 2, my: 0.5, border: "solid red", minHeight: "auto", minWidth: !isFullWidthPanel && "auto",
          }}
            icon={
              // <SvgIcon component={tabPanel.icon} />
              <Image style={{ color: "red", margin: 0 }} src={tabPanel.icon} alt={tabPanel.title} width={isFullWidthPanel ? 20 : 25} height={isFullWidthPanel ? 20 : 25} />
            }
            label={
              <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
                {isFullWidthPanel && <Typography textTransform="capitalize" fontWeight={500}>{tabPanel.title}</Typography>}
                <Typography backgroundColor="#F5F5F5" color="#78716C" py={0.25} px={0.5}>{tabPanel.value}</Typography>
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