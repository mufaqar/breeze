"use client";
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Google, Bing, DuckDuckGo, Filter } from "../../public/assets/export";
import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";

import { useSelector } from "react-redux";

export default function SearchEngine() {
  const [input, setInput] = useState();
  const [open, setOpen] = useState(false);
  const [changeEngineLogo, setChangeEngineLogo] = useState(Google);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      router.push(`https://www.google.com/search?q=${input}`);
    }
  };

  const LogoChange = (e) => {
    setChangeEngineLogo(e);
    setOpen(false);
  };

  const ChangeSearchEngine = () => {
    return (
      <Box className="flex change-search-engine flex-col justify-start space-y-2">
        <Typography className="mb-2">Serach With</Typography>

        <Box className="flex items-center cursor-pointer" onClick={() => LogoChange(Google)}>
          <Image src={Google} alt="sound" width={20} height={20} />
          <Typography sx={{ color: "secondary.contrastText" }} className="pl-2">
            Google
          </Typography>
        </Box>

        <Box className="flex items-center cursor-pointer" onClick={() => LogoChange(Bing)}>
          <Image src={Bing} alt="sound" width={20} height={20} />
          <Typography sx={{ color: "secondary.contrastText" }} className="pl-2">
            Bing
          </Typography>
        </Box>

        <Box className="flex items-center cursor-pointer" onClick={() => LogoChange(DuckDuckGo)}>
          <Image src={DuckDuckGo} alt="sound" width={20} height={20} />
          <Typography sx={{ color: "secondary.contrastText" }} className="pl-2">
            DuckDuckGo
          </Typography>
        </Box>
      </Box>
    );
  };

  const HandleOpenSearchEng = () => {
    setOpen(!open);
  };
  const searchhideshow = useSelector((state) => state.hideShow.search);
  return (
    <>
      {!searchhideshow && (
        <Paper className="mt-6 p-[2px] rounded-full px-2 flex items-center">
          <Box onClick={HandleOpenSearchEng} className="min-w-[60px]  flex justify-center items-center">
            <Image src={changeEngineLogo} alt="google" width={20} height={20} />
            <KeyboardArrowDownIcon sx={{ color: "secondary.lightGray" }} />
          </Box>
          <TextField
            type="text"
            className=" bg-transparent w-[360px] placeholder:text-sm placeholder:text-[#A3A3A3]"
            placeholder="Search for everything"
            variant="standard"
            name="google"
            onKeyDown={handleKeyPress}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <IconButton>
            <Image src={Filter} alt="google" />
          </IconButton>

          {open && (
            <Paper className={`fixed -bottom-[150px] p-3 z-10`} sx={{ borderRadius: 2 }}>
              <ChangeSearchEngine />
            </Paper>
          )}
        </Paper>
      )}
    </>
  );
}
