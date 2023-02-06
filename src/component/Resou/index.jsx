import { Grid, Typography } from "@mui/material";
import React from "react";
import One from "../../asset/one.png";
import Two from "../../asset/two.png";
import Three from "../../asset/three.png";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";

import { Container } from "@mui/system";

const box = [
  {
    img: One,
    health: "Podcasts",
    para: "Our podcasts offer an innovative and engaging way to learn about health and wellness, making it easy for you to stay informed and up-to-date on the latest trends in the industry.",
  },
  {
    img: Two,
    health: "A-Z Library",
    para: "Discover a world of health knowledge with Optimists' A-Z Library - Your ultimate encyclopaedia for healthcare education. Get access to a wealth of information and resources, covering everything from the basics to advanced health topics.",
  },
  {
    img: Three,
    health: "Health Hub",
    para: "Discover a world of healthy living with our Personalised Health Hub. From nutritious recipes to expert tips, we've got you covered on all health-related topics. Tailored to your unique needs.",
  },
];

function Resou() {
  return (
    <>
      <Container>
        <Grid container sx={{ paddingTop: "100px" }}>
          <Grid item xs={1} sm={3.5} md={4}></Grid>
          <Grid item xs={10} sm={5} md={4} sx={{ position: "relative" }}>
            <img src={Rect} style={{ position: "absolute" }} />

            <Typography
              className="explore"
              sx={{
                fontWeight: "bold",
                fontSize: "39px",
                fontFamily: "'Poppins', sans-serif",
                marginLeft: "10px",
              }}
            >
              Explore Our Resources
              <img
                className="exLight"
                src={Light}
                style={{ position: "absolute", top: "-15px" }}
              />
            </Typography>
            <img
              style={{ display: "block", marginLeft: "auto", width: "40%" }}
              src={Vec}
            />
          </Grid>
          <Grid item xs={1} sm={3.5} md={4}></Grid>
        </Grid>
      </Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "100px",
        }}
      >
        {box.map((user) => (
          <Grid
            item
            xs={10}
            sm={3.5}
            md={3}
            sx={{
              background: "#FFF4E3",
              padding: "20px",
              marginTop: "60px",
              borderRadius: "20px",
              "&:hover": {
                cursor: "pointer",
                background: "#2EB1BE",
              },
            }}
          >
            <img style={{ width: "100%" }} src={user.img} />
            <Typography
              sx={{
                fontWeight: "600",
                fontFamily: "'Poppins', sans-serif",
                padding: "25px 0",
                color: "#282828",
                fontSize: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {user.health}
            </Typography>
            <Typography
              className="indPara"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                padding: "5px 0",
                color: "#787C7E",
                fontSize: "14px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {user.para}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Resou;
