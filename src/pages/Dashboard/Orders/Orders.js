import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const Orders = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{}}>
            <TableRow>
              <TableCell style={{ backgroundColor: "#6F6C6F", margin: "5px" }}>
                #
              </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email ID</TableCell>
              <TableCell align="center">Service</TableCell>
              <TableCell align="center">Pay With</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="center">{"Najmul Ovi"}</TableCell>
              <TableCell align="center">{"najmulovi@gmail.com"}</TableCell>
              <TableCell align="center">{"Office Interior Design"}</TableCell>
              <TableCell align="center">{"Credit Card"}</TableCell>
              <TableCell align="center">{"Pending"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
