import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  let { bookId } = useParams();
  const [service, setService] = useState([]);
  const { user, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://dry-falls-42041.herokuapp.com/services/${bookId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [bookId]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  const { name, img, description, price } = service || {};

  const onSubmit = (data) => {
    data.orderDetails = service;
    fetch("https://dry-falls-42041.herokuapp.com//place-order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Good job!", "Order Placced Successfully!", "success");
          reset();
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 500,
            m: 2,
            mt: 4,
            textAlign: "center",
          }}
          variant="h4"
          component="div"
        >
          <span style={{ color: "orange" }}>SERVICE & SHIPPING DETAILS</span>
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ mt: 4 }} item xs={4} sm={8} md={6}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{
                  width: "100%",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={img}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  {name}
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    PRICE:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    ${price}
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="p"
                  component="div"
                >
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={8} md={6}>
            <div className="shipping-form">
              <div>
                <h2
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Shipping Adress
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Your name"
                    readOnly
                    defaultValue={user?.displayName}
                    {...register("name")}
                  />
                  <input
                    placeholder="Your email"
                    readOnly
                    defaultValue={user?.email}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error">This field is required</span>
                  )}
                  <input
                    placeholder="Your phone number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="error">This field is required</span>
                  )}
                  <input
                    placeholder="Your city"
                    defaultValue=""
                    {...register("city")}
                  />
                  <input
                    placeholder="Your address"
                    defaultValue=""
                    {...register("address")}
                  />
                  <input
                    className="submit-btn"
                    type="submit"
                    value="Placed Order"
                  />
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Shipping;
