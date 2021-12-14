import {
  KeyboardArrowRight,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import * as React from "react";
import {
  Container,
  InputBase,
  Grid,
  Divider,
  Button,
  InputAdornment,
  Typography,
  TextField,
} from "@mui/material";
import "./mailANDcontect.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import s23 from "./assets/s23.jpg";
import s25 from "./assets/s25.jpg";
import s26 from "./assets/s26.jpg";
function CardFun({ img, title, text }) {
  return (
    <Card
      sx={{
        width: "95%",
        margin: "auto",
        borderRadius: 0,
        boxShadow: 0,
        maxWidth: "380px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            component="div"
            sx={{
              // fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#666666",
              textAlign: "left",
              // fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            12 january 21
          </Typography>
          <Typography
            mt={1}
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#253F8E",
              textTransform: "uppercase",
              fontWeight: "bold",
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
  const mailGetter = (event) => {
    event.preventDefault();
    // do what you want
  };
  //   dropdownitems

  const [currency, setCurrency] = React.useState("EUR");
  const sliderDataSet = [
    {
      img: s23,
      title:
        "CAROS CRIS COMOMDO ALIKULAM LACTUS LAM BALANDANT AGUAS CARAS ULLAMAROPE",
      text: "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi con.",
    },
    {
      img: s25,
      title:
        "CAROS CRIS COMOMDO ALIKULAM LACTUS LAM BALANDANT AGUAS CARAS ULLAMAROPE",
      text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt uma non. ",
    },
    {
      img: s26,
      title:
        "CAROS CRIS COMOMDO ALIKULAM LACTUS LAM BALANDANT AGUAS CARAS ULLAMAROPE",
      text: "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi con.",
    },
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box maxWidth="xl" margin="100px auto auto auto">
      <Box
        width={{ xs: "95%", sm: "80", md: "60%" }}
        margin="auto"
        sx={{ color: "#293365", textAlign: "center" }}
        mb={9}
      >
        {" "}
        <Typography
          fontSize={{ xs: "16px" }}
          mt={12}
          mb={2}
          sx={{
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            textTransform: "uppercase",
          }}
        >
          Have any Question?
        </Typography>
        <Typography
          fontSize={{ xs: "30px", md: "45px" }}
          sx={{
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            textTransform: "uppercase",
          }}
        >
          un bins a bandres ? <br /> estimaze la rapidment
        </Typography>
      </Box>
      <Container>
        <Box
          //   width={{ xs: "95%", md: "80%" }}
          component="form"
          onSubmit={mailGetter}
          margin="auto"
        >
          <Grid
            container
            alignItems="center"
            maxWidth="md"
            margin="auto"
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{
              background: "white",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              boxShadow: "10px 10px 10px #ECF0F6",
            }}
          >
            <Grid item xs={8} pl={5} mt={1}>
              <Box
                mt={-2}
                fontFamily="Playfair Display"
                fontSize={{ xs: 10, xs: 14, md: 16 }}
                color="gray"
              >
                BENS THEF HIGH
              </Box>
              <InputBase
                sx={{
                  width: "90%",
                  fontSize: "18px",
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  // height: "30px",
                  borderRight: "1px solid #EFEFEF",
                  textTransform: "uppercase",
                }}
                inputProps={{ border: "none" }}
              />
            </Grid>

            <Grid item xs={4} sx={{ background: "#283778" }}>
              <Button
                sx={{
                  background: "#283778",
                  width: "100%",
                  color: "white",
                }}
                className="button2"
              >
                <KeyboardArrowRight /> RECHARCHIZE
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <Grid container alginItems="center" justifyContent="center">
          <Grid item container xs={12} justifyContent="center">
            <Grid item xs={12}>
              <Typography
                fontSize={{ xs: "16px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#253F8E",
                  textTransform: "uppercase",
                }}
                mt={15}
              >
                NOHASLO
              </Typography>
            </Grid>
            {sliderDataSet.map((obj) => {
              return (
                <Grid item xs={12} sm={6} md={4} pt={3} pb={10}>
                  <CardFun {...obj} />
                </Grid>
              );
            })}

            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
