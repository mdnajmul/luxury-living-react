import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import logo from "../../../images/logo.png";
import { Container, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Navigation.css";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#000",
      textDecoration: "none",
      marginRight: "20px",
      "&:hover": {
        background: "#251D58 !important",
        color: "#fff !important",
        padding: "5px",
        paddingBottom: "8px",
        borderRadius: "5px",
      },
      "&:active": {
        background: "#251D58 !important",
        color: "#fff !important",
      },
    },
    navBtn: {
      color: "#000",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("md")]: {
        textAlign: "right",
      },
    },
    btnColor: {
      background: "#251D58 !important",
      color: "#fff !important",
    },
  });
  const { navItem, navBtn, navIcon, navItemContainer, navLogo, btnColor } =
    useStyle();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <NavLink className={navItem} to="/home">
              <Button color="inherit">Home</Button>
            </NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <NavLink className={navItem} to="">
              <Button color="inherit">About us</Button>
            </NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <NavLink className={navItem} to="/all-services">
              <Button color="inherit">All Services</Button>
            </NavLink>
          </ListItemText>
        </ListItem>
        <Divider />

        {user?.email && (
          <ListItem button>
            <ListItemText>
              <NavLink className={navItem} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </NavLink>
            </ListItemText>
          </ListItem>
        )}
        <Divider />

        {user?.email ? (
          <ListItem button>
            <ListItemText>
              <Button className={btnColor} onClick={logOut}>
                Logout
              </Button>
            </ListItemText>
          </ListItem>
        ) : (
          <ListItem button>
            <ListItemText>
              <NavLink
                style={{ marginLeft: "15px" }}
                className={navBtn}
                to="/login"
              >
                <Button className={btnColor}>Login</Button>
              </NavLink>
            </ListItemText>
          </ListItem>
        )}
        <Divider />
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          style={{ background: "#F6F6F6" }}
          position="static"
        >
          <Container>
            <Toolbar>
              <IconButton
                className={navIcon}
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                style={{ color: "blue" }}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                className={navLogo}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <NavLink to="/" style={{ cursor: "pointer" }}>
                  <img height="45" width="130" src={logo} alt="" />
                </NavLink>
              </Typography>
              <Box className={navItemContainer}>
                <NavLink className={navItem} to="/home">
                  <Button color="inherit">Home</Button>
                </NavLink>
                <NavLink className={navItem} to="">
                  <Button color="inherit">About us</Button>
                </NavLink>
                <NavLink className={navItem} to="/all-services">
                  <Button color="inherit">All Services</Button>
                </NavLink>

                {user?.email && (
                  <NavLink className={navItem} to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                  </NavLink>
                )}

                {user?.email ? (
                  <Button className={btnColor} onClick={logOut}>
                    Logout
                  </Button>
                ) : (
                  <NavLink className={navBtn} to="/login">
                    <Button className={btnColor}>Login</Button>
                  </NavLink>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
