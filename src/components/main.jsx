import React from "react";
import { Box } from "@mui/material";
import NavBar from "./navBar";
import Content from "./content";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <Box component="div" className="main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Main;
