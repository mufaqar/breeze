import { Box, Button, Typography } from "@mui/material";
import SearchEngine from '../components/searchEngine'
import Time from "../components/date-and-time/time"
import DateComp from "../components/date-and-time/date";

export default function () {
  return (
    <>
      <Box component="main" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2">
        <Box className="flex justify-center flex-col items-center">
          <Box>
            <Button variant="outlined" className="flex text-base font-semibold rounded-full" sx={{ color: "secondary.main" }}>Pomodoro</Button>
          </Box>
          <Time />
          
        </Box>
      </Box>
    </>
  );
}
