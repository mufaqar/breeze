import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  MenuItem,
  Paper,
  Select,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../theme/themes";
import Header from "../header";
import { neutral, success, warning, danger } from "../../theme/colors";
import ClearIcon from "@mui/icons-material/Clear";
import { sounscapeMesssage } from "../../store/features/soundscape/soundScapeSlice";

export default function Layout(props) {
  const backgroud_image = useSelector((state) => state.changeBackground.backgroundImageURL);
  // console.log("🚀 ~ file: index.js:7 ~ Layout ~ backgroud_image", backgroud_image);
  const useDarkTheme = useSelector((state) => state.swithDarkmode.darkMode);
  const Messsage = useSelector((state) => state.soundscape.message);

  const dispatch = useDispatch()
  const fontFamily = localStorage.getItem("fontFamily");

  // *********************
  // theming
  // *********************

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#3F9BFC",
            light: "#212C39",
            dark: neutral[90],
            contrastText: neutral[70],
          },
          secondary: {
            main: neutral[70],
            light: neutral[0],
            dark: neutral[90],
            contrastText: neutral[60],
          },
        },

        typography: {
          fontFamily: fontFamily,
        },

        components: {
          MuiSwitch: {
            styleOverrides: {
              colorPrimary: {
                "&.Mui-checked": {
                  color: "white",
                },
              },
              track: {
                display: "none",
                height: 30,
              },
            },
          },
        },
      }),
    [fontFamily]
  );

  const lightTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: {
            main: "#3F9BFC",
            dark: neutral[90],
            light: neutral[20],
            contrastText: neutral[10],
          },
          secondary: {
            main: neutral[20],
            light: neutral[90],
            dark: neutral[0],
            contrastText: neutral[60],
          },
        },

        typography: {
          fontFamily: fontFamily,
        },

        components: {
          MuiSwitch: {
            styleOverrides: {
              switchBase: {
                color: "#1C1917",
              },
              track: {
                display: "none",
                height: 30,
              },
            },
          },
        },
      }),
    [fontFamily]
  );

  // ***xx***************xx***
  // theming xx
  // ****xx**************xx***

  const handleSoundscapeMessage =()=> {
    dispatch(sounscapeMesssage(false))
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
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
            muted
            autoplay="true"
            loop="true"
          ></video>
          <div class="main-text px-16">{props.children}</div>
        </section>
      )}
      {Messsage && (
        <Paper className="p-2 px-4 rounded-lg absolute top-28 right-1/2 transform translate-x-1/2 flex items-center">
          <Typography className="text-base font-semibold">You can play up to 5 sounds at the same time</Typography>
          <ClearIcon className="ml-4 w-5 text-gray-400 cursor-pointer" onClick={handleSoundscapeMessage}/>
        </Paper>
      )}
    </ThemeProvider>
  );
}
