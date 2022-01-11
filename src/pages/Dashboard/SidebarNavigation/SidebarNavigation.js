import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";
import { makeStyles } from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles(() => ({
  link: {
    color: "#878787 !important",
    textTransform: "none !important",
    "&:hover": {
      color: "#251D58 !important",
      fontWeight: "600",
    },
  },
}));

const SidebarNavigation = () => {
  const { admin, logOut } = useAuth();
  const classes = useStyles();
  return (
    <Box>
      {admin ? (
        <>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/order`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <ShoppingBagIcon sx={{ mr: 2 }} /> Order list
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/addservice`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <AddIcon sx={{ mr: 2 }} /> Add Service
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/makeadmin`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Make Admin
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/manageservice`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <AppsIcon sx={{ mr: 2 }} /> Manage Services
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={`/dashboard/book`}
            style={{ textDecoration: "none" }}
            sx={{ mx: "auto" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <ShoppingCartIcon sx={{ mr: 2 }} /> Book
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/dashboard/mybooks`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <ShoppingBagIcon sx={{ mr: 2 }} /> Booking List
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/dashboard/review`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <MessageIcon sx={{ mr: 2 }} />
              Review
            </Button>
          </NavLink>
        </>
      )}
      <br />
      <NavLink style={{ textDecoration: "none" }} to="/">
        <Button onClick={logOut} className={classes.link}>
          <LogoutIcon sx={{ mr: 2 }} />
          Logout
        </Button>
      </NavLink>
    </Box>
  );
};

export default SidebarNavigation;
