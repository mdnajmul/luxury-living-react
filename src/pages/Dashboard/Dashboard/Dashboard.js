import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, NavLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import logo from "../../../images/logo.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#878787 !important",
    textTransform: "none !important",
    "&:hover": {
      color: "#251D58 !important",
      fontWeight: "600",
    },
  },
  active: {
    color: "#251D58 !important",
    fontWeight: "600",
  },
}));

const drawerWidth = 200;

const Dashboard = (props) => {
  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mt: 2, ml: 2 }}
      >
        <img height="45" width="130" src={logo} alt="" />
      </Typography>
      <Toolbar />
      {false ? (
        <Box>
          <NavLink
            style={{ textDecoration: "none" }}
            activeClassName={classes.active}
            to="/home"
          >
            <Button className={classes.link} color="inherit">
              <ShoppingBagIcon sx={{ mr: 2 }} /> Order list
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/manageAllOrders`}
            activeClassName={classes.active}
          >
            <Button className={classes.link} color="inherit">
              <AddIcon sx={{ mr: 2 }} /> Add Service
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/manageAllProducts`}
            activeClassName={classes.active}
          >
            <Button className={classes.link} color="inherit">
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Make Admin
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/addProduct`}
            activeClassName={classes.active}
          >
            <Button className={classes.link} color="inherit">
              <AppsIcon sx={{ mr: 2 }} /> Manage Services
            </Button>
          </NavLink>
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button className={classes.link} color="inherit">
              <LogoutIcon sx={{ mr: 2 }} />
              Logout
            </Button>
          </NavLink>
        </Box>
      ) : (
        <Box>
          <NavLink
            to="/home"
            style={{ textDecoration: "none" }}
            sx={{ mx: "auto" }}
          >
            <Button className={classes.link} color="inherit">
              <ShoppingCartIcon sx={{ mr: 2 }} /> Book
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/myorders`}
            style={{ textDecoration: "none" }}
            activeClassName={classes.active}
          >
            <Button className={classes.link} color="inherit">
              <ShoppingBagIcon sx={{ mr: 2 }} /> Booking List
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/review`}
            style={{ textDecoration: "none" }}
            activeClassName={classes.active}
          >
            <Button className={classes.link} color="inherit">
              <MessageIcon sx={{ mr: 2 }} />
              Review
            </Button>
          </NavLink>
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button className={classes.link} color="inherit">
              <LogoutIcon sx={{ mr: 2 }} /> Logout
            </Button>
          </NavLink>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff !important",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000 !important" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ color: "#0C0C0C", fontWeight: "600" }}
            component="div"
          >
            Dashboard
          </Typography>
          <Typography
            sx={{ color: "#251D58", fontWeight: "900", mx: 2 }}
            component="div"
          >
            |
          </Typography>
          <Typography
            sx={{
              color: "#0C0C0C",
              fontWeight: "600",
            }}
          >
            Najmul Ovi
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "#E5E5E5",
          height: "100vh",
        }}
      >
        <Toolbar />

        {/* <Switch>
          <PrivateRoute exact path={path}>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
          <PrivateRoute path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path={`${path}/payment`}>
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path={`${path}/review`}>
            <Review></Review>
          </PrivateRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch> */}
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
