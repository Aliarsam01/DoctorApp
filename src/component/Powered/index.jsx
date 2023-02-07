import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";

import Info from "../../asset/info.png";
import { Container } from "@mui/system";

function Powered() {
  return (
    <>
      <Container>
        <Grid container sx={{ paddingTop: "150px" }}>
          <Grid item xs={2} sm={4} md={4}></Grid>
          <Grid item xs={8} sm={4} md={4} sx={{ position: "relative" }}>
            <img src={Rect} style={{ position: "absolute" }} />

            <Typography
              className="poweredTxt"
              sx={{
                fontWeight: "bold",
                fontSize: "45px",
                fontFamily: "'Apercu', sans-serif",

                marginLeft: "10px",
              }}
            >
              Powered by OLi
              <img
                className="exLight"
                src={Light}
                style={{ position: "absolute", top: "-15px" }}
              />
            </Typography>
            <img
              className="powerVec"
              style={{ display: "block", marginLeft: "auto" }}
              src={Vec}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}></Grid>

          <Grid item xs={12} sx={{ paddingTop: "15px" }}>
            <Typography
              sx={{
                fontFamily: "'Apercu', sans-serif",

                color: "#787C7E",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Our Optimal Life (OLi) algorithm combines 100+ health, fitness &
              wellness datapoints into a single score
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid container sx={{ padding: "50px 0" }}>
        <Grid item xs={12}>
          <img style={{ width: "100%" }} src={Info} />
        </Grid>
      </Grid>
    </>
  );
}

export default Powered;
