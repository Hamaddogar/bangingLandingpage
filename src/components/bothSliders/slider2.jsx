import { Box } from "@mui/system";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Container, Grid, Hidden, Typography, Button } from "@mui/material";
import { useState } from "react";
import s21 from "./assets/s21.jpg";
import s22 from "./assets/s22.jpg";
import s23 from "./assets/s23.jpg";
import s25 from "./assets/s25.jpg";
import s26 from "./assets/s26.jpg";
import s27 from "./assets/s27.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider2.css";
function CardFun({ img, title, text }) {
  return (
    <Card sx={{ width: 270, borderRadius: 0, boxShadow: 0 }}>
      <CardActionArea>
        <CardMedia className="imgHeight">
          <img src={img} width="100%" className="imgHeight" />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#253F8E",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "gray",
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default () => {
  const sliderDataSet = [
    {
      img: s21,
      title: "AGENCY LYON",
      text: "Donec facilisis tortor ut augue lacinia, at viverra est semper. ",
    },
    {
      img: s22,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
    {
      img: s23,
      title: "AGENCY LYON",
      text: "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium. ",
    },
    {
      img: s25,
      title: "AGENCY LYON",
      text: "Mauris non tempor quam, et lacinia sapien. Mauris accumsan em. ",
    },
    {
      img: s26,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
    {
      img: s27,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
    {
      img: s21,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
    {
      img: s22,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
    {
      img: s23,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
    {
      img: s25,
      title: "AGENCY LYON",
      text: "Nam dapbius nisal bitaeo elite fregile runita agilia ruturnai",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1176 },
      items: 4,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1176, min: 939 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Box maxWidth="xl" margin="auto">
      {/* 2ndslider */}
      <Container>
        <Grid container alginItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              fontSize={{ xs: "16px" }}
              sx={{
                fontFamily: "Playfair Display",
                fontStyle: "normal",
                color: "#253F8E",
                textTransform: "uppercase",
              }}
              mb={2}
              mt={15}
            >
              NOHASLO
            </Typography>
            <Typography
              fontSize={{ xs: "22px", md: "33px" }}
              sx={{
                fontFamily: "Playfair Display",
                fontStyle: "normal",
                color: "#253F8E",
                textTransform: "uppercase",
              }}
              mb={1}
            >
              achat vente etla gestion de biens immobiliers de qualite
            </Typography>
            <Typography
              fontSize={{ xs: "18px" }}
              sx={{
                fontStyle: "normal",
                color: "gray",
              }}
              mb={3}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              placeat totam voluptate quibusdam temporibus labore, unde
              voluptatibus blanditiis impedit necessitatibus dicta vitae
              provident. Necessitatibus officiis est sed repellat, architecto
              odio?{" "}
            </Typography>
          </Grid>
        </Grid>

        <Box pt={5} pb={10}>
          <Carousel
            responsive={responsive}
            partialVisible={true}
            focusOnSelect={true}
            infinite={true}
            autoPlaySpeed={1000}
            // keyBoardControl={true}
            // containerClass="carousel-container"
            // itemClass="carousel-item-padding-40-px"
            arrows={false}
          >
            {sliderDataSet.map((obj) => {
              return (
                <div>
                  <CardFun {...obj} />
                </div>
              );
            })}
          </Carousel>
        </Box>
        <Button
          variant="filled"
          sx={{
            "&:hover": {
              background: "#2F3E7C",
              color: "white",
            },
            width: "250px",
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            textTransform: "uppercase",
            color: "#253F8E",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <KeyboardArrowRightRounded
            sx={{
              borderRadius: "50%",
              border: "1px solid #231F20",
              marginRight: "12%",
            }}
          />{" "}
          TOUS NOIS BEINS
        </Button>
      </Container>
    </Box>
  );
};
