import { Typography } from "@mui/material";
import React from "react";
var moment = require('moment')

export default function DateComp() {
  const DateFormate = JSON.parse(localStorage.getItem('dateFormate'))
  return (
    <Typography variant="span" className="block text-lg font-normal" sx={{ color: "secondary.dark" }}>
      {/* {new Intl.DateTimeFormat("en-US", Dateoptions).format(event)} */}
      {moment().format(DateFormate ? DateFormate : 'dddd, MMMM YYYY')}
    </Typography>
  );
}
