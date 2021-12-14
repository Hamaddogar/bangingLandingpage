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
import { Box } from "@mui/system";

export default () => {
  const dataSetFilter = (event) => {
    event.preventDefault();
    // do what you want
  };
  //   dropdownitems
  const currencies = [
    {
      value: "NBR DE PRIC",
      label: "NBR DE PRIC",
    },
    {
      value: "NBR DE PRIC",
      label: "NBR DE PRIC",
    },
    {
      value: "NBR DE PRIC",
      label: "NBR DE PRIC",
    },
    {
      value: "NBR DE PRIC",
      label: "NBR DE PRIC",
    },
  ];

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box maxWidth="xl" margin="-50px auto auto auto">
      <Container>
        <Box
          //   width={{ xs: "95%", md: "80%" }}
          component="form"
          onChange={dataSetFilter}
          margin="auto"
          boxShadow="0px 5px 20px #EDF0F6"
        >
          <Grid
            container
            alignItems="center"
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{
              background: "white",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              pl={3}
              pb={{ xs: 2, sm: false }}
              mt={1}
            >
              <Box
                fontFamily="Playfair Display "
                color="#C1C1C1"
                mt={{ xs: false, md: -3 }}
              >
                OU?
              </Box>
              <InputBase
                sx={{
                  width: "95%",
                  fontSize: "18px",
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  height: "30px",
                  borderRight: "1px solid #EFEFEF",
                }}
                inputProps={{ border: "none" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              pb={{ xs: 2, sm: false }}
              container
            >
              <InputBase
                defaultValue="PARIX MAX"
                sx={{
                  margin: "auto",
                  width: "90%",
                  fontSize: "18px",
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  height: "30px",
                  paddingRight: "10px",
                  borderRight: "1px solid #EFEFEF",
                }}
                inputProps={{ border: "none" }}
                endAdornment={<InputAdornment position="end">€</InputAdornment>}
              />
            </Grid>
            {/* dropdown */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              pb={{ xs: 2, sm: false }}
              container
            >
              <TextField
                select
                value={currency}
                onChange={handleChange}
                fontFamily="Playfair Display"
                SelectProps={{
                  native: true,
                }}
                sx={{
                  width: "95%",
                  color: "gray",
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  fontSize: "18px",
                  margin: "auto",
                  fontWeight: "600",
                  borderColor: "white",
                }}
                disableUnderline={false}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ background: "#283778" }}>
              <Button
                variant="filled"
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
      <Box
        width={{ xs: "95%", sm: "80", md: "60%" }}
        margin="auto"
        sx={{
          color: "#293365",
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontStyle: "normal",
        }}
        mb={10}
      >
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
        <Typography
          fontSize={{ xs: "15px" }}
          fontWeight="400"
          color="gray"
          mt={4}
          mb={5}
        >
          Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget
          libero posuere vulputate. Etiam elit elit, elementum sed varius at,
          adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
          ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
          posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis
          consequat at eget orci. Mauris molestie sit amet metus mattis varius.
          Donec sit amet ligula eget nisi sodales egestas. Aliquam.
        </Typography>
        <Box width="100%">
          <Button
            variant="filled"
            sx={{
              "&:hover": {
                background: "#2F3E7C",
                color: "white",
              },
              width: "200px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              textTransform: "uppercase",
              // padding: "2% 40px",
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
            EN SOVIR PLUS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
