import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Orders = () => {
  const allStatus = ["Pending", "On going", "Done"];
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {};
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ background: "#001E3C" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "700" }}>#</TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "700" }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "700" }}
              >
                Email ID
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "700" }}
              >
                Service
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "700" }}
              >
                Pay With
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "700" }}
              >
                Status
              </TableCell>
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
              <TableCell align="center">
                <FormControl sx={{ m: 1, minWidth: 280 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Change Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={status}
                    onChange={handleChange}
                    autoWidth
                    label="Change Status"
                  >
                    {allStatus.map((status) => (
                      <MenuItem
                        key={status}
                        value={status}
                        style={{ color: "#000" }}
                      >
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
