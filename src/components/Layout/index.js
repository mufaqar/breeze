import { Box } from "@mui/material";
import { loginBg } from "../../../public/assets/export";
import { useSelector } from "react-redux";

export default function Layout(props) {
  const backgroud_image =  useSelector((state)=>state.changeBackground.backgroundImageURL)
  console.log("🚀 ~ file: index.js:7 ~ Layout ~ backgroud_image", backgroud_image)

  return (
    <Box
      component="main"
      sx={{ backgroundImage: `url(${backgroud_image.src})`}}
      // sx={{ backgroundImage: `url(${loginBg.src})` }}
      className={`h-screen relative w-full bg-cover bg-no-repeat px-16`}
    >
      {props.children}
    </Box>
  );
}
