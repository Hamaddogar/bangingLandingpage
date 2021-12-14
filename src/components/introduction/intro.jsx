import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../header/Header";
import BG from "./assets/background.jpg";
export default () => {
  return (
    <Box
      maxWidth="xl"
      margin="auto"
      sx={{
        backgroundImage: `url(${BG})`,
        backgorundRepeat: "no-repeat",
        // backgoroundPosition: "center center",
        backgroundSize: "100% 100%",
      }}
      pb={{ xs: false, md: 14 }}
    >
      <Header />
      <Container>
        <Grid container alignItems="center" pt={{ xs: 5, md: 10 }}>
          <Grid item xs={12} sm={8} sx={{ color: "white" }}>
            <Typography
              fontSize={{ xs: "20px", sm: "30px", md: "50px" }}
              sx={{
                textTransform: "uppercase",
                fontFamily: "Playfair Display",
                fontStyle: "normal",
                lineHeight: "1.3",
                letterSapcing: "2px",
              }}
            >
              achat vente etla gestion de biens immobiliers de qualite
            </Typography>
            <Typography mt={3} width={{ xs: "90%", md: "60%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              distinctio enim tenetur quae facilis, quis beatae perspiciatis
            </Typography>
            <Typography mt={10}>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontStyle: "italic",
                }}
              >
                Lorem ipsum dolor sit ?
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
