import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../theme/themes";


export default function Layout(props) {
  const backgroud_image = useSelector((state) => state.changeBackground.backgroundImageURL);
  // console.log("🚀 ~ file: index.js:7 ~ Layout ~ backgroud_image", backgroud_image);
  const useDarkTheme = useSelector((state)=>state.swithDarkmode.darkMode)


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
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
    <CssBaseline />
    <Box
      component="main"
      style={{ background: backgroud_image.src ? `url(${backgroud_image.src})` : backgroud_image }}
      className={`h-screen relative w-full _mianBgProperties px-16`}
    >
      {props.children}
    </Box>
    </ThemeProvider>
    // <>
    //   <div class="bloc-video">
    //     <video autoplay muted loop src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></video>
    //     <div class="content-video">{props.children}</div>
    //   </div>
    // </>
  );
}
