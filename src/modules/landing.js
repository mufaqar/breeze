"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import SearchEngine from "../components/searchEngine";
import Time from "../components/date-and-time/time";
import DateComp from "../components/date-and-time/date";
import { useSelector } from "react-redux";

export default function Landing() {
  const greetingshideshow = useSelector((state) => state.hideShow.greetings);
  return (
    <>
      <Box component="main" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2">
        <Box className="flex justify-center flex-col items-center">
          <Time />
          {!greetingshideshow && (
            <Typography className="text-[32px] mt-4 font-medium" sx={{ color: "secondary.dark" }}>
              Good evening, {`ilhhasap`}
            </Typography>
          )}
          <DateComp />
          <SearchEngine />
        </Box>
      </Box>
    </>
  );
}
