import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import Image from "next/image";

export default function CustomIconButton({icon,text, width, height}) {
    
  return (
    <Box className="flex items-center cursor-pointer">
      <Image src={icon} alt="sound" width={width} height={height} />
      <Typography sx={{ color: "secondary.contrastText" }} className="pl-2"> {text} </Typography>
    </Box>
  );
}
