import React, { useState } from "react";
import { List, ListItem, Collapse, Box } from "@mui/material";

const CollapsibleMenu = ({ styles, title, items }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleClick = () => {
    setCollapseOpen(!collapseOpen);
  };
  return (
    <>
      <ListItem
        className={collapseOpen ? "active" : ""}
        dir="rtl"
        sx={styles.listItems}
      >
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            minWidth: "231px",
          }}
        >
          {title}
        </Box>
        <Box className="arrow-icon" onClick={handleClick} display="flex">
          {(collapseOpen && (
            <svg style={styles.secondaryIcons}>
              <use xlinkHref="#chevronUp"></use>
            </svg>
          )) || (
            <svg style={styles.secondaryIcons}>
              <use xlinkHref="#chevronDown"></use>
            </svg>
          )}
        </Box>
      </ListItem>
      <Collapse
        in={collapseOpen}
        timeout="auto"
        unmountOnExit
        sx={{ pr: "20px", background: "#f0f0f1" }}
      >
        <List component="div" disablePadding>
          {items.map((item) => {
            return (
              <ListItem key={item.title} dir="rtl" sx={styles.listItems}>
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                  }}
                >
                  {item.title}
                </Box>
                {item.itemIcon && (
                  <Box onClick={handleClick} display="flex">
                    <svg style={styles.secondaryIcons}>
                      <use xlinkHref="#chevronDown"></use>
                    </svg>
                  </Box>
                )}
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsibleMenu;
