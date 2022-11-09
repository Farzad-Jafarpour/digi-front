import React from "react";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ styles }) => {
  return (
    <>
      <Box dir="rtl" sx={styles.search.lgScreens}>
        <Paper dir="rtl" component="form" sx={styles.search.searchContainer}>
          <IconButton type="submit" aria-label="search" sx={{ m: 0, p: 0 }}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={styles.search.searchInput}
            placeholder="جستجو"
            inputProps={{ "aria-label": "جستجو" }}
          />
        </Paper>
      </Box>
      <Box dir="rtl" sx={styles.search.mdScreens}>
        <Paper dir="rtl" component="form" sx={styles.search.searchContainer}>
          <IconButton type="submit" aria-label="search" sx={{ m: 0, p: 0 }}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={styles.search.searchInput}
            placeholder="جستجو"
            inputProps={{ "aria-label": "جستجو" }}
          />
        </Paper>
      </Box>
    </>
  );
};

export default SearchBox;
