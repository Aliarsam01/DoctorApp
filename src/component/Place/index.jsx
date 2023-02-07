import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import Mob from "../../asset/mob.png";
import { Container } from "@mui/system";
import Apple from "../../asset/mobile.svg";
import And from "../../asset/apple.svg";

function Place() {
  return (
    <Container>
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
          sm={7}
          md={6}
          sx={{ position: "relative", height: "360px", alignSelf: "center" }}
        >
          <img src={Rect} style={{ position: "absolute" }} />

          <Typography
            className="place"
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "'Apercu', sans-serif",

              marginLeft: "10px",
              marginTop: "5px",
            }}
          >
            All in one place. Free
            <img
              className="exLight"
              src={Light}
              style={{ position: "absolute", top: "-15px" }}
            />
            <img
              style={{ display: "block", marginLeft: "auto", width: "40%" }}
              src={Vec}
            />
          </Typography>

          <Typography
            className="places"
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "'Apercu', sans-serif",

              marginLeft: "10px",
              marginTop: "-15px",
            }}
          >
            To Download
          </Typography>

          <Grid item md={9}>
            <Typography
              className="placess"
              sx={{
                fontFamily: "'Apercu', sans-serif",

                color: "#787C7E",
                // padding: "20px ",
                fontSize: "14px",
              }}
            >
              Monitor your health progress from the palm of your hand
            </Typography>
          </Grid>
          <Grid
            className="iconss"
            item
            xs={5}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "20px",
            }}
          >
            <img
              className="And"
              style={{ width: "80%", height: "60px" }}
              src={And}
            />
          </Grid>
          <Grid
            className="iconss"
            item
            xs={5}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "20px",
            }}
          >
            <img
              className="And"
              style={{ width: "80%", height: "60px" }}
              src={Apple}
            />
          </Grid>
        </Grid>
        <Grid item xs={10} sm={5} md={4}>
          <img className="headersss" style={{ width: "100%" }} src={Mob} />
        </Grid>
        <Grid
          className="iconsss"
          item
          xs={5}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "start",
            paddingTop: "20px",
          }}
        >
          <img
            className="And"
            style={{ width: "80%", height: "60px" }}
            src={And}
          />
        </Grid>
        <Grid
          className="iconsss"
          item
          xs={5}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "start",
            paddingTop: "20px",
          }}
        >
          <img
            className="And"
            style={{ width: "80%", height: "60px" }}
            src={Apple}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Place;
