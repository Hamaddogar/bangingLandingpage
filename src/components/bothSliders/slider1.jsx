import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Container, Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import slider1 from "./assets/s25.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";
export default () => {
  const [indexDealer, setindexDealer] = useState(1);
  const [sliderObject, setsliderObject] = useState({
    img: slider2,
    name: "Product Name 3",
    location: "",
  });
  const sliderDataSet = [
    {
      img: slider2,
      name: "Product Name 1",
      location: "",
    },
    {
      img: slider1,
      name: "Product Name 2",
      location: "",
    },
    {
      img: slider3,
      name: "Product Name 3",
      location: "",
    },
  ];
  return (
    <Box maxWidth="xl" margin="auto">
      <Grid container alignItems="center">
        <Grid item xs={12} sx={{ position: "relative" }}>
          <img src={sliderObject.img} width="100%" height="800px" />

          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              bottom: "10%",
              right: "6%",
            }}
            padding={{ xs: "2% 0%", md: "4% 0%" }}
            backgroundColor="white"
            width={{ xs: "55%", sm: "35%", md: "25%" }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                fontSize={{ xs: "16px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#253F8E",
                }}
              >
                NOS AGENCY
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#253F8E",
                }}
                fontSize={{ xs: "20px", md: "22px" }}
                mt={2}
                mb={2}
              >
                {sliderObject.name}
              </Typography>
              <Typography
                fontSize={{ xs: "18px" }}
                sx={{
                  fontFamily: "Playfair",
                  fontStyle: "normal",
                  color: "#231F20",
                }}
              >
                237 Avlon , Somewhere
              </Typography>
              <Typography
                fontSize={{ xs: "16px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#253F8E",
                }}
                mt={4}
              >
                123 25 2 467567
              </Typography>
              <Typography
                fontSize={{ xs: "20px", md: "22px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#253F8E",
                }}
                mt={1}
                mb={4}
              >
                AGNACELONN aCONTACTA
              </Typography>
              <KeyboardArrowLeftRounded
                sx={{
                  borderRadius: "50%",
                  padding: "3%",
                  border: "1px solid #253F8E",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setindexDealer((indexDealer + 1) % 3);
                  setsliderObject(sliderDataSet[indexDealer]);
                }}
              />{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <KeyboardArrowRightRounded
                sx={{
                  borderRadius: "50%",
                  padding: "3%",
                  border: "1px solid #253F8E",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setindexDealer((indexDealer + 1) % 3);
                  setsliderObject(sliderDataSet[indexDealer]);
                }}
              />{" "}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
