import { Typography } from "@mui/material";
import React from "react";

export default function DateComp() {

  const Dateoptions = {
    day: "numeric",
    month: "short",
    weekday: "long",
  };
  const event = new Date();

  return (
    <Typography variant="span" className="block text-lg font-normal" sx={{ color: "secondary.main" }}>
      {new Intl.DateTimeFormat("en-US", Dateoptions).format(event)}
    </Typography>
  );
}
