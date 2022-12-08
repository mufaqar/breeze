import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Sound from "../../public/assets/svg/sound.svg";
import Setting from "../../public/assets/svg/setting.svg";
import Image from "next/image";
import Soundscap from './soundscap'
import Campfire from '../../public/assets/svg/Campfire.svg'
import Beach from '../../public/assets/svg/Beach.svg'
import Train from '../../public/assets/svg/Train.svg'
import Rainfall from '../../public/assets/svg/Rainfall.svg'
import Forest from '../../public/assets/svg/Forest.svg'
import Garden from '../../public/assets/svg/Garden.svg'
import Cafe from '../../public/assets/svg/Cafe.svg'
import Thunderstorm from '../../public/assets/svg/Thunderstorm.svg'
import Creek from '../../public/assets/svg/Creek.svg'
import Office from '../../public/assets/svg/Office.svg'
import Random from '../../public/assets/svg/Random.svg'
import Custom from '../../public/assets/svg/Custom.svg'


export default function Footer() {
  const [openSoundscap,setOpenSoundscap] = useState(false)

  const ChangeState =({state})=>{
    setOpenSoundscap(state)
  }

  const SoundScapesData = [
    {
      id:1,
      name: 'Campfire',
      icon: <Campfire/>
    },
    {
      id:2,
      name: 'Beach',
      icon:<Beach/>
    },
    {
      id:3,
      name: 'Train',
      icon: <Train/>
    },
    {
      id:4,
      name: 'Rainfall',
      icon:<Rainfall/>
    },
    {
      id:5,
      name: 'Forest',
      icon: <Forest/>
    },
    {
      id:6,
      name: 'Garden',
      icon:<Garden/>
    },
    {
      id:7,
      name: 'Cafe',
      icon:<Cafe/>
    },
    {
      id:8,
      name: 'Thunderstorm',
      icon:<Thunderstorm/>
    },
    {
      id:9,
      name: 'Creek',
      icon:<Creek/>
    },
    {
      id:10,
      name: 'Office',
      icon:<Office/>
    },
    {
      id:11,
      name: 'Random',
      icon:<Random/>
    },
    {
      id:12,
      name: 'Custom',
      icon:<Custom/>
    }
  ];

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
        <Soundscap state={ChangeState} data={SoundScapesData}/>
      </Box>
    </div>
  );
}
