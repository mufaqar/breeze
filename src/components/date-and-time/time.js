import { Typography } from "@mui/material";
var moment = require('moment')

let TimeOptions = {
    // timeZone: 'Asia/Karachi',
    hour: "numeric",
    minute: "numeric",
    hour: "2-digit",
    hour12: false,
  },
  TimeFormatter = new Intl.DateTimeFormat([], TimeOptions);

  const TimeFormate = JSON.parse(localStorage.getItem('timeFormate'))

  console.log(moment().format('hh:mm A'))

export default function Time() {
  return (
    <Typography variant="h3" className="font-semibold text-[128px]" sx={{ color: "secondary.dark" }}>
    {moment().format(TimeFormate)}
    </Typography>
  );
}
