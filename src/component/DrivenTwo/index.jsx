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
import { Container } from "@mui/system";

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

export default function DrivenTwo() {
  return (
    <>
      <div
        className="driMain2"
        style={{ background: "#F2FCFD", padding: "100px 0" }}
      >
        <Container>
          <Grid container>
            <Grid item xs={1} md={2}></Grid>
            <Grid item xs={10} md={8} sx={{ position: "relative" }}>
              <img src={Rect} style={{ position: "absolute" }} />

              <Typography
                className="driven"
                sx={{
                  fontWeight: "bold",

                  fontSize: "40px",
                  fontFamily: "'Apercu', sans-serif",

                  marginLeft: "10px",
                }}
              >
                Make Data-Driven Lifestyle Changes
                <img
                  className="exLight"
                  src={Light}
                  style={{ position: "absolute", top: "-15px" }}
                />
              </Typography>
              <img
                className="driverLight"
                style={{ display: "block", marginLeft: "auto" }}
                src={Vec}
              />
            </Grid>
            <Grid item xs={1} md={2}></Grid>

            <Grid item xs={2}></Grid>

            <Grid
              item
              xs={8}
              sx={{
                paddingTop: "15px",
              }}
            >
              <Typography
                className="algorithm"
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
            <Grid item xs={2}></Grid>
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
                <img
                  style={{ display: "block", margin: "auto" }}
                  src={x.icon}
                />
                <Typography
                  sx={{
                    padding: "15px 0",
                    fontWeight: "bold",
                    fontFamily: "'Apercu', sans-serif",

                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  {x.text}
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Apercu', sans-serif",

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
        </Container>
      </div>
    </>
  );
}
