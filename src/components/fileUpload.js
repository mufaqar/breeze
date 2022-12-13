import { Typography } from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";
import MediaIcon from "../../public/assets/svg/media.svg";

export default function FileUpload() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
console.log(acceptedFiles)
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="w-full bg-gray-100 p-12 flex flex-col justify-center items-center rounded-xl border border-dashed">
        <input {...getInputProps()} />
        <MediaIcon/>
        <Typography className="font-semibold text-xl mt-4">Drop or Select Image</Typography>
        <Typography className="text-base mt-3 font-normal text-[#A3A3A3]">Drag an image here or <span className="_spanclr underline cursor-pointer">browse</span> for an image to upload </Typography>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
