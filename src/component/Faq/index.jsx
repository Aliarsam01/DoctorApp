import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import SimpleAccordion from "../Accordian";
import { Container } from "@mui/system";

export default function Faq() {
  return (
    <>
      <Container>
        <Grid container sx={{ padding: "100px 0" }}>
          <Grid item xs={1} sm={3}></Grid>
          <Grid item xs={10} sm={6} sx={{ position: "relative" }}>
            <img src={Rect} style={{ position: "absolute" }} />

            <Typography
              className="Frequently"
              sx={{
                fontWeight: "bold",
                fontSize: "37px",
                fontFamily: "'Apercu', sans-serif",

                marginLeft: "10px",
                marginTop: "5px",
              }}
            >
              Frequently Asked Questions
              <img
                className="exLight"
                src={Light}
                style={{ position: "absolute", top: "-15px", right: "0px" }}
              />
            </Typography>
            <img
              className="cusVec"
              style={{ display: "block", marginLeft: "auto" }}
              src={Vec}
            />
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
      </Container>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={10}>
          <SimpleAccordion />
        </Grid>
      </Grid>
    </>
  );
}
