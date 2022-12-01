import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "../components/footer";
import SearchEngine from '../components/searchEngine'
import Time from "../components/date-and-time/time"
import DateComp from "../components/date-and-time/date";
import AppList from "../components/appList"

export default function HomeComp() {

  return (
    <>
      <Box component="main" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2">
        <Box className="flex justify-center flex-col items-center">
          <Time />
          <Typography className="text-[32px] mt-4 font-medium" sx={{ color: "secondary.main" }}>
            Good evening, {`ilhhasap`}
          </Typography>
          <DateComp />
          <SearchEngine />
          <AppList />
        </Box>
      </Box>

    </>
  );
}
