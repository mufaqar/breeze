import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { settingModuleData } from "../mockData/setting/image-tab";
import { settingModuleVideoData } from "../mockData/setting/video-tab";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import VideoIcon from "../../public/assets/svg/video.svg";
import { solidColors } from "../mockData/setting/solidcolors";
import FileUpload from "./fileUpload";
import { changeBg } from "../store/features/themeFeatures/changebackgroundSlice";
import DoneIcon from "@mui/icons-material/Done";
import { relative } from "path";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  // console.log('solidColors', solidColors)
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
  const backgroundUrl = useSelector((state) => state.changeBackground.backgroundImageURL);
  const [value, setValue] = React.useState(0);
  const [activeImage, setActiveImage] = React.useState(backgroundUrl);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ChangeBackgroundImage = (ImagePath) => {
    // console.log('ImagePath', ImagePath);
    setActiveImage(ImagePath);
    dispatch(changeBg(ImagePath));
  };

  console.log("activeImage", activeImage);
  //   console.log("🚀 ~ file: layout.tsx:28 ~ RootLayout ~ backgroundUrl", backgroundUrl)

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs backgroundTabs example p-0">
          <Tab
            label="Photo"
            {...a11yProps(0)}
            className="text-base font-semibold capitalize"
            sx={{ color: "secondary.contrastText" }}
          />
          <Tab
            label="Video"
            {...a11yProps(1)}
            className="text-base font-semibold capitalize"
            sx={{ color: "secondary.contrastText" }}
          />
          <Tab
            label="Color"
            {...a11yProps(2)}
            className="text-base font-semibold capitalize"
            sx={{ color: "secondary.contrastText" }}
          />
          <Tab
            label="My gallery"
            {...a11yProps(3)}
            className="text-base font-semibold capitalize"
            sx={{ color: "secondary.contrastText" }}
          />
        </Tabs>
      </Box>
      {/* image background */}
      <TabPanel value={value} index={0} className="tabPanel">
        <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-6">
          {settingModuleData.map((image, i) => {
            return (
              <Box
                key={i}
                className="image-container cursor-pointer _relative"
                onClick={() => ChangeBackgroundImage(image?.imagePath)}
              >
                {image?.imagePath && (
                  <Image
                    src={image?.imagePath}
                    alt="background-image"
                    layout="fill"
                    className={`image ${activeImage === image?.imagePath && '_active-bg'}`}
                  />
                )}
                {activeImage === image?.imagePath && (
                  <div
                    className={`absolute bg-[#3F9BFC] p-[2px] right-4 top-4 rounded-full text-white flex justify-center items-center flex-col`}
                  >
                    <DoneIcon />
                  </div>
                )}
              </Box>
            );
          })}
        </Box>
      </TabPanel>
      {/* video background */}
      <TabPanel value={value} className="_videobg" index={1}>
        <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-6">
          {settingModuleVideoData.map((video, i) => {
            return (
              <div className="relative" key={i}>
                <div key={i} className="image-container cursor-pointer">
                  {video?.imagePath && (
                    <Image src={video?.imagePath} alt="background-image" layout="fill" className={"image "} />
                  )}
                </div>
                <div
                  className={`bg-black/30 absolute top-0 flex cursor-pointer justify-center items-center rounded-[10px] videobg right-0 left-0 bottom-[6px] ${activeImage === video?.videolink && '_active-bg'}`}
                  onClick={() => ChangeBackgroundImage(video?.videolink)}
                >
                  <VideoIcon />
                </div>
                {activeImage === video?.videolink && (
                  <div
                    className={`absolute bg-[#3F9BFC] p-[2px] right-3 top-3 rounded-full text-white flex justify-center items-center flex-col`}
                  >
                    <DoneIcon />
                  </div>
                )}
              </div>
            );
          })}
        </Box>
      </TabPanel>
      {/* color background */}
      <TabPanel value={value} index={2} className="_solidColor">
        <Box className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3 lg:gap-6">
          {solidColors.map((color, i) => {
            return (
              <div
                key={i}
                className="image-container cursor-pointer _relative"
                onClick={() => ChangeBackgroundImage(color?.colorCode)}
              >
                {color?.colorCode && (
                  <div className={`px-10 py-10 solid rounded-xl ${activeImage === color?.colorCode && '_active-bg'}`} style={{ background: color?.colorCode }}></div>
                )}
                {activeImage === color?.colorCode && (
                  <div
                    className={`absolute bg-[#3F9BFC] p-[2px] right-2 top-2 rounded-full text-white flex justify-center items-center flex-col`}
                  >
                    <DoneIcon />
                  </div>
                )}
              </div>
            );
          })}
        </Box>
      </TabPanel>
      {/* custom background */}
      <TabPanel value={value} index={3} className="_customassets">
        <FileUpload />
      </TabPanel>
    </Box>
  );
}
