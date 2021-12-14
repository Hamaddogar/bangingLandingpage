import {
  Button,
  Container,
  Grid,
  Hidden,
  Link,
  List,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import menu from "./assets/menu.png";
import "./header.css";
import logo from "./logo.png";
import {
  AccountTree,
  AddRoad,
  DeviceHub,
  FolderSpecial,
  Home,
  Menu,
  StackedLineChart,
} from "@mui/icons-material";

const Header = ({ setOpen }) => {
  const theme = createTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchmd = useMediaQuery(theme.breakpoints.down("md"));
  const dataSet = [
    {
      name: "BUY",
      link: "#",
      icon: <Home sx={{ color: "#231F20" }} />,
    },
    {
      name: "POPULAR",
      link: "#",
      icon: <AccountTree sx={{ color: "#231F20" }} />,
    },
    {
      name: "BEST OF",
      link: "#",
      icon: <FolderSpecial sx={{ color: "#231F20" }} />,
    },
    {
      name: "NEW DESIGN",
      link: "#",

      icon: <DeviceHub sx={{ color: "#231F20" }} />,
    },
    {
      name: "UP COMING",
      link: "#",

      icon: <AddRoad sx={{ color: "#231F20" }} />,
    },
  ];
  let dir = "right";
  const [state, setState] = React.useState({});
  const toggleDrawer = (open) => () => {
    setState({ [dir]: open });
  };

  return (
    <>
      <Container>
        <Grid item textAlign="right">
          <img
            src={menu}
            sx={{
              color: "#FFFFFF",
              //   fontSize: "35px",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={toggleDrawer(dir, true)}
          />

          <SwipeableDrawer
            anchor={dir}
            open={state[dir]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              sx={{
                width: 200,
                marginLeft: "1vw",
                marginRight: "1vw",
                marginTop: "5vh",
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem>
                  <ListItemText>
                    <img src={logo} width="100%" />
                  </ListItemText>
                </ListItem>
                {dataSet.map((obj, index) => (
                  <ListItem key={index}>
                    <ListItemIcon> {obj.icon} </ListItemIcon>
                    <a
                      href={obj.link}
                      style={{ color: "#231F20", textDecoration: "none" }}
                    >
                      <ListItemText primary={obj.name} />
                    </a>
                  </ListItem>
                ))}
                <ListItem>
                  <ListItemIcon>
                    {" "}
                    <StackedLineChart sx={{ color: "#231F20" }} />{" "}
                  </ListItemIcon>
                  <a style={{ color: "#231F20", textDecoration: "none" }}>
                    <ListItemText primary="STAKING" />
                  </a>
                </ListItem>

                <Divider
                  sx={{
                    background: "#231F20",
                    height: "4px",
                    borderRadius: "20px",
                    margin: "10px 0px",
                  }}
                />
              </List>
            </Box>
          </SwipeableDrawer>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
