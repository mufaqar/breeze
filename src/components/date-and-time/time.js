import { Typography } from "@mui/material";
var moment = require('moment')

const TimeFormate = JSON.parse(localStorage.getItem('timeFormate'))

export default function Time() {
  return (
    <Typography variant="h3" className="font-semibold text-[128px]" sx={{ color: "secondary.dark" }}>
    {moment().format(TimeFormate ? TimeFormate : 'HH:mm')}
    </Typography>
  );
}
