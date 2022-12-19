import { Typography } from "@mui/material";
import React from "react";
var moment = require('moment')

export default function DateComp() {

  const Dateoptions = {
    day: "numeric",
    month: "short",
    weekday: "long",
  };
  const event = new Date();

  // let dateFormat = moment().format('dddd, MMMM YYYY');
  const DateFormate = JSON.parse(localStorage.getItem('dateFormate'))

  return (
    <Typography variant="span" className="block text-lg font-normal" sx={{ color: "secondary.dark" }}>
      {/* {new Intl.DateTimeFormat("en-US", Dateoptions).format(event)} */}
      {moment().format(DateFormate)}
    </Typography>
  );
}
