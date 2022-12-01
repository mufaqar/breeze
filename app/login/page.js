"use client";

import React, { useState } from "react";
import { loginBg } from "../../public/assets/export";
import { Box, Button, Checkbox, FormControlLabel, IconButton, Input, InputAdornment } from "@mui/material";
import useForm from "../src/components/useForm";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import Loading from "../src/components/loading";

const initialValue = {
  name: "Matt",
  email: "email@email.com",
  password: "password",
};

export default function Login() {
  const { field, setfield, handleInput } = useForm(initialValue);
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [password, showPassword] = useState(true);
  const [loader, setloader] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleStepOne = () => {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
  };
  const handleStepTwo = () => {
    setStepOne(true);
    setStepTwo(true);
    setStepThree(false);
  };
  const handleStepThree = () => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
      if (field.email != "email@email.com" || field.password != "password") {
        setWrongCredentials(true);
      }
    }, 3000);
  };

  return (
    <>
      <Box
        component="main"
        // sx={{ backgroundImage: `url(${loginBg.src})` }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* First Step */}
        <div className={`flex flex-col justify-between items-center ${stepOne ? "hidden" : "block"}`}>
          <span className="text-4xl  text-white">Hello, what's your name?</span>
          <Box className="border-2 border-white w-full inputwrapper flex flex-col justify-center items-center">
            <input
              id="standard-adornment-password"
              className="w-full p-3 bg-gray-400/40 backdrop-blur-[0.6px] text-[22px]	max-w-[320px] rounded-full outline-none border-none text-white my-6"
              focused
              name="name"
              value={field.name}
              onChange={handleInput}
              sx={{ marginTop: "1rem", padding: "12px", color: "white", borders: "solid red" }}
            />
          </Box>
          {field.name.length > 0 && (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
              onClick={handleStepOne}
              className={`rounded-3xl text-white border-white py-2 px-8`}
            >
              Continue
            </Button>
          )}
        </div>

        {/* 2nd Step */}
        <div
          className={` flex-col flex justify-between items-center ${stepTwo ? "hidden" : stepOne ? "block" : "hidden"}`}
        >
          <span className="text-4xl  text-white">what's your email {field.name}</span>
          <Box className="border-2 border-white w-full inputwrapper flex flex-col justify-center items-center">
            <input
              id="standard-adornment-password"
              className="w-full p-3 bg-gray-400/40 backdrop-blur-[0.6px] max-w-[320px] text-[22px] rounded-full outline-none border-none text-white my-6"
              focused
              name="email"
              value={field.email}
              onChange={handleInput}
              sx={{ marginTop: "1rem", padding: "12px", color: "white", borders: "solid red" }}
            />
          </Box>
          <p className={`text-white -mt-4 mb-8 text-sm ${field.email.includes(" ") ? "block" : "hidden"}`}>
            Emails may not include spaces.
          </p>
          {field.name.length > 0 && field.email.includes(" ") ? (
            ""
          ) : (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
              onClick={handleStepTwo}
              className={`rounded-3xl text-white border-white py-2 px-8`}
            >
              Continue
            </Button>
          )}
        </div>

        {/* 3rd Step */}
        <div
          className={` flex-col flex justify-between items-center ${stepThree ? "hidden" : stepTwo ? "block" : "hidden"
            }`}
        >
          <span className="text-4xl text-white">what's your password</span>
          <Box className="border-2 relative border-white w-full inputwrapper flex flex-col justify-center items-center">
            <input
              id="standard-adornment-password"
              className="w-full p-3 bg-gray-400/40 backdrop-blur-[0.6px] max-w-[320px] text-[22px] rounded-full outline-none border-none text-white my-6"
              focused
              name="password"
              value={field.password}
              onChange={handleInput}
              sx={{ marginTop: "1rem", padding: "12px", color: "white", borders: "solid red" }}
              type={password ? "password" : "text"}
            />

            <InputAdornment className="absolute right-0 pr-4">
              <IconButton aria-label="toggle password visibility" onClick={() => showPassword(!password)}>
                {password ? (
                  <VisibilityOffIcon style={{ color: "white" }} />
                ) : (
                  <VisibilityIcon style={{ color: "white" }} />
                )}
              </IconButton>
            </InputAdornment>
          </Box>
          {wrongCredentials && (
            <p className="text-white -mt-2 text-center italic">
              The password you entered for <br /> the email {field.email} is’t right.
            </p>
          )}
          <p className={`text-white -mt-2 ${wrongCredentials && "mt-0"} `}>
            Learn more in our Terms &{" "}
            <Link href="#" className="underline text-white">
              Privacy Policy.
            </Link>
          </p>
          <FormControlLabel
            control={<Checkbox style={{ color: "white" }} />}
            label="Sign up for the Weekly Newsletter"
            className="text-white -mt-4 mb-8"
          />
          {field.name.length > 0 && (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
              onClick={handleStepThree}
              className={`rounded-3xl text-white border-white py-2 px-8`}
            >
              Submit
            </Button>
          )}
        </div>

      </Box>
      <Box
        className={`fixed top-0 right-0 left-0 flex justify-center items-center bg-black/80 w-full h-screen ${loader ? "block" : "hidden"
          }`}
      >
        <Loading />
      </Box>
    </>
  );
}
