import { Alert, Button, Box, TextField, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAdmin, setMakeAdminStatus } from "../../../store/adminDashboard";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const success = useSelector(
    (state) => state.entities.adminDashboard.makeAdmin.adminAddSuccess
  );

  setTimeout(() => {
    dispatch(setMakeAdminStatus({ status: false }));
  }, 5000);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    dispatch(makeAdmin(email));
    Swal.fire("Good job!", "Role Status Changed Successfully!", "success");
    e.reset();
  };

  return (
    <Box
      className="mt-5"
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
