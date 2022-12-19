import { Typography } from "@mui/material";
import MediaIcon from "../../public/assets/svg/media.svg";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/system";
import Image from "next/image";
import { useSelector } from "react-redux";
import PermMediaIcon from '@mui/icons-material/PermMedia';


const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2.4rem",
  borderRadius: "10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#78716C",
  borderStyle: "dashed",
  // backgroundColor: "#F5F5F5",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);
  console.log("🚀 ~ file: fileUpload.js:64 ~ DropzoneComponent ~ files", files);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((current) => [
      ...current,
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file[0].name} className="image-container cursor-pointer">
      <Image src={file[0].preview} alt={file[0].name} width={300} height={200} className={"image"} />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const theme = useSelector((state)=>state.swithDarkmode.darkMode)
  

  return (
    <>
      <section >
        <div {...getRootProps({ style })} className={theme ? 'bg-[#292524]' : 'bg-[#F5F5F5]'}>
          <input {...getInputProps()} />
          <PermMediaIcon />
          <Typography className={`font-semibold text-xl mt-4 ${theme ? 'text-white' : 'text-[#1C1917]'}`}>Drop or Select Image</Typography>
          <Typography className="text-base mt-3 font-normal text-[#A3A3A3]">
            Drag an image here or <span className="_spanclr underline text-center cursor-pointer">browse</span> for an image to upload
          </Typography>
        </div>
      </section>

      <Box className="grid grid-cols-2 md:grid-cols-3 mt-10 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-6">
        {thumbs}
      </Box>
    </>
  );
}

export default DropzoneComponent;
