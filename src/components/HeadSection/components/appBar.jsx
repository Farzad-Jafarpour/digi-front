import React from "react";
import { Box } from "@mui/material";
// import SvgImporter from "components/common/icons";
import SvgReturner from "./svgReturner";
import LargeScreenAppBar from "./views/lgViewAppBar";
import NormalScreensAppBar from "./views/normalScreensAppBar";

const DigiAppBAr = () => {
  // const icons = SvgImporter();
  const styles = {
    appHeader: {
      display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
      flexGrow: 1,
      background: "#fff",
      p: "0.75rem 1rem 0.25rem 1rem",
      position: "static",
    },
    header: {
      display: "flex",
      flexGrow: 1,
      background: "#fff",
      pb: "12px",
      borderBottom: "1px solid #f0f0f1",
    },
    baseLogo: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      "& > img": {
        height: "24px",
        mt: "4px",
      },
    },
    container: {
      display: { md: "none", sm: "none", xs: "none", lg: "flex" },
      flexGrow: 1,
      flexDirection: "column",
      background: "#fff",
      pr: "1rem",
      pl: "1rem",
      "& .MuiBox-root": {
        height: "44px",
      },
    },
    contained: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      pt: "12px",
      pb: "12px",
    },
    right: {
      display: "flex",
      flexGrow: 1,
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ml: "1.25rem",
      height: "30px",
      color: "#0c0c0c",
    },
    left: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    login: {
      display: "flex",
      flexGrow: 1,
      p: "0.5rem 1rem",
      height: "40px",
      border: { lg: "1px solid #e0e0e2 " },
      borderRadius: "10px",
      color: "#000",
      ml: { md: "0.5rem", sm: "0.5rem" },
      fontFamily: "IRANYekan,sans-serif",
    },
    search: {
      lgScreens: {
        display: { lg: "flex", md: "none", sm: "none", xs: "none" },
        flexGrow: 0.5,
      },
      mdScreens: {
        display: { lg: "none", md: "flex" },
        flexGrow: 1,
      },
      searchContainer: {
        pl: { lg: "16px", md: "8px", sm: "8px" },
        pr: { lg: "16px", md: "8px", sm: "8px" },
        borderRadius: "6px",
        background: " #f0f0f1",
        height: "44px",
        display: "flex",
        flexGrow: 1,
      },
      searchInput: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "row ",
        "& .MuiInputBase-input": {
          pr: { lg: "1rem", md: "0.5rem", sm: "0.5rem" },
        },
      },
    },
  };
  //set open's initial value to false after designing the app bar

  return (
    <Box>
      <Box>
        <SvgReturner />
      </Box>
      <NormalScreensAppBar styles={styles} />
      <LargeScreenAppBar styles={styles} />
    </Box>
  );
};

export default DigiAppBAr;
