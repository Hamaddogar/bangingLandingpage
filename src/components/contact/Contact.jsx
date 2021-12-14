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
  Hidden,
} from "@mui/material";
import { Box } from "@mui/system";
import picture from "./assets/picture.jpg";
import s2 from "./assets/s2.jpg";

export default () => {
  return (
    <Box maxWidth="xl" margin="150px auto auto auto">
      <Grid container alignItems="center" sx={{ position: "relative" }}>
        <Grid item container xs={12} maxWidth="lg" margin="auto">
          <Grid item xs={12} md={4}>
            <Hidden mdDown>
              <Box sx={{ position: "absolute", width: 500, top: "13vh" }}>
                {" "}
                <img src={picture} width="100%" />
              </Box>
            </Hidden>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            height="740px"
            sx={{ background: "#283778", color: "white" }}
          >
            <Box
              width={{ xs: "95%", md: "60%" }}
              pl={{ xs: false, md: 28 }}
              pr={{ xs: false, md: 10 }}
              margin="auto"
              sx={{
                color: "white",
              }}
            >
              <Typography
                fontSize={{ xs: "16px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "white",
                  textTransform: "uppercase",
                }}
                mb={5}
                mt={15}
              >
                NOHASLO
              </Typography>
              <Typography
                fontSize={{ xs: "22px", md: "33px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#F2F3F7",
                  textTransform: "uppercase",
                }}
                mb={5}
              >
                achat vente etla gestion de biens immobiliers de qualite
              </Typography>
              <Typography
                fontSize={{ xs: "18px" }}
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  color: "#F2F3F7",
                }}
                mb={10}
              >
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                placeat totam voluptate quibusdam temporibus labore, unde
                voluptatibus blanditiis impedit necessitatibus dicta vitae
                provident. Necessitatibus officiis est sed repellat, architecto
                odio?{" "}
              </Typography>
              <Button
                variant="filled"
                sx={{
                  background: "white",
                  "&:hover": {
                    background: "#231F20",
                    color: "white",
                  },
                  color: "#253F8E",
                  padding: "2% 30px",
                  fontSize: "18px",
                }}
              >
                <KeyboardArrowRightRounded
                  sx={{
                    borderRadius: "50%",
                    padding: "3%",
                    border: "1px solid #253F8E",
                    marginRight: "8%",
                  }}
                />{" "}
                CONTACTIZE
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={15}>
          <Grid container>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <img src={s2} width="100%" height="600px" />
              <Box
                sx={{
                  textAlign: "center",
                  position: "absolute",
                  bottom: "10%",
                  right: "6%",
                  textAlign: "left",
                }}
                padding={{ xs: "2%", md: "4% 4%" }}
                backgroundColor="white"
                width={{ xs: "55%", sm: "35%", md: "25%" }}
              >
                <Typography
                  fontSize={{ xs: "16px" }}
                  sx={{
                    fontFamily: "Playfair Display",
                    fontStyle: "normal",
                    color: "#253F8E",
                    textTransform: "uppercase",
                  }}
                  mb={2}
                >
                  NOHASLO
                </Typography>
                <Typography
                  fontSize={{ xs: "20px", md: "24px" }}
                  sx={{
                    fontFamily: "Playfair Display",
                    fontStyle: "normal",
                    color: "#253F8E",
                    textTransform: "uppercase",
                  }}
                  mb={3}
                >
                  vous sohatize nos reljondre?
                </Typography>
                <Typography fontSize={{ xs: "16px" }} color="#727272">
                  Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                  dui. In malesuada enim
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
