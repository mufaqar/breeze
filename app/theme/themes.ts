"use client";

import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import orange from "@mui/material/colors/orange";


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[500]
    },
    secondary: {
      light: red[500],
      main: red[200], 
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    secondary: {
      light: red[500],
      main: red[700],
    },
  },
});
