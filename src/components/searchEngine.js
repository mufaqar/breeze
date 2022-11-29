import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Google from "../../public/assets/images/google_brand.png";
import Filter from "../../public/assets/images/filter.png";
import Image from "next/image";
import { IconButton, Paper, TextField } from "@mui/material";

export default function SearchEngine() {
    
  const [input, setInput] = useState();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      router.push(`https://www.google.com/search?q=${input}`);
    }
  };

  return (
    <>
      <Paper className="mt-6 p-[2px] rounded-full px-2 flex items-center">
        <IconButton>
          <Image src={Google} alt="google" />
          <KeyboardArrowDownIcon sx={{ color: "secondary.lightGray" }} />
        </IconButton>
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
      </Paper>
    </>
  );
}
