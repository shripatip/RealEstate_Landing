import React, { useState } from "react";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { useLocation } from "react-router-dom";
import { List } from "@mui/material/";

import Button from "@mui/material/Button";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";

const NavBar = () => {
  const location = useLocation();
  const [toPage, setToPage] = useState("Rent");
  const Navigate = useNavigate();
  const pages = ["Rent", "Buy", "Sell", "Manage Property", "Resources"];

  const goto = () => {};
  return (
    <div>
      <AppBar
        sx={{
          position: "static",
          backgroundColor: "#FAF9FE",
          boxShadow: "1",
        }}
      >
        <Toolbar>
          <CottageOutlinedIcon
            sx={{
              mr: 1,
              color: "#6E65F4",
              fontSize: "38px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              fontSize: "24px",

              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "Black",
              textDecoration: "none",
            }}
          >
            ReUnion
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              display: "flex",
              ml: 2,
            }}
          >
            <List sx={{ display: { md: "flex", sm: "none", xs: "none" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    setToPage(page);
                  }}
                  sx={{
                    mx: 1,
                    my: 1,
                    fontWeight: "550",
                    color: "#252138",
                    display: "block",
                    fontSize: 16,
                    textTransform: "Capitalize",
                    backgroundColor: page === toPage ? "#E9E6F7" : " ",
                    color: page === toPage ? "#6E65F4" : " Black",
                  }}
                >
                  {page}
                </Button>
              ))}
            </List>
            <List sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#6E65F4",
                  display: "block",
                  fontSize: 14,
                  textTransform: "Capitalize",
                  my: 1,
                }}
              >
                login
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  mx: 2,
                  backgroundColor: "#6E65F4",
                  display: "block",
                  fontSize: 14,
                  textTransform: "Capitalize",
                  my: 1,
                }}
              >
                Sign up
              </Button>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
