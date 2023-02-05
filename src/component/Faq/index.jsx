import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import SimpleAccordion from "../Accordian";

export default function Faq() {
  return (
    <>
      <Grid container sx={{ padding: "100px 0" }}>
        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={10} md={6} sx={{ position: "relative" }}>
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
            Frequently Asked Questions
            <img
              src={Light}
              style={{ position: "absolute", top: "-15px", right: "0px" }}
            />
          </Typography>
          <img style={{ display: "block", marginLeft: "auto" }} src={Vec} />
        </Grid>
        <Grid item xs={1} md={3}></Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={10}>
          <SimpleAccordion />
        </Grid>
      </Grid>
    </>
  );
}
