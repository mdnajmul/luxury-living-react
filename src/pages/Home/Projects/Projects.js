import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import project1Img from "../../../images/project-img-1.png";
import project2Img from "../../../images/project-img-2.png";
import project3Img from "../../../images/project-img-3.png";

const Projects = () => {
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
          Projects
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
          Discover the latest Interior Design
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
          available today
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
                  width: "100%",
                  height: "300px",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={project1Img}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#1F1632",
                    fontWeight: 600,
                  }}
                  variant="h6"
                  component="div"
                >
                  Villa on Washington Avenue
                </Typography>
                <Typography
                  sx={{ textAlign: "center", color: "#4D4F55" }}
                  variant="h6"
                  component="div"
                >
                  <PinDropIcon style={{ fontSize: "16px", color: "#1F1632" }} />{" "}
                  Dhaka, Bangladesh
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{
                  width: "100%",
                  height: "300px",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={project2Img}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#1F1632",
                    fontWeight: 600,
                  }}
                  variant="h6"
                  component="div"
                >
                  Luxury villa in Rego Park
                </Typography>
                <Typography
                  sx={{ textAlign: "center", color: "#4D4F55" }}
                  variant="h6"
                  component="div"
                >
                  <PinDropIcon style={{ fontSize: "16px", color: "#1F1632" }} />{" "}
                  Dhaka, Bangladesh
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{
                  width: "100%",
                  height: "300px",
                  margin: "0 auto",
                  padding: "8px",
                }}
                image={project3Img}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#1F1632",
                    fontWeight: 600,
                  }}
                  variant="h6"
                  component="div"
                >
                  Gorgeous house
                </Typography>
                <Typography
                  sx={{ textAlign: "center", color: "#4D4F55" }}
                  variant="h6"
                  component="div"
                >
                  <PinDropIcon style={{ fontSize: "16px", color: "#1F1632" }} />{" "}
                  Dhaka, Bangladesh
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
