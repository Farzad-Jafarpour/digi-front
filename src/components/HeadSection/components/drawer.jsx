import React, { useState } from "react";
import { Box, Drawer, List, ListItem, Divider } from "@mui/material";
import CollapsibleMenu from "./CollapsibleMenu";

const drawerWidth = 312;

export default function CostumeDrawer({ open, handleDrawerClose }) {
  const styles = {
    drawerHeader: {
      pt: "20px",
      pb: "20px",
      mr: "20px",
      ml: "20px",
      mb: "4px",
    },
    listItems: {
      p: "0 20px 0 20px",
      height: "52px",
      width: "275px",
      "&.active": {
        "& .arrow-icon > svg": {
          fill: "#ef394e",
        },
      },
    },
    divider: { mr: "20px", width: "255px" },
    drawerIcons: {
      width: "24px",
      height: "24px",
      fill: "#a1a3a8",
      marginLeft: "16px",
    },
    secondaryIcons: {
      width: "24px",
      height: "24px",
    },
  };

  const [collapseOpen, setCollapseOpen] = useState(false);
  const items = [
    { title: "عسگر", itemIcon: true },
    { title: "اهبر", itemIcon: false },
  ];
  const secondItems = [
    { title: "عسگر", itemIcon: true },
    { title: "اهبر", itemIcon: false },
  ];

  const handleClick = () => {
    setCollapseOpen(!collapseOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        dir="rtl"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box dir="rtl" sx={styles.drawerHeader}>
          <img
            height="24px"
            src="https://www.digikala.com/statics/img/svg/digi.svg"
            alt="digi logo"
          />
        </Box>

        <Divider sx={styles.divider} />
        <List dir="rtl" sx={{ p: "0" }}>
          <ListItem sx={styles.listItems}>
            <svg style={styles.drawerIcons}>
              <use xlinkHref="#fresh"></use>
            </svg>
            <Box>سوپرمارکت</Box>
          </ListItem>
          <ListItem sx={styles.listItems}>
            <svg style={styles.drawerIcons}>
              <use xlinkHref="#searchTrend"></use>
            </svg>
            <Box>پرفروش ترین ها</Box>
          </ListItem>
          <ListItem sx={styles.listItems}>
            <svg style={styles.drawerIcons}>
              <use xlinkHref="#discount"></use>
            </svg>
            <Box>تخفیف ها و پیشنهادها</Box>
          </ListItem>
          <ListItem sx={styles.listItems}>
            <svg style={styles.drawerIcons}>
              <use xlinkHref="#amazing"></use>
            </svg>
            <Box>شگفت انگیزها</Box>
          </ListItem>
          <ListItem sx={styles.listItems}>
            <svg style={styles.drawerIcons}>
              <use xlinkHref="#askQuestion"></use>
            </svg>
            <Box>سوالی دارید؟</Box>
          </ListItem>
          <ListItem sx={styles.listItems}>
            <svg style={styles.drawerIcons}>
              <use xlinkHref="#seller"></use>
            </svg>
            <Box>فروشنده شوید</Box>
          </ListItem>
        </List>
        <Divider sx={styles.divider} />
        <List>
          <ListItem sx={styles.listItems}>دسته بندی کالاها</ListItem>
          <CollapsibleMenu styles={styles} title="فروشنده" items={items} />
          <CollapsibleMenu styles={styles} title="خریداز" items={secondItems} />
        </List>
      </Drawer>
    </Box>
  );
}
