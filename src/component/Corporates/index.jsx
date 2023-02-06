import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Light from "../../asset/light.png";
import Vec from "../../asset/vec.png";
import Women from "../../asset/women.png";
import Circle from "../../asset/Vector.svg";
import { Container } from "@mui/system";

function Corporates() {
  return (
    <>
      <div
        style={{
          background: "#F2FCFD",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "100px 0 50px 0",
            }}
          >
            <Grid item xs={12} sm={5} md={5}>
              <img style={{ width: "100%" }} src={Women} />
            </Grid>

            <Grid
              className="Corporates"
              item
              container
              xs={12}
              sm={6}
              md={5}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={Rect} style={{ position: "absolute" }} />

              <Typography
                className="restores"
                sx={{
                  fontWeight: "bold",
                  fontSize: "45px",
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                }}
              >
                For Corporates
                <img
                  className="exLight"
                  src={Light}
                  style={{ position: "absolute", top: "-15px" }}
                />
              </Typography>
              <img
                className="coLights"
                style={{
                  display: "block",
                  marginTop: "-2px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "40px",
                }}
                src={Vec}
              />

              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                Identify and address stress and non-communicable diseases
              </Typography>
              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                Tailored program for a more vibrant and durable workforce
              </Typography>
              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                AI analytics and personalised content to support employees
              </Typography>

              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                Affordable plans for companies of all sizes
              </Typography>
              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                Corporate dashboard for HR to easily manage employee health
              </Typography>
              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                Functional Medicine Approach. Treat the root cause
              </Typography>
              <Typography
                sx={{
                  color: "#787C7E",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={Circle}
                  width="2.5%"
                  style={{ marginRight: "10px" }}
                />
                Increase productivity and improve work environment
              </Typography>

              <Button
                className="learn"
                sx={{
                  background: "#2EB1BE",
                  textTransform: "capitalize",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "700",
                  width: "25%",
                  marginTop: "30px",
                }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Corporates;
