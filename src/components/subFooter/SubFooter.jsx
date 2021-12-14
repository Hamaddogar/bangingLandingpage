import { Facebook, Instagram } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import fb from "./assets/fb.jpg";
import insta from "./assets/insta.jpg";
import p from "./assets/p.jpg";
import Lin from "./assets/Lin.jpg";
export default (params) => {
  return (
    <Box
      maxWidth="xl"
      margin="auto"
      sx={{ background: "#050F2E", color: "white" }}
      pt={4}
      pb={4}
    >
      <Container>
        <Grid container justifyConten="space-between" alignItems="center">
          <Grid item xs={4} container alignItems="flex-start">
            <a href="#">
              <img src={fb} style={{ marginRight: "10px" }} />
            </a>
            <a href="#">
              <img src={insta} style={{ marginRight: "10px" }} />
            </a>
            <a href="#">
              <img src={p} style={{ marginRight: "10px" }} />
            </a>
            <a href="#">
              <img src={Lin} style={{ marginRight: "10px" }} />
            </a>
          </Grid>
          <Grid item xs={4}>
            <Typography
              fontSize="12px"
              textAlign="center"
              fontFamily="Playfair Display"
            >
              &copy; MENSION HOUSE. MENSIN
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Typography fontSize="12px" fontFamily="Playfair Display">
              CARDIONO HOUSE
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
