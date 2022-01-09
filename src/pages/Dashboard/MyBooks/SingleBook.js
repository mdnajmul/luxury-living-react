import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const SingleBook = ({ order }) => {
  const { _id, title, image, price, placedAt, orderStatus } = order;
  const useStyle = makeStyles({
    pendingColor: {
      background: "#FFE3E3",
      color: "#FF4545",
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingTop: "10px",
      paddingBottom: "10px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    doneColor: {
      background: "#C6FFE0",
      color: "#009444",
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingTop: "10px",
      paddingBottom: "10px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    ongoingColor: {
      background: "#D5D5CF",
      color: "#F77C10",
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingTop: "10px",
      paddingBottom: "10px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    cancelBtn: {
      background: "red",
      color: "#fff",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingTop: "7px",
      paddingBottom: "7px",
      borderRadius: "5px",
      fontWeight: "bold",
      border: "none",
      marginLeft: "8px",
    },
  });

  const { pendingColor, doneColor, ongoingColor, cancelBtn } = useStyle();
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        sx={{
          minWidth: 275,
          border: 0,
          boxShadow: 2,
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          style={{
            width: "40%",
            height: "80%",
            margin: "0 auto",
            marginTop: "10px",
            padding: "10px",
          }}
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ px: 2 }}>
          <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
            <span style={{ color: "#251D58", fontWeight: "bold" }}>
              {title}
            </span>
          </Typography>
          <Typography
            sx={{ textAlign: "center", mt: 2 }}
            variant="p"
            component="div"
          >
            <span style={{ color: "#0511f5", fontWeight: "700" }}>
              ${price}
            </span>
          </Typography>
          <Typography
            sx={{ textAlign: "center", mt: 2 }}
            variant="p"
            component="div"
          >
            {orderStatus === "Pending" && (
              <Box>
                <span className={pendingColor}>{orderStatus}</span>
                <span>
                  <input className={cancelBtn} type="submit" value="Cancel" />
                </span>
              </Box>
            )}
            {orderStatus === "Done" && (
              <span className={doneColor}>{orderStatus}</span>
            )}
            {orderStatus === "On going" && (
              <span className={ongoingColor}>{orderStatus}</span>
            )}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleBook;
