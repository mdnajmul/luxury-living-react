import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import Service from "../../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  //Get all services
  useEffect(() => {
    fetch("https://dry-falls-42041.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const homeServices = services.slice(0, 3);

  const useStyle = makeStyles({
    navBtn: {
      color: "#000",
      textDecoration: "none",
    },
    btnColor: {
      background: "#251D58 !important",
      color: "#fff !important",
      textTransform: "none !important",
    },
  });

  const { navBtn, btnColor } = useStyle();
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            fontWeight: 500,
            mt: 8,
            color: "#251D58",
            textAlign: "center",
          }}
          variant="h6"
          component="div"
        >
          Service
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#1F1632",
            textAlign: "center",
          }}
          variant="h5"
          component="div"
        >
          We're an agency tailored to all
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#1F1632",
            textAlign: "center",
          }}
          variant="h5"
          component="div"
        >
          clients' needs that always delivers
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {homeServices.map((service) => (
            <Service key={service?._id} service={service}></Service>
          ))}
        </Grid>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            textAlign: "center",
          }}
        >
          <NavLink className={navBtn} to="/all-services">
            <Button className={btnColor}>Explore more</Button>
          </NavLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Services;
