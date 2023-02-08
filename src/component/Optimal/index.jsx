import React from "react";
import { Grid, Typography } from "@mui/material";
import Rect from "../../asset/Rect.png";
import Light from "../../asset/light.png";
import Vec from "../../asset/vec.png";
import Apple from "../../asset/mobile.svg";
import And from "../../asset/apple.svg";
import Header from "../../asset/header.png";
import BasicRating from "../rating";
import { Container } from "@mui/system";
// import Fade from "react-reveal/Fade";

function Optimal() {
  return (
    <>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px 0",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            style={{ display: "none" }}
            className="headerss"
            sx={{ overflow: "hidden" }}
          >
            {/* <Fade right duration={1000}> */}
            <img className="header" style={{ width: "100%" }} src={Header} />
            {/* </Fade> */}
          </Grid>
          <Grid
            className="empower"
            item
            container
            xs={12}
            sm={8}
            md={6}
            sx={{ position: "relative", height: "360px" }}
          >
            <img src={Rect} style={{ position: "absolute" }} />

            <Typography
              className="restore"
              sx={{
                fontWeight: "bold",
                fontSize: "45px",
                fontFamily: "'Apercu', sans-serif",

                marginLeft: "10px",
              }}
            >
              Restore Optimal Life
              <img
                className="exLight"
                src={Light}
                style={{ position: "absolute", top: "-15px" }}
              />
            </Typography>
            <img
              className="lightss"
              style={{
                display: "block",
                margin: "-35px auto auto auto",
                zIndex: "-1",
              }}
              src={Vec}
            />

            <Grid item xs={12} md={11}>
              <Typography
                className="Optimists"
                sx={{
                  fontFamily: "'Apercu', sans-serif",

                  color: "#787C7E",
                }}
              >
                Our mission at Optimists is to empower people to take charge of
                their own health and wellbeing. Whether you are just starting
                your journey and don't know where to begin, or you have a
                specific health concern in mind, we are here to help you on your
                path to optimal health.
              </Typography>
            </Grid>
            <Grid
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
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{ overflow: "hidden" }}
            className="headerssTwo"
          >
            {/* <Fade duration={1000} right> */}
            <img className="header" style={{ width: "100%" }} src={Header} />
            {/* </Fade> */}
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "100px",
          }}
        >
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            sx={{ alignSelf: "center" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Typography
                className="healthcare"
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "'Apercu', sans-serif",
                  fontWeight: "700",
                  color: "#282828",
                }}
              >
                Healthcare the way you want it. Simple, convenient, and
                reliable.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            className="header"
            item
            xs={12}
            sm={6}
            md={6}
            sx={{ background: "#FAFAFA", padding: "20px" }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                lineHeight: "0.5",
              }}
            >
              <Typography
                className="ratess"
                style={{ fontWeight: "500", fontSize: "40px" }}
              >
                4.9
              </Typography>

              <Typography
                className="ratess"
                style={{ fontWeight: "500", fontSize: "40px" }}
              >
                5k+
              </Typography>
              <Typography
                className="ratess"
                style={{ fontWeight: "500", fontSize: "40px" }}
              >
                20k+
              </Typography>
            </Grid>
            <BasicRating />

            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  fontFamily: "'Apercu', sans-serif",

                  color: "#787C7E",
                  marginTop: "5px",
                }}
              >
                Total Users
              </Typography>
              <Typography
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  fontFamily: "'Apercu', sans-serif",

                  color: "#787C7E",
                  marginTop: "5px",
                }}
              >
                Employees
              </Typography>
              <Typography
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  fontFamily: "'Apercu', sans-serif",

                  color: "#787C7E",
                  marginTop: "5px",
                }}
              >
                Happy Users
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Optimal;
