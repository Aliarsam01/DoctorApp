import { Grid, Typography } from "@mui/material";
import React from "react";
import Img from "../../asset/img.png";
import Img2 from "../../asset/img2.png";
import Img3 from "../../asset/img3.png";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import Pad from "../../asset/ipad.png";
import Macbook from "../../asset/macBook.png";
import Mobiles from "../../asset/mobiles.png";
import { Container } from "@mui/system";

const box = [
  {
    img: Img,
    health: "Health Services",
    para: "Diagnostic tools, doctor consultations and AI-powered scores, personalised to you. Take control of your health, with expert guidance and support.",
  },
  {
    img: Img2,
    health: "Wellness Services",
    para: "Immersive wellness experience including guided meditation, daily activities, therapist consultation, rejuvenating full-moon rituals, and a supportive community",
  },
  {
    img: Img3,
    health: "Fitness Services",
    para: "Unlock your full potential with our extensive fitness programs that include expert consultation, nutrition plans, coach support, and more.",
  },
];

function Individuals() {
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
            For Individuals
            <img src={Light} style={{ position: "absolute", top: "-15px" }} />
          </Typography>
          <img style={{ display: "block", margin: "auto" }} src={Vec} />
        </Grid>
        <Grid item xs={2} md={4}></Grid>
      </Grid>

      <Grid container sx={{ display: "flex", justifyContent: "space-around" }}>
        <Grid item xs={12} sx={{ paddingTop: "15px" }}>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: "#787C7E",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Mix & match different services to create a unique program tailored
            for you
          </Typography>
        </Grid>

        {box.map((user) => (
          <Grid
            item
            xs={10}
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
              sx={{
                fontWeight: "600",
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

      <Grid container sx={{ paddingTop: "150px" }}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={10} sx={{ position: "relative" }}>
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
            Visualise your health with personalised health analytics and Al
            Powered scores.
            <img
              src={Light}
              style={{ position: "absolute", top: "-15px", right: "0px" }}
            />
          </Typography>
          <img style={{ display: "block", margin: "auto" }} src={Vec} />
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>

      <Container>
        <Grid
          container
          className="types"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "50px",
          }}
        >
          <Grid item xs={12} md={3}>
            <img style={{ width: "100%", height: "80%" }} src={Pad} />
          </Grid>
          <Grid item xs={12} md={5}>
            <img style={{ width: "100%", height: "80%" }} src={Macbook} />
          </Grid>
          <Grid item xs={12} md={3}>
            <img style={{ width: "100%", height: "80%" }} src={Mobiles} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Individuals;
