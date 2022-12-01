import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Dribbble, Figma, Gmail, Netflix, ProductHunt, Slack } from '../../public/assets/export'

const list = [
  {
    name: "Dribbble",
    icon: Dribbble,
    link: "",
  },
  {
    name: "Figma",
    icon: Figma,
    link: "",
  },
  {
    name: "Gmail",
    icon: Gmail,
    link: "",
  },
  {
    name: "Netflix",
    icon: Netflix,
    link: "",
  },
  {
    name: "Slack",
    icon: ProductHunt,
    link: "",
  },
  {
    name: "Product Hunt",
    icon: Slack,
    link: "",
  },
];

export default function AppList() {
  return (
    <div className="flex mt-6 ">
      {list.map((item, i) => (
        <div key={i} className="flex justify-center flex-col items-center w-[5.5rem] cursor-pointer">
          <figure className="brendlist flex justify-center items-center"><Image src={item.icon} alt={item.name} /></figure>
          <Typography sx={{ color: "secondary.main" }} className="whitespace-nowrap text-xs font-semibold">{item.name}</Typography>
        </div>
      ))}
    </div>
  );
}



