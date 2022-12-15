import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../theme/themes";
import Header from "../header";



export default function Layout(props) {
  const backgroud_image = useSelector((state) => state.changeBackground.backgroundImageURL);
  console.log("🚀 ~ file: index.js:7 ~ Layout ~ backgroud_image", backgroud_image);
  const useDarkTheme = useSelector((state) => state.swithDarkmode.darkMode);
  

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme} >
     
        <CssBaseline />
        {backgroud_image.src || backgroud_image.includes("#") ? (
          <Box
            component="main"
            style={{ background: backgroud_image.src ? `url(${backgroud_image.src})` : backgroud_image }}
            className={`h-screen relative w-full _mianBgProperties px-16`}
          >
            {props.children}
          </Box>
        ) : (
          <section id="main">
            <video
              src={backgroud_image}
              // src="https://res.cloudinary.com/oscarjite/video/upload/v1662154978/walking_on_the_moon_j5tytl.mp4"
              muted
              autoplay="true"
              loop="true"
            ></video>
            <div class="main-text px-16">{props.children}</div>
          </section>
        )}
    
    </ThemeProvider>
  );
}
