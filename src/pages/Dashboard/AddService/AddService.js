import React from "react";
import { useForm } from "react-hook-form";
import cloudImage from "../../../images/cloud-upload.png";
import "./AddService.css";

const AddService = () => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { title, description, image, price } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image[0]);
    formData.append("description", description);

    // Send form data to Server
    // dispatch(addProductData(formData));

    reset();
    // setLoader(true);
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <div>
            <h2
              className="mb-4 text-center fw-bold"
              style={{ color: "#251D58" }}
            >
              Insert New Service
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
                <span className="text-danger">Please enter a description</span>
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
              value="Submit"
            />
          </form>

          {/* {loader && (
              <Stack
                sx={{ width: "100%", color: "grey.500", marginTop: "15px" }}
                spacing={2}
              >
                <LinearProgress color="success" />
              </Stack>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default AddService;
