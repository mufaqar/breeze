import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Google from "../../public/assets/images/google_brand.png";
import Filter from "../../public/assets/images/filter.png";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";



export default function Landing() {
  const [input, setInput] = useState();
  const router = useRouter();

  const Dateoptions = {
    day: "numeric",
    month: "short",
    weekday: "long",
  };

  let TimeOptions = {
      // timeZone: 'Asia/Karachi',
      hour: "numeric",
      minute: "numeric",
      hour: "2-digit",
      hour12: false,
    },
    TimeFormatter = new Intl.DateTimeFormat([], TimeOptions);
  const event = new Date();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      router.push(`https://www.google.com/search?q=${input}`);
    }
  };

  return (
    <>
      <Box component="main" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2">
        <Box className="flex justify-center flex-col items-center">
          <Typography variant="h3" className="font-semibold text-[128px]" sx={{ color: "secondary.main" }}>
            {TimeFormatter.format(new Date())}
          </Typography>
          <Typography className="text-[32px] mt-4 font-medium" sx={{ color: "secondary.main" }}>
            Good evening, {`ilhhasap`}
          </Typography>
          <Typography variant="span" className="block text-lg font-normal" sx={{ color: "secondary.main" }}>
            {new Intl.DateTimeFormat("en-US", Dateoptions).format(event)}
          </Typography>
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
        </Box>
        </Box>
        {/* Footer */}
        <Footer />
    </>
  );
}
