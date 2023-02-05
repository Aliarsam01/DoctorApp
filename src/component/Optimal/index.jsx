import React from "react";
import { Grid, Typography } from "@mui/material";
import Rect from "../../asset/Rect.png";
import Light from "../../asset/light.png";
import Vec from "../../asset/vec.png";
import Apple from "../../asset/apple.png";
import And from "../../asset/mobile.png";
import Header from "../../asset/header.png";
import BasicRating from "../rating";

function Optimal() {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "50px 0",
        }}
      >
        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{ position: "relative", height: "360px" }}
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
            Restore Optimal Life
            <img src={Light} style={{ position: "absolute", top: "-15px" }} />
          </Typography>
          <img style={{ display: "block", margin: "auto" }} src={Vec} />

          <Grid item md={9}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "#787C7E",
                padding: "20px ",
              }}
            >
              Our mission at Optimists is to empower people to take charge of
              their own health and wellbeing. Whether you are just starting your
              journey and don't know where to begin, or you have a specific
              health concern in mind, we are here to help you on your path to
              optimal health.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <img style={{ width: "70%", height: "60px" }} src={Apple} />
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <img style={{ width: "70%", height: "60px" }} src={And} />
          </Grid>
        </Grid>
        <Grid item xs={10} md={4}>
          <img className="header" style={{ width: "100%" }} src={Header} />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "100px",
        }}
      >
        <Grid container item xs={10} md={5} sx={{ alignSelf: "center" }}>
          <Grid item md={8}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Healthcare the way you want it. Simple, convenient, and reliable.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          className="header"
          item
          xs={10}
          md={5}
          sx={{ background: "#FAFAFA", padding: "20px" }}
        >
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography style={{ fontWeight: "500", fontSize: "40px" }}>
              4.9
              <BasicRating />
            </Typography>
            <Typography style={{ fontWeight: "500", fontSize: "40px" }}>
              5k+
            </Typography>
            <Typography style={{ fontWeight: "500", fontSize: "40px" }}>
              20k+
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "12px",
                fontFamily: "'Poppins', sans-serif",
                color: "#787C7E",
              }}
            >
              Total Users
            </Typography>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "12px",
                fontFamily: "'Poppins', sans-serif",
                color: "#787C7E",
              }}
            >
              Employees
            </Typography>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "12px",
                fontFamily: "'Poppins', sans-serif",
                color: "#787C7E",
              }}
            >
              Happy Users
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Optimal;
