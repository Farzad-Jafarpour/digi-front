import React, { useState } from "react";
import { AppBar, Box, Button } from "@mui/material";
import CostumeDrawer from "../drawer";
import SearchBox from "../searchBox";

const NormalScreensAppBar = ({ styles }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CostumeDrawer open={open} handleDrawerClose={handleDrawerClose} />

      <AppBar sx={styles.appHeader}>
        <Box
          component={Button}
          onClick={handleDrawerOpen}
          dir="rtl"
          sx={styles.header}
        >
          <svg
            style={{
              width: "24px",
              height: "24px",
              fill: "GrayText",
              marginLeft: "8px",
            }}
          >
            <use xlinkHref="#hamburgerMenu"></use>
          </svg>
          <Box sx={styles.baseLogo}>
            <img
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              alt="digi kala"
            />
          </Box>
          <svg
            style={{
              width: "24px",
              height: "24px",
              fill: "GrayText",
              marginLeft: "8px",
            }}
          >
            <use xlinkHref="#question"></use>
          </svg>
        </Box>
        <Box
          dir="rtl"
          sx={{
            display: "flex",
            flexGrow: 1,
            pt: "0.5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              "& .MuiBox-root": {
                ml: "1rem",
              },
            }}
          >
            <SearchBox styles={styles} />
          </Box>
          <Box dir="rtl" sx={styles.left}>
            <Box sx={{ display: "flex", flexGrow: 1, ml: "0.5rem" }}>
              <Button dir="rtl" sx={styles.login}>
                <Box
                  sx={{
                    flexShrink: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{
                      width: "24px",
                      height: "24px",
                      fill: "GrayText",
                      marginLeft: "8px",
                    }}
                  >
                    <use xlinkHref="#registerationSignIn"></use>
                  </svg>
                  ورود
                </Box>
              </Button>
            </Box>
            <Box
              sx={{
                flexShrink: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "GrayText",
                  marginLeft: "8px",
                }}
              >
                <use xlinkHref="#cartOff"></use>
              </svg>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderTop: "1px solid #f0f0f1",
            alignItems: "center",
            mt: "0.5rem",
            pt: "0.5rem",
            pb: "0.25rem",
            height: "24px",
          }}
        >
          <Box>
            <Box
              sx={{
                flexShrink: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                m: "0.5rem",
              }}
            >
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "#424750",
                }}
              >
                <use xlinkHref="#chevronLeft"></use>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              color: "#424750",
              fontSize: "1.1rem",
              fontWeight: 400,
              lineHeight: 2.17,
            }}
          >
            لطفا شهر خود را انتخاب کنید
          </Box>

          <Box
            sx={{
              flexShrink: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: "0.5rem",
            }}
          >
            <svg
              style={{
                width: "20px",
                height: "20px",
                fill: "#f9a825",
              }}
            >
              <use xlinkHref="#pin"></use>
            </svg>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default NormalScreensAppBar;
