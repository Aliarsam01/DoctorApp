import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Light from "../../asset/light.png";
import Vec from "../../asset/vec.png";
import Women from "../../asset/women.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Corporates() {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "100px 0 50px 0",
          background: "#F2FCFD",
        }}
      >
        <Grid item xs={10} md={5}>
          <img style={{ width: "100%" }} src={Women} />
        </Grid>

        <Grid
          className="header"
          item
          container
          xs={10}
          md={5}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "500px",
          }}
        >
          <img src={Rect} style={{ position: "absolute" }} />

          <Typography
            className="restore"
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "'Poppins', sans-serif",
              marginLeft: "10px",
            }}
          >
            For Corporates
            <img src={Light} style={{ position: "absolute", top: "-15px" }} />
          </Typography>
          <img
            style={{ display: "block", margin: "auto", paddingBottom: "20px" }}
            src={Vec}
          />

          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            Identify and address stress and non-communicable diseases
          </Typography>
          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            Tailored program for a more vibrant and durable workforce
          </Typography>
          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            AI analytics and personalised content to support employees
          </Typography>

          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            Affordable plans for companies of all sizes
          </Typography>
          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            Corporate dashboard for HR to easily manage employee health
          </Typography>
          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            Functional Medicine Approach. Treat the root cause
          </Typography>
          <Typography
            sx={{ color: "#787C7E", fontSize: "13px", paddingBottom: "15px" }}
          >
            <CheckCircleIcon sx={{ fontSize: "15px", color: "#2EB1BE" }} />
            Increase productivity and improve work environment
          </Typography>

          <Button
            className="learn"
            sx={{
              background: "#2EB1BE",
              textTransform: "capitalize",
              padding: "10px 20px",
              color: "white",
              fontWeight: "700",
              width: "25%",
              marginTop: "30px",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Corporates;
