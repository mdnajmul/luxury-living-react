import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import officeInteriorImg from "../../../images/office_interior.png";
import showroomDesignImg from "../../../images/showroom_design.png";
import residentialImg from "../../../images/residential.png";
import SingleBook from "./SingleBook";

const MyBooks = () => {
  const orders = [
    {
      _id: "oidao23oi90aoi",
      title: "Office Interior Design",
      price: 299,
      image: officeInteriorImg,
      placedAt: "12/28/2021, 10:23:21 AM",
      orderStatus: "Pending",
    },
    {
      _id: "oidao23oi9sdoi",
      title: "Adult Thai Diaper",
      image: showroomDesignImg,
      price: 399,
      placedAt: "12/28/2021, 10:23:21 AM",
      orderStatus: "Done",
    },
    {
      _id: "oidao2wew90aoi",
      title: "Residential/ Home",
      image: residentialImg,
      price: 499,
      placedAt: "12/28/2021, 10:23:21 AM",
      orderStatus: "On going",
    },
    {
      _id: "oidao2wew80api",
      title: "Color Combination",
      image: residentialImg,
      price: 599,
      placedAt: "12/28/2021, 10:23:21 AM",
      orderStatus: "Pending",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {orders.map((order) => (
            <SingleBook key={order._id} order={order} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyBooks;
