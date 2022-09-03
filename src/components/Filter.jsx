import React, { useState } from "react";

import {
  Box,
  Stack,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import {
  furnishVals,
  maxAreaVals,
  maxPriceVals,
  sortVals,
} from "../utility/filterData";

const Filter = ({ setOptions, setLodFilter }) => {
  const [sort, setSort] = useState("price-asc");
  const [maxPrice, setMaxPrice] = useState("4000");
  const [maxArea, setMaxArea] = useState("80");
  const [furnished, SetFurnished] = useState("furnished");

  const setFilterVals = (e) => {
    e.preventDefault();
    setLodFilter(true);
    if (sortVals && maxPrice && maxArea && furnished) {
      window.scrollTo({ top: 320, behavior: "smooth" });
      setOptions((preVal) => ({
        ...preVal,
        params: {
          ...preVal.params,
          sort: sort,
          priceMax: maxPrice,
          areaMax: maxArea,
          furnishingStatus: furnished,
        },
      }));
    }
  };

  return (
    <Box my={3} p={3} borderRadius={3} sx={{ backgroundColor: "white" }}>
      <form onSubmit={setFilterVals} autoComplete="off" noValidate>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          flexWrap="wrap"
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#AAA9AF" }}>
              Sort
            </Typography>
            <Select
              variant="outlined"
              value={sort}
              sx={{ width: "200px", fontWeight: "bold" }}
              inputProps={{ "aria-label": "Without label" }}
              onChange={(e) => {
                setSort(e.target.value);
              }}
              p="2"
            >
              {sortVals.map((item) => (
                <MenuItem value={item.value} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#AAA9AF" }}>
              Max Price
            </Typography>
            <Select
              value={maxPrice}
              sx={{ width: "200px", fontWeight: "bold" }}
              inputProps={{ "aria-label": "Without label" }}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              p="2"
            >
              {maxPriceVals.map((item) => (
                <MenuItem value={item.value} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#AAA9AF" }}>
              Max Area
            </Typography>
            <Select
              value={maxArea}
              sx={{ width: "200px", fontWeight: "bold" }}
              inputProps={{ "aria-label": "Without label" }}
              onChange={(e) => {
                setMaxArea(e.target.value);
              }}
              p="2"
            >
              {maxAreaVals.map((item) => (
                <MenuItem value={item.value} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#AAA9AF" }}>
              Furnish
            </Typography>
            <Select
              value={furnished}
              sx={{ width: "200px", fontWeight: "bold" }}
              inputProps={{ "aria-label": "Without label" }}
              onChange={(e) => {
                SetFurnished(e.target.value);
              }}
              p="2"
            >
              {furnishVals.map((item) => (
                <MenuItem value={item.value} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                ml: 3,
                fontSize: "18px",
                textTransform: "Capitalize",
                backgroundColor: "#6E65F4",
                my: "5%",
                px: 4,
                py: 2,
                maxHeight: "76px",
              }}
              type="submit"
            >
              Search
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default Filter;
