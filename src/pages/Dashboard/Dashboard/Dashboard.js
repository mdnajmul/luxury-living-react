import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import defaultUser from "../../../images/user.png";
import "./Dashboard.css";
import NestedRoutes from "../NestedRoutes/NestedRoutes";
import useAuth from "../../../hooks/useAuth";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { user, admin } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink to="/" style={{ cursor: "pointer" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, mt: 2, ml: 2 }}
        >
          <img height="45" width="130" src={logo} alt="" />
        </Typography>
      </NavLink>
      <Toolbar />
      <SidebarNavigation />
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
            {user.email && (
              <div className="mx-3 text-center">
                {user.photoURL ? (
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={defaultUser}
                    alt=""
                  />
                )}

                <span className="">
                  {" "}
                  {user?.displayName} | {admin ? "Admin" : "Subscriber"}
                </span>
              </div>
            )}
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
          pl: 3,
          pr: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "#E5E5E5",
          height: "120vh",
        }}
      >
        <Toolbar />
        {/* Nested Routes */}
        <NestedRoutes />
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
