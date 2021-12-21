import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const Contact = () => {
  const useStyle = makeStyles({
    btnColor: {
      background: "#251D58 !important",
      color: "#fff !important",
      textTransform: "none !important",
      "&:hover": {
        background: "#251D58 !important",
        color: "#fff !important",
      },
    },
  });

  const { btnColor } = useStyle();
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            fontWeight: 500,
            mt: 8,
            color: "#1F1632",
            textAlign: "center",
          }}
          variant="h6"
          component="div"
        >
          Contact
        </Typography>
        <Typography
          sx={{
            fontWeight: 900,
            color: "#2D2D2D",
            textAlign: "center",
          }}
          variant="h5"
          component="div"
        >
          Let us handle your
        </Typography>
        <Typography
          sx={{
            fontWeight: 900,
            mb: 4,
            color: "#2D2D2D",
            textAlign: "center",
          }}
          variant="h5"
          component="div"
        >
          project, professionally.
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch", maxWidth: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ textAlign: "center" }}>
            <TextField
              sx={{ background: "#F1F3F6" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              sx={{ background: "#F1F3F6" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              sx={{ background: "#F1F3F6" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              sx={{ background: "#F1F3F6" }}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              sx={{
                width: "52ch !important",
                background: "#F1F3F6",
              }}
              multiline
              rows={3}
              id="outlined-basic"
              label="Your Message"
              variant="outlined"
            />
          </div>
          <Typography
            sx={{
              mt: 2,
              mb: 2,
              textAlign: "center",
            }}
          >
            <Button className={btnColor} type="submit">
              Send Message
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
