import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Properties from "./Properties";
import Skeleton from "@mui/material/Skeleton";
import { Box, Typography, Container } from "@mui/material";
import { Fetch } from "../utility/fetch";

const Content = () => {
  const [lodFilter, setLodFilter] = useState();
  const [Options, SetOptions] = useState({
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "X-RapidAPI-Key": "d38f19ed65msh4f13c631c8cb131p1c697cjsn8d1c2019bf75",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getList = async () => {
      const { data } = await Fetch(
        "https://bayut.p.rapidapi.com/properties/list",
        Options
      );
      console.log(data.hits);
      setLodFilter(false);
      setLoading(false);
      setProperties(data.hits);
    };
    getList();
  }, [Options]);

  return (
    <Box sx={{ pt: "40px", backgroundColor: "#DDF7FD" }}>
      <Container display="flex" justifyContent="center">
        <Box display="flex" justifyContent="space-between" px={1}>
          <Typography sx={{ color: "#252138", fontSize: "40px" }}>
            Search Properties to rent
          </Typography>
        </Box>
        <Filter
          setOptions={SetOptions}
          lodFilter={lodFilter}
          setLodFilter={setLodFilter}
        />
        {lodFilter && <Typography> Applying Filters......</Typography>}
        {loading && (
          <Box sx={{ pt: 0.5 }}>
            <Typography variant="h5">
              {" "}
              loading best properties for you......
            </Typography>
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </Box>
        )}

        <Properties hits={properties} />
      </Container>
    </Box>
  );
};

export default Content;
