import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { SvgIcon } from "@mui/material";
import sound from "../../public/assets/svg/sound.svg";
import setting from "../../public/assets/svg/setting.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <Box variant="footer" className="flex  items-center absolute bottom-4 px-16 w-full" sx={{ color: "secondary.main" }}>
      <Box className="w-1/3">
        <Typography>Nattu Adnan (Unsplash)</Typography>
      </Box>
      <Box className="w-1/3">
        <Typography className="text-center">“Don’t be perfect, just keep getting better.”</Typography>
      </Box>
      <Box className="space-x-5 flex justify-end w-1/3">
        <IconButton>
          <Image src={sound} alt="sound" width={40} height={40} />
          <Typography sx={{color:'secondary.main'}}>Soundscapes</Typography>
        </IconButton>
        <IconButton>
          <Image src={setting} alt="sound" width={25} height={25} />
          <Typography sx={{color:'secondary.main'}} className="ml-2">Settings</Typography>
        </IconButton>
      </Box>
    </Box>
  );
}
