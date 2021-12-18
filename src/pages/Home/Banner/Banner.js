import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "../../../images/banner.png";

const Banner = () => {
  const useStyle = makeStyles({
    navBtn: {
      color: "#000",
      textDecoration: "none",
    },
    btnColor: {
      background: "#251D58 !important",
      color: "#fff !important",
    },
  });

  const { navBtn, btnColor } = useStyle();
  return (
    <Box>
      <AppBar elevation={0} style={{ background: "#F6F6F6" }} position="static">
        <Container>
          <Toolbar style={{ border: "none" }}>
            <Grid
              container
              spacing={{ md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid sx={{ mt: 4, my: 12 }} item xs={4} sm={8} md={6}>
                <Typography
                  style={{ color: "#1F1632", fontWeight: "bold" }}
                  variant="h4"
                  component="div"
                >
                  We Build
                </Typography>
                <Typography
                  style={{ color: "#1F1632", fontWeight: "bold" }}
                  variant="h4"
                  component="div"
                >
                  Your Dream
                </Typography>
                <Typography
                  style={{ color: "#606268", margin: "15px 0" }}
                  variant="p"
                  component="div"
                >
                  Online Easte Agency, the mordern way to sell your own home,
                  You can use Griffin Residential to market your property
                </Typography>
                <NavLink className={navBtn} to="">
                  <Button className={btnColor}>Booking</Button>
                </NavLink>
              </Grid>
              <Grid sx={{ mt: 4 }} item xs={4} sm={8} md={6}>
                <img
                  style={{ width: "100%", height: "80%" }}
                  src={bannerImg}
                  alt=""
                />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Banner;
