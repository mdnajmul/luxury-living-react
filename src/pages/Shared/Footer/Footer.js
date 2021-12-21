import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Box className="footer-top">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{
                  textAlign: "start",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
                variant="h6"
              >
                <PinDropIcon style={{ fontSize: "15px", color: "#ffffff" }} />{" "}
                H#000 (0th Floor), Road #00,
                <br /> New DOHS, Mohakhali, Dhaka, Bangladesh
              </Typography>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "900",
                  textAlign: "start",
                  mb: 2,
                }}
                variant="h5"
                component="div"
              >
                Company
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/products">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Project
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Our Team
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Terms Conditions
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Submit Listing
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "900",
                  textAlign: "start",
                  mb: 2,
                }}
                variant="h5"
                component="div"
              >
                Quick Links
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/products">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Quick Links
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Rentals
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Sales
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Contact
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Our blog
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "900",
                  textAlign: "start",
                  mb: 2,
                }}
                variant="h5"
                component="div"
              >
                About us
              </Typography>
              <Typography
                sx={{ textAlign: "justify", mt: 2, mb: 2 }}
                variant="p"
                component="div"
                style={{ color: "white" }}
              >
                This is the first and largest website about housing in
                Bangladesh. We have started our journey since 25th January 2019.
                We have experienced and hard working team and our prime goal is
                to provide best & latest designed houses to the customers in
                easy way. We have easy payment system.
              </Typography>
              <Typography sx={{ textAlign: "start", pb: 4 }}>
                <FontAwesomeIcon
                  className="font-icon fb-icon me-10"
                  icon={faFacebook}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon yt-icon me-10"
                  icon={faYoutube}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon tw-icon me-10"
                  icon={faTwitter}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon in-icon me-10"
                  icon={faInstagram}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon ln-icon"
                  icon={faLinkedinIn}
                />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="footer-bottom">
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ textAlign: "start", mt: 4, mb: 4 }}
              variant="p"
              component="div"
              style={{ color: "white", fontWeight: "bold" }}
            >
              &copy; Copyrights {new Date().getFullYear()} Luxury
              <span style={{ color: "red" }}>Living </span> All rights reserved.
            </Typography>
            <Typography
              sx={{ textAlign: "start", mt: 4, mb: 4 }}
              variant="p"
              component="div"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Designed by najmulovi
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
