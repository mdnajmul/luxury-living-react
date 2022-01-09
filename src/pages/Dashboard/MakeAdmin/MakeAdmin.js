import { Alert, Button, Box, TextField, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    // dispatch(makeAdmin(email));
    // console.log(user);
  };

  return (
    <Box
      sx={{
        background: "#fff",
        p: "5%",
        mx: "20%",
        mt: "5%",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "#251D58", fontWeight: "900" }}
        gutterBottom
      >
        Make Admin
      </Typography>
      <Grid container justifyContent="center">
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br />
          <Button
            sx={{ mt: 4, background: "#251D58", color: "#fff" }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Grid>
      {false && (
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mt: 4 }}
          gutterBottom
        >
          <Alert severity="success">Made Admin successfully!</Alert>
        </Typography>
      )}
    </Box>
  );
};

export default MakeAdmin;
