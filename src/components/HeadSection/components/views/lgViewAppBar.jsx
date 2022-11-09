import React from "react";
import { Button, Box, Divider } from "@mui/material";
import SearchBox from "../searchBox";

const LargeScreenAppBar = ({ styles }) => {
  return (
    <>
      <Box dir="rtl" sx={styles.container}>
        <Box sx={styles.contained}>
          <Box sx={styles.right}>
            <Box sx={styles.logo}>
              <img
                src="https://www.digikala.com/statics/img/svg/logo.svg"
                alt="digi kala"
              />
            </Box>
            <SearchBox styles={styles} />
          </Box>
          <Box dir="rtl" sx={styles.left}>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
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
                  ورود | ثبت نام
                </Box>
              </Button>
            </Box>
            <Box
              sx={{
                flexShrink: "0",
                display: "flex",
                alignItems: "center",
                height: "24px",
                justifyContent: "center",
              }}
            >
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ m: "0 0.75rem", height: "24px" }}
              />
            </Box>
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
                  fill: "GrayText",
                  marginLeft: "8px",
                }}
              >
                <use xlinkHref="#cartOff"></use>
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "none", sm: "none", xs: "none", lg: "flex" },
          p: "0 16px",
        }}
        dir="rtl"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            fontWeight: 700,
            lineHeight: 2.15,
          }}
        >
          <svg
            style={{
              width: "24px",
              height: "24px",
              fill: "GrayText",
              marginLeft: "4px",
            }}
          >
            <use xlinkHref="#hamburgerMenu"></use>
          </svg>
          <Box sx={{ ml: "20px" }}>دسته بندی کالاها</Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 400,
              lineHeight: 2.17,
              p: "0 12px",
            }}
          >
            <svg
              style={{
                width: "18px",
                height: "18px",
                fill: "GrayText",
                marginLeft: "4px",
              }}
            >
              <use xlinkHref="#fresh"></use>
            </svg>
            <Box sx={{ p: "0  12px" }}>سوپرمارکت</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 400,
              lineHeight: 2.17,
            }}
          >
            <svg
              style={{
                width: "18px",
                height: "18px",
                fill: "GrayText",
                marginLeft: "4px",
              }}
            >
              <use xlinkHref="#searchTrend"></use>
            </svg>
            <Box sx={{ p: "0 12px" }}>پرفروش‌ترین ها</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 400,
              lineHeight: 2.17,
            }}
          >
            <svg
              style={{
                width: "18px",
                height: "18px",
                fill: "GrayText",
                marginLeft: "4px",
              }}
            >
              <use xlinkHref="#discount"></use>
            </svg>
            <Box sx={{ p: "0 12px" }}>تخفیف‌ها و پیشنهادها</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 400,
              lineHeight: 2.17,
            }}
          >
            <svg
              style={{
                width: "18px",
                height: "18px",
                fill: "GrayText",
                marginLeft: "4px",
              }}
            >
              <use xlinkHref="#amazing"></use>
            </svg>
            <Box sx={{ p: "0 12px" }}>شگفت‌انگیزها</Box>
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 400,
            lineHeight: 2.17,
          }}
        >
          <Box sx={{ p: "0 12px" }}>سوالی دارید؟</Box>
          <Box sx={{ p: "0 12px" }}>فروشنده شوید!</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 400,
            lineHeight: 2.17,
            mr: "auto",
          }}
        >
          <svg
            style={{
              width: "20px",
              height: "20px",
              fill: "GrayText",
              marginLeft: "8px",
            }}
          >
            <use xlinkHref="#pin"></use>
          </svg>
          <Box>لطفا شهر خود را انتخاب کنید</Box>
        </Box>
      </Box>
    </>
  );
};

export default LargeScreenAppBar;
