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
  const [soundScapeArr, setsoundScapeArr] = useState([]);
  console.log("🚀 ~ soundScapeArr", soundScapeArr);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGeneralChange = (event, newValue) => {
    setGeneralValue(newValue);
  };
  const ShowVolumeSlider = (id) => {

    if (soundScapeArr.indexOf(id) > -1) {
      setsoundScapeArr((current) =>
        current.filter((element) => {
          return element !== id;
        })
      );
    } else {
      if (soundScapeArr.length >= 3) {
        const FirtItem = soundScapeArr[0];
        setsoundScapeArr([...soundScapeArr, id]);
        setsoundScapeArr((current) =>
          current.filter((element) => {
            return element !== FirtItem;
          })
        );
      } else {
        setsoundScapeArr([...soundScapeArr, id]);
      }
    }
  };

  return (
    <>
      <Paper className="w-[500px]">
        {/* Box Header */}
        <Box
          className="flex justify-between h-[65px] items-center text-gray-900 _borderBottom p-4"
          sx={{ borderBottom: 1, borderColor: "primary.light" }}
        >
          <Typography className="font-bold text-[17px]" sx={{ color: "secondary.contrastText" }}>
            Soundscapes
          </Typography>

          <Box className="flex justify-between items-center space-x-4">
            {soundScapeArr.length >= 1 && (
              <div className="bg-gray-100 p-3 rounded-full flex items-center justify-between">
                <Volumeicon />
              </div>
            )}
            {soundScapeArr.length >= 1 && (
              <Slider
                aria-label="Volume"
                value={generalValue}
                onChange={handleGeneralChange}
                className="w-36"
                sx={{ color: "primary.dark" }}
              />
            )}
            <RemoveIcon
              onClick={() => state(false)}
              className="cursor-pointer"
              sx={{ color: "secondary.contrastText" }}
            />
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
              {soundScapeArr.indexOf(i) > -1 ? (
                <Slider aria-label="Volume" value={value} onChange={handleChange} className=" max-h-[30px]"/>
              ) : (
                <Typography className="text-[12px] min-h-[22px] mt-2" sx={{ color: "secondary.contrastText" }}>
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
