import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Service = (props) => {
  const { _id, name, img, description, price } = props.service;
  return (
    <>
      <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
          <CardMedia
            component="img"
            style={{
              width: "30%",
              height: "100px",
              margin: "0 auto",
              padding: "8px",
            }}
            image={img}
            alt="green iguana"
          />
          <CardContent sx={{ px: 2 }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#16322E",
                fontWeight: 600,
              }}
              variant="h6"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#251D58",
                fontWeight: 600,
              }}
              variant="h6"
              component="div"
            >
              ${price}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#606268",
              }}
              variant="p"
              component="p"
            >
              {description.slice(0, 122)}
            </Typography>
            <Typography sx={{ textAlign: "center", mt: 2 }} variant="body2">
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to={`/services/${_id}`}
              >
                <Button
                  style={{
                    background: "#251D58",
                    color: "#fff",
                    textTransform: "none",
                  }}
                >
                  Book Now
                </Button>
              </NavLink>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Service;
