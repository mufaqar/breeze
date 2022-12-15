"use client";

import { createTheme } from "@mui/material/styles";
import { neutral, success, warning, danger } from './colors'
import { useSelector } from "react-redux";
import { useEffect } from "react";

const font = JSON.parse(localStorage.getItem("fontFamily") || "") 
console.log("🚀 ~ file: themes.ts:9 ~ font", font)

export const darkTheme = createTheme({
  
  palette: {
    mode: "dark",
    primary: {
      main: '#3F9BFC',
      light: '#212C39',
      dark:  neutral[90],
      contrastText: neutral[40],
    },
    secondary: {
      main: neutral[70],
      light: neutral[0],
      dark:  neutral[90],
      contrastText: neutral[60],
    }
  },
  typography: {
    fontFamily: [`${font}`].join(','),
  },


  components: {
    MuiSwitch: {
      styleOverrides: {
        colorPrimary: {
          "&.Mui-checked": {
            color: "white"
          }
        },
        track: {
          display: 'none',
          height: 30,
        }
      }
    }
  },

  
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#3F9BFC',
      dark:  neutral[90],
      light: neutral[20],
    },
    secondary: {
      main: neutral[20],
      light: neutral[90],
      dark:  neutral[0],
      contrastText: neutral[60],
    }

  },
  typography: {
    fontFamily: [`${font}`].join(','),
  },

  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#1C1917"
        },
        track: {
          display: 'none',
          height: 30,
        }
      }
    }
  }
});
