import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import user1 from "../../../images/user1.png";
import user2 from "../../../images/user2.png";
import user3 from "../../../images/user3.png";

const Testimonials = () => {
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
    <Box sx={{ flexGrow: 1, background: "#F6F6F6" }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 900,
            pt: 8,
            color: "#1F1632",
            textAlign: "center",
          }}
          variant="h6"
          component="div"
        >
          Testimonials
        </Typography>
        <Grid>
          <Slider {...settings}>
            <Grid sx={{ mt: 4 }}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    padding: "8px",
                  }}
                  image={user1}
                  alt="green iguana"
                />
                <CardContent sx={{ px: 2 }}>
                  <Typography
                    sx={{ textAlign: "center", my: 2, color: "text.secondary" }}
                    variant="body2"
                  >
                    <span>&#10077;</span>
                    They have excellent, responsive technical support. Even if
                    you think you have a dumb question, they are patient and
                    happy to help.
                    <span>&#10078;</span>
                  </Typography>
                  <Typography sx={{ textAlign: "center" }} variant="body2">
                    <span style={{ color: "blue" }}>
                      &#10149; {"Najmul Ovi"}
                    </span>
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", fontWeight: "500" }}
                    variant="body2"
                  >
                    CEO, Manpol
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", my: 2 }}
                    variant="body2"
                  >
                    <Rating name="read-only" value={4} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ mt: 4 }}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    padding: "8px",
                  }}
                  image={user2}
                  alt="green iguana"
                />
                <CardContent sx={{ px: 2 }}>
                  <Typography
                    sx={{ textAlign: "center", my: 2, color: "text.secondary" }}
                    variant="body2"
                  >
                    <span>&#10077;</span>
                    They have excellent, responsive technical support. Even if
                    you think you have a dumb question, they are patient and
                    happy to help.
                    <span>&#10078;</span>
                  </Typography>
                  <Typography sx={{ textAlign: "center" }} variant="body2">
                    <span style={{ color: "blue" }}>
                      &#10149; {"Najmul Ovi"}
                    </span>
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", fontWeight: "500" }}
                    variant="body2"
                  >
                    CEO, Manpol
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", my: 2 }}
                    variant="body2"
                  >
                    <Rating name="read-only" value={4} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ mt: 4 }}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    padding: "8px",
                  }}
                  image={user3}
                  alt="green iguana"
                />
                <CardContent sx={{ px: 2 }}>
                  <Typography
                    sx={{ textAlign: "center", my: 2, color: "text.secondary" }}
                    variant="body2"
                  >
                    <span>&#10077;</span>
                    They have excellent, responsive technical support. Even if
                    you think you have a dumb question, they are patient and
                    happy to help.
                    <span>&#10078;</span>
                  </Typography>
                  <Typography sx={{ textAlign: "center" }} variant="body2">
                    <span style={{ color: "blue" }}>
                      &#10149; {"Najmul Ovi"}
                    </span>
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", fontWeight: "500" }}
                    variant="body2"
                  >
                    CEO, Manpol
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", my: 2 }}
                    variant="body2"
                  >
                    <Rating name="read-only" value={4} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ mt: 4 }}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    padding: "8px",
                  }}
                  image={user1}
                  alt="green iguana"
                />
                <CardContent sx={{ px: 2 }}>
                  <Typography
                    sx={{ textAlign: "center", my: 2, color: "text.secondary" }}
                    variant="body2"
                  >
                    <span>&#10077;</span>
                    They have excellent, responsive technical support. Even if
                    you think you have a dumb question, they are patient and
                    happy to help.
                    <span>&#10078;</span>
                  </Typography>
                  <Typography sx={{ textAlign: "center" }} variant="body2">
                    <span style={{ color: "blue" }}>
                      &#10149; {"Najmul Ovi"}
                    </span>
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", fontWeight: "500" }}
                    variant="body2"
                  >
                    CEO, Manpol
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", my: 2 }}
                    variant="body2"
                  >
                    <Rating name="read-only" value={4} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
