import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sunny } from "../../public/assets/export";
import { changeThemeToDarkAndLight } from "../store/features/themeFeatures/switchtheme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

  const router = useRouter();
  const pathname = usePathname();
  console.log("🚀 ~ file: header.js:27 ~ Header ~ router", pathname);
  const weatherhideshow = useSelector((state) => state.hideShow.weather);

  return (
    <>
      <Box className="pt-5 flex justify-between">
        <Box className="w-1/3">
          <Typography variant="h6" className="font-semibold text-2xl" sx={{ color: "secondary.dark" }}>
            Breeze
          </Typography>
        </Box>
        {/* tabs */}
        <Box className="">
          <Box className="flex justify-center items-cente p-[6px] bg-white/20 _border-white rounded-full">
           
            <Link href="/">
              <Box
                className={`bg-white text-black rounded-full px-5 py-2 flex flex-col justify-center items-center cursor-pointer ${
                  pathname === "/" ? "bg-white text-black" : "bg-transparent"
                }`}
              >
                <div className="flex items-center space-x-1">
                  <HomeOutlinedIcon />
                  {
                    pathname === '/' && <span className="text-sm font-semibold">Home</span>
                  }
                </div>
              </Box>
            </Link>
            <Link href="/pomodoro">
            <Box
              className={`bg-white text-black rounded-full px-5 py-2 flex flex-col justify-center items-center cursor-pointer ${
                pathname === "/pomodoro" ? "bg-white text-black" : "bg-transparent"
              }`}
            >
              <div className="flex items-center space-x-1">
                <TimerOutlinedIcon />
                {
                  pathname === '/pomodoro' && <span className="text-sm font-semibold">Pomodoro</span>
                }
              </div>
            </Box>
          </Link>
            <Link href="/todo">
              <Box
                className={`bg-white text-black rounded-full px-5 py-2 flex flex-col justify-center items-center cursor-pointer ${
                  pathname === "/todo" ? "bg-white text-black" : "bg-transparent"
                }`}
              >
                <div className="flex items-center space-x-1">
                  <TaskAltOutlinedIcon />
                  {
                    pathname === '/todo' && <span className="text-sm font-semibold">Todo</span>
                  }
                </div>
              </Box>
            </Link>
          </Box>
        </Box>

        <Box className="flex justify-end items-center w-1/3 switch">
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
