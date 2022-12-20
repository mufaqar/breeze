import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sunny } from "../../public/assets/export";
import { changeThemeToDarkAndLight } from "../store/features/themeFeatures/switchtheme";

export default function Header() {
  let [useDarkTheme, setUseDarkTheme] = useState(false);
  const dispatch = useDispatch();

  const changeThemeHandler = (target, currentValue) => {
    setUseDarkTheme(currentValue);
  };

  if (useDarkTheme) {
    dispatch(changeThemeToDarkAndLight(true));
  } else {
    dispatch(changeThemeToDarkAndLight(false));
  }

  const weatherhideshow = useSelector((state) => state.hideShow.weather);

  return (
    <>
      <Box className="pt-5 flex justify-between">
        <Box>
          <Typography variant="h6" className="font-semibold text-2xl" sx={{ color: "secondary.dark" }}>
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
              sx={{ bgcolor: "secondary.dark" }}
            />
            <Typography className="text-sm text-center font-normal block pl-7 mt-1" sx={{ color: "secondary.dark" }}>
              {useDarkTheme ? "Dark" : "Light"}
            </Typography>
          </Box>
          {/* weather   */}
          {!weatherhideshow && (
            <Box className="ml-8">
              <Typography variant="h6" sx={{ color: "secondary.dark" }} className="text-sm">
                <Image src={sunny} alt="sunny" width={25} height={25} className="mr-2" />
                <span className="text-3xl font-semibold">
                  32<sup className="font-normal">°</sup>
                </span>
                Sunny
              </Typography>
              <Typography sx={{ color: "secondary.dark" }} className="text-[12px] leading-tight flex justify-end">
                New York, USA
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
