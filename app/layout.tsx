"use client";

import "./globals.css";
import { darkTheme, lightTheme } from "./theme/themes";

import { ThemeProvider, CssBaseline, Switch, FormControlLabel, Box, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
//import Header from "../app/components/header";
import { loginBg } from "../public/assets";
import Image from "next/image";
import sunny from '../public/assets/images/sun.png'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let [useDarkTheme, setUseDarkTheme] = useState(false);
  let [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme);

  const changeThemeHandler = (target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue);
    setTheme(currentValue ? darkTheme : lightTheme);
  };
  

  return (
    <html lang="en">
      <head>
        <title>Breeze</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Breeze" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={theme}>
        <body id="__next">
          <CssBaseline />
          {/* header section  */}
          <Box
            component="main"
            sx={{ backgroundImage: `url(${loginBg.src})` }}
            className="h-screen relative w-full bg-cover bg-no-repeat px-16 "
          >
            <Box className="pt-5 flex justify-between">
              <Box>
                <Typography variant="h6" className="font-semibold text-2xl" sx={{ color: "secondary.main" }}>
                  Breeze
                </Typography>
              </Box>
              <Box className="flex justify-center items-center switch">
                <Box className="flex justify-center items-center flex-col pt-3">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={useDarkTheme}
                        inputProps={{ "aria-label": "Dark Mode" }}
                        onChange={(target, value) => changeThemeHandler(target, value)}
                        
                      ></Switch>
                    }
                    labelPlacement="start"
                    label=""
                    className="rounded-full"
                    sx={{ bgcolor: "secondary.main" }}
                  />
                  <Typography

                    className="text-sm text-center font-normal block pl-7 mt-1"
                    sx={{ color: "secondary.main" }}
                  >
                    {useDarkTheme ? "Dark" : "Light"}
                  </Typography>
                </Box>
                {/* weather   */}
                <Box className="ml-8">
                  <Typography variant="h6" sx={{ color: "secondary.main" }} className="text-sm">
                    <Image src={sunny} alt="sunny" width={25} height={25} className="mr-2" />
                    <span className="text-3xl font-semibold">
                      32<sup className="font-normal">°</sup>
                    </span>
                    Sunny
                  </Typography>
                  <Typography

                    sx={{ color: "secondary.main" }}
                    className="text-[12px] leading-tight flex justify-end"
                  >
                    New York, USA
                  </Typography>
                </Box>
              </Box>
            </Box>

            {children}
          </Box>
          {/* xx header section  xx */}

        </body>
      </ThemeProvider>
    </html>
  );
}
