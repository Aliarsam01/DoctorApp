import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import Apple from "../../asset/apple.png";
import And from "../../asset/mobile.png";
import Mob from "../../asset/mob.png";
import Info from "../../asset/info.png";

function Powered() {
  return (
    <>
      <Grid container sx={{ paddingTop: "150px" }}>
        <Grid item xs={2} md={4}></Grid>
        <Grid item xs={8} md={4} sx={{ position: "relative" }}>
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
            Powered by OLi
            <img src={Light} style={{ position: "absolute", top: "-15px" }} />
          </Typography>
          <img style={{ display: "block", marginLeft: "auto" }} src={Vec} />
        </Grid>
        <Grid item xs={2} md={4}></Grid>

        <Grid item xs={12} sx={{ paddingTop: "15px" }}>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
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
      <Grid container sx={{ padding: "50px 0" }}>
        <Grid item xs={12}>
          <img style={{ width: "100%" }} src={Info} />
        </Grid>
      </Grid>

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
          sx={{ position: "relative", height: "360px", alignSelf: "center" }}
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
            All in one place. Free
            <img src={Light} style={{ position: "absolute", top: "-15px" }} />
          </Typography>
          <Typography
            className="restore"
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "'Poppins', sans-serif",
              marginLeft: "10px",
            }}
          >
            To Download.
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
              Monitor your health progress from the palm of your hand
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
          <img className="header" style={{ width: "100%" }} src={Mob} />
        </Grid>
      </Grid>
    </>
  );
}

export default Powered;
