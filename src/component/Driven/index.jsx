import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import Group from "../../asset/Group4.png";
import Group2 from "../../asset/Groups.png";
import Group3 from "../../asset/Group.png";
import Group4 from "../../asset/Group1.png";
import Group5 from "../../asset/Group2.png";
import Group6 from "../../asset/Group3.png";

const cart = [
  {
    icon: Group,
    text: "Programs",
    para: "Curated by experts designed to help you achieve your goals",
  },
  {
    icon: Group2,
    text: "Daily Activities",
    para: "Track and optimize your daily routine for Optimal health and wellness",
  },
  {
    icon: Group3,
    text: "Blogs",
    para: "Expert-written health blogs, personalized for you.",
  },
  {
    icon: Group4,
    text: "Recipes",
    para: "delicious and nutritious recipes tailored to your health goals.",
  },
  {
    icon: Group5,
    text: "Podcasts",
    para: "Informative and engaging podcasts on a variety of health topics.",
  },
  {
    icon: Group6,
    text: "A-Z Library",
    para: "Informative and engaging podcasts on a variety of health topics.",
  },
];

export default function Driven() {
  return (
    <>
      <div style={{ background: "#F2FCFD", padding: "100px 0" }}>
        <Grid container>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={10} md={8} sx={{ position: "relative" }}>
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
              Make Data-Driven Lifestyle Changes
              <img src={Light} style={{ position: "absolute", top: "-15px" }} />
            </Typography>
            <img style={{ display: "block", marginLeft: "auto" }} src={Vec} />
          </Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={12} sx={{ paddingTop: "15px" }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "#787C7E",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Reach Your Potential with OLi's Personalised Features
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {cart.map((x) => (
            <Grid
              item
              xs={10}
              md={3.5}
              sx={{ background: "white", padding: "25px", marginTop: "30px" }}
            >
              <img style={{ display: "block", margin: "auto" }} src={x.icon} />
              <Typography
                sx={{
                  padding: "15px 0",
                  fontWeight: "bold",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                {x.text}
              </Typography>
              <Typography
                sx={{
                  padding: "10px 0",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  color: "#787C7E",
                  textAlign: "center",
                }}
              >
                {x.para}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
