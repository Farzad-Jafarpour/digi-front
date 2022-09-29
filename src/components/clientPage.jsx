import React from "react";
import { Box } from "@mui/system";
import Top from "./HeadSection/header";
import Body from "./Body/Body";
import { Toolbar } from "@mui/material";

const ClientPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Top />
        <Body />
      </Box>
    </>
  );
};

export default ClientPage;
