import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./assets/logo.png";
import user from "./assets/user.png";
import MobileSideBar from "./MobileSideBar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./header.css";
export default () => {
  return (
    <Box maxWidth="xl" margin="auto">
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={2}>
          <SearchIcon sx={{ color: "#898C85" }} />
        </Grid>
        <Grid item xs={3} align="right" mt={1}>
          <img src={logo} alt={logo} width="100px" />
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="flex-end"
            alignItems="center"
          >
            <MobileSideBar sx={{ color: "#FEFEFE", width: "250px" }} />
            <AccountCircleOutlinedIcon style={{ color: "#898C85" }} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
