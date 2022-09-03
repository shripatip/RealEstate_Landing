import React from "react";
import { Box, Card, Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import CropDinOutlinedIcon from "@mui/icons-material/CropDinOutlined";
const PropertyCard = ({ details }) => {
  return (
    <Box>
      {details ? (
        <Card sx={{ width: 360, minHeight: 380, maxHeight: 500 }}>
          <CardMedia
            component="img"
            height="194"
            image={details.coverPhoto.url}
            alt="Paella dish"
          />
          <CardContent sx={{ pb: 0, "&:last-child": { pb: 1.5 } }}>
            <Stack justifyContent="space-evenly">
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: "#6E65F4" }}
                >
                  ${details.price}
                  <Typography component="span" sx={{ color: "#AAA9AF" }}>
                    /month
                  </Typography>
                </Typography>
                <IconButton sx={{ p: "6px" }} size="large">
                  <FavoriteBorderIcon
                    mb={1}
                    sx={{ fontSize: "28px", color: "#AAA9AF" }}
                  />
                </IconButton>
              </Stack>
              <Stack display="flex" direction="column">
                <Typography
                  sx={{
                    fontSize: "30px",
                    color: "#252138",
                    fontWeight: 500,
                    fontFamily: "Helvetica",
                    letterSpacing: 1,
                  }}
                >
                  {details.location[2].name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#AAA9AF",

                    mb: "6px",
                    textTransform: "capitalize",
                  }}
                >
                  {details.title}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <BedOutlinedIcon sx={{ color: "#6E65F4" }} flexGrow={1} />
                <Typography
                  variant="body2"
                  sx={{ py: "1.5px", color: "#AAA9AF" }}
                  flexGrow={1}
                >
                  3 Beds
                </Typography>
                <BathtubOutlinedIcon sx={{ color: "#6E65F4" }} flexGrow={1} />
                <Typography
                  variant="body2"
                  sx={{ py: "1.5px", color: "#AAA9AF" }}
                  flexGrow={1}
                >
                  2 Bathrooms
                </Typography>
                <CropDinOutlinedIcon sx={{ color: "#6E65F4" }} flexGrow={1} />
                <Typography
                  variant="body2"
                  sx={{ py: "1.5px", color: "#AAA9AF" }}
                  flexGrow={1}
                >
                  {Math.trunc(details.area)} m<sup>2</sup>
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Box sx={{ pt: 0.5, color: "black" }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      )}
    </Box>
  );
};

export default PropertyCard;
