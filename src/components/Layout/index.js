import { Box } from "@mui/material";
import { loginBg } from "../../../public/assets/export";
import { useSelector } from "react-redux";


export default function Layout(props) {
  const backgroud_image = useSelector((state) => state.changeBackground.backgroundImageURL);
  console.log("🚀 ~ file: index.js:7 ~ Layout ~ backgroud_image", backgroud_image);

  const Videobackground = () => {
    return (
      <div class="bg-video-wrap">
        <video
          src="https://video-previews.elements.envatousercontent.com/files/2ce8819e-7dd4-40a2-9ad9-4720e4a9d90b/video_preview_h264.mp4"
          loop
          muted
          autoplay
        ></video>
        <div class="overlay"></div>
        <h1>Fullscreen video background</h1>
      </div>
    );
  };

  return (
    <Box
      component="main"
      // sx={{ backgroundImage: `url(${backgroud_image.src})`}}
      // sx={{ backgroundImage: `url(${loginBg.src})` }}
      style={{ background: backgroud_image.src ? `url(${backgroud_image.src})` : backgroud_image }}
      className={`h-screen relative w-full _mianBgProperties px-16`}
    >
      {props.children}
    </Box>
    // <>
      // <div class="wrapper">
      // <video src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" loop muted autoplay /> 
      // </div>

      // <div class="Videocontent">
      // {props.children}
      // </div>

    // </>
  );
}
