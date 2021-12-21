import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import officeInteriorImg from "../../../images/office_interior.png";
import showroomDesignImg from "../../../images/showroom_design.png";
import residentialImg from "../../../images/residential.png";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const Services = () => {
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
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{
                  width: "30%",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={officeInteriorImg}
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
                  Office Interior Design
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
                  $299
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#606268",
                  }}
                  variant="p"
                  component="p"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{
                  width: "30%",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={showroomDesignImg}
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
                  Showroom Design
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
                  $399
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#606268",
                  }}
                  variant="p"
                  component="p"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{
                  width: "30%",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={residentialImg}
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
                  Residential/ Home
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
                  $499
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#606268",
                  }}
                  variant="p"
                  component="p"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            textAlign: "center",
          }}
        >
          <NavLink className={navBtn} to="">
            <Button className={btnColor}>Explore more</Button>
          </NavLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Services;
