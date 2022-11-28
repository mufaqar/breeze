"use client";

import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import React, { useState } from "react";
import InputButton from "./input-button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function InputControl(props) {
  const {field, handleInput, name} = props
  return (
    <div className="flex flex-col justify-between items-center">
      <span className="text-3xl font-bold text-white">Hello, what's your name?</span>
      <Box className="border-2 border-white w-full inputwrapper">
        <Input
          id="standard-adornment-password"
          className="w-full mb-10 border-white border-b-2 "
          focused
          name={name}
          value={field}
          onChange={handleInput}
          sx={{ marginTop: "1rem", padding: "12px", color: "white", borders: "solid red" }}
          //   type={password ? "password" : "text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => showPassword(!password)}>
                {/*password ? <VisibilityOffIcon color="danger" /> : <VisibilityIcon />*/}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      {
        field.length > 0 && <Button
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        className="rounded-3xl text-white border-white py-2 px-8"
      >
        Continue
      </Button>
      }
      
    </div>
  );
}
