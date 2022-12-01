import { Typography } from "@mui/material";

let TimeOptions = {
    // timeZone: 'Asia/Karachi',
    hour: "numeric",
    minute: "numeric",
    hour: "2-digit",
    hour12: false,
  },
  TimeFormatter = new Intl.DateTimeFormat([], TimeOptions);

export default function Time() {
  return (
    <Typography variant="h3" className="font-semibold text-[128px]" sx={{ color: "secondary.main" }}>
      {TimeFormatter.format(new Date())}
    </Typography>
  );
}
