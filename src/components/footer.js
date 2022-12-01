import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import sound from "../../public/assets/svg/sound.svg";
import setting from "../../public/assets/svg/setting.svg";
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
          <IconButton onClick={()=>setOpenSoundscap(!openSoundscap)} >
            <Image src={sound} alt="sound" width={40} height={40} />
            <Typography sx={{ color: "secondary.main" }}>Soundscapes</Typography>
          </IconButton>
          <IconButton>
            <Image src={setting} alt="sound" width={25} height={25} />
            <Typography sx={{ color: "secondary.main" }} className="pl-2">
              Settings
            </Typography>
          </IconButton>
        </Box>
      </Box>
      <Box className={`absolute bottom-16 right-48 ${openSoundscap ? 'block' : 'hidden'}`}>
        <Soundscap state={ChangeState}/>
      </Box>
    </div>
  );
}
