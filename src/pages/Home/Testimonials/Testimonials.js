import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { loadTestimonials } from "../../../store/userDashboard";
import Review from "./Review";

const Testimonials = () => {
  const dispatch = useDispatch();

  const testimonials = useSelector(
    (state) => state.entities.userDashboard.testimonials.allTestimonial
  );

  // const testimonialsLoading = useSelector(
  //   (state) => state.entities.userDashboard.testimonials.testimonialLoading
  // );

  //Get All Reviews
  useEffect(() => {
    dispatch(loadTestimonials());
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    accessibility: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, background: "#F6F6F6", pb: 8 }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 900,
            pt: 8,
            color: "#1F1632",
            textAlign: "center",
          }}
          variant="h4"
          component="div"
        >
          Testimonials
        </Typography>
        <Grid>
          <Slider {...settings}>
            {testimonials.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
