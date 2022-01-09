import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import cloudImage from "../../../images/cloud-upload.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  marginTop: "20px",
};

const ManageServices = () => {
  let i = 1;
  const allServices = [
    {
      id: 1,
      title: "Office Interior Design",
      img: "https://i.ibb.co/g6X363z/p1.png",
      price: 299,
    },
    {
      id: 2,
      title: "Showroom Design",
      img: "https://i.ibb.co/g6X363z/p1.png",
      price: 399,
    },
    {
      id: 3,
      title: "Residential/ Home",
      img: "https://i.ibb.co/g6X363z/p1.png",
      price: 499,
    },
  ];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Service has been deleted.", "success");
        //   setReload(!reload);
      }
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, description, image, price } = data;
    const service = {
      title,
      image,
      price,
      description: description.split("\n"),
    };
    console.log(service);
    //   dispatch(addRentFlat(saleFlatInfo));

    if (true) {
      Swal.fire("Good job!", "Service Updated Successfully!", "success");
      reset();
    }
  };

  return (
    <Box>
      {allServices.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ background: "#001E3C" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: "700" }}>
                  #
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Service Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Image
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allServices.map((service) => (
                <TableRow
                  key={service?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i++}
                  </TableCell>
                  <TableCell align="center">{service?.title}</TableCell>
                  <TableCell align="center">{"service Image"}</TableCell>
                  <TableCell align="center">$ {service?.price}</TableCell>
                  <TableCell align="center">
                    <button
                      style={{ border: "none", marginRight: "5px" }}
                      onClick={() => handleDelete(service?.id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </button>
                    <button onClick={handleOpen} style={{ border: "none" }}>
                      <EditIcon sx={{ color: "blue" }} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Modal for Edit Service */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Container>
            <div>
              <h2
                className="mb-4 text-center fw-bold"
                style={{ color: "#251D58" }}
              >
                Update Service Detail
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Service Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Service Title"
                  style={{ background: "#E5E5E5" }}
                  {...register("title", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">
                    Please enter a service title
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter detail about service"
                  style={{ background: "#E5E5E5" }}
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-danger">
                    Please enter a description
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price in integer value"
                  style={{ background: "#E5E5E5" }}
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-danger">Price is mandatory</span>
                )}
              </div>

              <div className="mt-4">
                <span
                  className="mb-2 d-inline-block"
                  style={{ fontWeight: "bold" }}
                >
                  Image
                </span>
                <div class="input-group mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    class="form-control"
                    style={{ background: "#E5E5E5" }}
                    id="inputGroupFile02"
                    {...register("image", { required: true })}
                  />
                  <label class="input-group-text" htmlFor="inputGroupFile02">
                    <img style={{ height: "35px" }} src={cloudImage} alt="" />{" "}
                    <span style={{ color: "#251D58", fontWeight: "bold" }}>
                      Upload image
                    </span>
                  </label>
                </div>
                {errors.image && (
                  <span className="text-danger">Please choose an image</span>
                )}
              </div>

              <input
                type="submit"
                className="btn fw-bold"
                style={{ background: "#251D58", color: "#fff" }}
                value="Update"
              />
            </form>
          </Container>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManageServices;
