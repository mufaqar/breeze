import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {settingModuleData} from '../mockData/setting/image-tab'
import Image from 'next/image'
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BackgroundSettingTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ChangeBackgroundImage = (ImagePath) =>{
    console.log(ImagePath)
  }

  const backgroundUrl = useSelector((state) => state.changeBackground.backgroundImageURL)
  console.log("🚀 ~ file: layout.tsx:28 ~ RootLayout ~ backgroundUrl", backgroundUrl)

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs backgroundTabs example p-0">
          <Tab label="Photo" {...a11yProps(0)} className="text-base font-semibold capitalize" />
          <Tab label="Video" {...a11yProps(1)} className="text-base font-semibold capitalize" />
          <Tab label="Color" {...a11yProps(2)} className="text-base font-semibold capitalize" />
          <Tab label="My gallery" {...a11yProps(3)} className="text-base font-semibold capitalize" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="tabPanel">
        <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-6">
            {
                settingModuleData.map((image,i)=>{
                    return(
                       <div key={i} className="image-container" onClick={()=>ChangeBackgroundImage(image?.imagePath)}>
                            {image?.imagePath && <Image src={image?.imagePath} alt="background-image" layout="fill" className={'image '}/>}
                       </div>
                    )
                })
            }
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
}
