import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Sound from "../../public/assets/svg/sound.svg";
import Setting from "../../public/assets/svg/setting.svg";
import Image from "next/image";
import Soundscap from './soundscap'

export default function Footer() {
  const [openSoundscap,setOpenSoundscap] = useState(false)

  const ChangeState =({state})=>{
    setOpenSoundscap(state)
  }

  return (
    <div className="relative">
      <Box variant="div" className="flex justify-between items-center wfull" sx={{ color: "secondary.main" }}>
        <Box className="w-1/3">
          <Typography>Nattu Adnan (Unsplash)</Typography>
        </Box>
        <Box className="w-1/3">
          <Typography className="text-center">“Don’t be perfect, just keep getting better.”</Typography>
        </Box>
        <Box className="space-x-5 flex justify-end w-1/3">
          <Button onClick={()=>setOpenSoundscap(!openSoundscap)} className="flex  items-center">
            <Sound className="text-2xl mr-1" />
            <Typography sx={{ color: "secondary.main" }}>Soundscapes</Typography>
          </Button>
          <Button className="flex items-center">
            <Setting  className="text-2xl"/>
            <Typography sx={{ color: "secondary.main" }} className="pl-2">
              Settings
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box className={`absolute bottom-16 right-48 ${openSoundscap ? 'block' : 'hidden'}`}>
        <Soundscap state={ChangeState}/>
      </Box>
    </div>
  );
}
