import { Button, Paper, Slider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import Volumeicon from "../../public/assets/svg/volumeicon.svg";


export default function Soundscap({ state, data }) {
  
  const [value, setValue] = useState(30);
  const [generalValue, setGeneralValue] = useState(30);
  const [activeVolumeSlider, setActiveVolumeSlider] = useState(null);
  const activeSound = [];
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleGeneralChange = (event, newValue) => {
    setGeneralValue(newValue);
  };
  const ShowVolumeSlider = (id) => {
    // activeSound.indexOf(id) !== -1 && alert("Value exists!")
    

    if (!activeSound.includes(id)) {
      if (activeSound.length >= 3) {
         activeSound.shift();
      }
      activeSound.push(id); //adding to array because value doesnt exists
    } else {
      activeSound.splice(activeSound.indexOf(id), 1); //deleting
    }
    console.log(activeSound);
    
  };

  return (
    <>
      <Paper className="w-[500px]">
        {/* Box Header */}
        <Box className="flex justify-between h-[65px] items-center text-gray-900 _borderBottom p-4" sx={{borderBottom:1, borderColor:"primary.light"}}>
          <Typography className="font-bold text-[17px]" sx={{color: "secondary.contrastText"}}>Soundscapes</Typography>

          <Box className="flex justify-between items-center space-x-4">
            {activeVolumeSlider && (
              <div className="bg-gray-100 p-3 rounded-full flex items-center justify-between">
                <Volumeicon />
              </div>
            )}
            {activeVolumeSlider && (
              <Slider
                aria-label="Volume"
                value={generalValue}
                onChange={handleGeneralChange}
                className="w-36"
                sx={{ color: "primary.dark" }}
              />
            )}
            <RemoveIcon onClick={() => state(false)} className="cursor-pointer" sx={{ color: "secondary.contrastText" }} />
          </Box>
        </Box>
        <Box className="grid grid-cols-4 mt-2 gap-4 justify-center items-center p-4 pb-6">
          {data.map((item, i) => (
            <Box
              className="flex justify-center items-center flex-col  cursor-pointer"
              key={i}
              onClick={() => ShowVolumeSlider(i)}
            >
              <i class="h-8">{item.icon}</i>
              {activeVolumeSlider === i ? (
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
              ) : (
                <Typography className="text-[12px]  h-[22px] mt-2" sx={{ color: "secondary.contrastText" }}>
                  {item.name}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Paper>
    </>
  );
}
