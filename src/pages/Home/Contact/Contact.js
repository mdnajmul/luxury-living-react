import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34qhcuj",
        "template_k88rvlf",
        form.current,
        "user_xQ2aTrW3Jba3Qhnj7eftS"
      )
      .then(
        (result) => {
          Swal.fire("Good job!", "Message Send Successfully!", "success");
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      );
    e.target.reset();
  };

  return (
    <Box>
      <Container id="contact">
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
        {/* <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch", maxWidth: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div style={{ textAlign: "center" }}>
              <TextField
                sx={{ background: "#F1F3F6" }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
              />
              <TextField
                sx={{ background: "#F1F3F6" }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name="lastName"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <TextField
                sx={{ background: "#F1F3F6" }}
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="email"
              />
              <TextField
                sx={{ background: "#F1F3F6" }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phone"
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
                name="message"
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
          </form>
        </Box> */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  style={{ background: "#F1F3F6" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  style={{ background: "#F1F3F6" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Mobile Number"
                  style={{ background: "#F1F3F6" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control"
                  placeholder="What's on your mind?"
                  id="message"
                  name="message"
                  rows="6"
                  style={{ background: "#F1F3F6" }}
                ></textarea>
              </div>
              <div>
                <button
                  style={{
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    border: "none",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    borderRadius: "5px",
                  }}
                  className={btnColor}
                  type="submit"
                  value="Send Message"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
