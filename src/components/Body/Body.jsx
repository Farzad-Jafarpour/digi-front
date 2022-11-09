import React from "react";
import { Box } from "@mui/material";
import CustomSwiper from "./components/customSwiper";
import { images } from "../Body/images/images";
import { fontSize } from "@mui/system";

const Body = () => {
  const styles = {
    bodyContainer: {
      pr: "16px",
      pl: "16px",
      mr: "11px",
      ml: "11px",
    },
    largeScreens: {
      display: {
        display: { lg: "flex", md: "none", sm: "none", xs: "none" },
        flexGrow: 1,
      },
    },

    imageBox: {
      display: "flex",
      flexGrow: 1,
      mt: "24px",
      p: "8px 12px",
    },
    imageContainer: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: "52px",
      width: "52px",
    },
  };
  return (
    <>
      <Box>
        <CustomSwiper />
      </Box>
      <Box dir="rtl" sx={styles.bodyContainer}>
        <Box sx={styles.imageBox}>
          {images.map((image) => (
            <Box key={image.discription} sx={styles.imageContainer}>
              <img style={styles.image} key={image.img} src={image.img} />
              <span
                style={{
                  marginTop: "4px",
                  fontSize: "1.1rem",
                  lineHeight: 2.17,
                }}
              >
                {image.discription}
              </span>
            </Box>
          ))}
          <Box sx={styles.imageContainer}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                background: "#f0f0f1",
              }}
            >
              <svg
                style={{
                  width: "32px",
                  height: "32px",
                  fill: "#a1a3a8",
                }}
              >
                <use xlinkHref="#moreHoriz"></use>
              </svg>
            </Box>
            <span
              style={{
                marginTop: "4px",
                fontSize: "1.1rem",
                lineHeight: 2.17,
              }}
            >
              بیشتر
            </span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Body;
