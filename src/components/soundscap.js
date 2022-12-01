import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
// import Campfire from "../../../public/assets/images/Campfire.png"
import Image from "next/image";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";

export default function Soundscap({ state }) {
  return (
    <>
      <Paper className="w-[500px]">
        {/* Box Header */}
        <Box className="flex justify-between items-center border bg-gray-50 p-4">
          <Typography className="font-bold text-[17px]">Soundscapes</Typography>
          <RemoveIcon onClick={() => state(false)} className="cursor-pointer" />
        </Box>
        <Box className="grid grid-cols-4 mt-2 gap-4 justify-center items-center p-4 pb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
            <Box className="flex justify-center items-center flex-col cursor-pointer" key={i}>
              <DirectionsSubwayIcon />
              <Typography className="text-[12px] mt-2" sx={{ color: "secondary.contrastText" }}>
                Campfire
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </>
  );
}
