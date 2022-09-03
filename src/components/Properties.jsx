import React, { useState } from "react";
import { Box,  } from "@mui/material";
import Masonry from "react-masonry-css";
import PropertyCard from "./propertyCard";



const Properties = ({ hits }) => {
  const [properties, setProperties] = useState();

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Box>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {hits.map((property) => (
          <div style={{ backgroundColor: "transparent" }} key={property.id}>
            <PropertyCard details={property} />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default Properties;
