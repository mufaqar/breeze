"use client";

import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import { neutral, success, warning, danger } from './colors'


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#3F9BFC'
    },
    secondary: {
      main: neutral[90],
      light: neutral[30],
      contrastText: neutral[0],
    }
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
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#3F9BFC'
    },
    secondary: {
      main: neutral[0],
      contrastText: neutral[90],
    }

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
