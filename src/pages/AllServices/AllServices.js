import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const AllServices = () => {
  const [services, setServices] = useState([]);

  //Get all services
  useEffect(() => {
    fetch("https://dry-falls-42041.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Container>
        <Divider />
        <Typography
          sx={{
            fontWeight: 500,
            mt: 2,
            mb: 2,
            color: "#251D58",
            textAlign: "center",
          }}
          variant="h4"
          component="div"
        >
          All Services
        </Typography>
        <Divider />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service?._id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllServices;
