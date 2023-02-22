import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import Wo from "../asset/wo.svg";
import Me from "../asset/me.svg";
import Rect from "../asset/Rect.png";
import Single from "../asset/singleline.png";
import Light from "../asset/light.png";
import Arr from "../asset/arrr.svg";
import Yellow from "../asset/yellow.svg";
import Multi from "../asset/multi.svg";
import { Container } from "@mui/system";

export default function Wellness() {
  return (
    <>
      <Container>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "50px",
          }}
        >
          <Grid item xs={2}>
            <img className="wo" src={Wo} />
          </Grid>
          <Grid
            item
            xs={8}
            sm={6}
            sx={{ position: "relative", marginTop: "40px" }}
          >
            <img
              className="rectss"
              src={Rect}
              style={{ position: "absolute", marginTop: "-5px", left: "20px" }}
            />

            <Typography
              id="id"
              className="wellness"
              sx={{
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "'Apercu', sans-serif",
                textAlign: "center",

                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              Wellness designed to help
            </Typography>

            <Typography
              id="qw"
              className="wellness"
              sx={{
                display: "none",
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "'Apercu', sans-serif",
                textAlign: "center",

                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              Wellness designed to help your employees shine
            </Typography>

            <Typography
              id="id2"
              className="wellness"
              sx={{
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "'Apercu', sans-serif",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              your employees shine
              <img
                className="lightTwo"
                src={Light}
                style={{
                  position: "absolute",
                  top: "60px",
                  //   right: "0px",
                }}
              />
            </Typography>
            <img
              className="sinTwo"
              style={{ display: "block", marginLeft: "auto" }}
              src={Single}
            />

            <Typography
              className="tailor"
              sx={{
                fontSize: "14px",
                fontFamily: "'Apercu', sans-serif",
                textAlign: "center",
                marginTop: "10px",
                color: "#787C7E",
              }}
            >
              Tailored to Fit Your Workplace: Customisable Wellness Programs.
            </Typography>

            <Typography
              className="tailor"
              sx={{
                fontSize: "14px",
                fontFamily: "'Apercu', sans-serif",
                textAlign: "center",
                marginTop: "20px",
                color: "#787C7E",
              }}
            >
              Starting at ₹99
            </Typography>

            <Button
              className="demo"
              sx={{
                background: "#2EB1BE",

                fontSize: "14px",
                fontFamily: "'Apercu', sans-serif",
                textAlign: "center",
                marginTop: "0px",
                color: "white",
                padding: "10px",
                width: "23%",
                display: "block",
                margin: "20px auto 0 auto",
                textTransform: "capitalize",
              }}
            >
              Book a Demo
            </Button>
          </Grid>
          <Grid item xs={2}>
            <img
              className="me"
              style={{
                display: "block",
                marginLeft: "auto",
              }}
              src={Me}
            />
            <img className="arrr" src={Arr} />
          </Grid>
        </Grid>
        <Grid className="mainDiv" container sx={{ marginTop: "-50px" }}>
          <Grid item xs={3} sm={3}>
            <img
              style={{ display: "block", margin: "auto 0 0 auto" }}
              src={Yellow}
              className="yellow"
            />
          </Grid>
          <Grid item xs={6} sm={6}></Grid>
          <Grid item xs={3} sm={3}>
            <Typography
              className="tenk"
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "'Apercu', sans-serif",
                marginTop: "10px",
              }}
            >
              10k+
            </Typography>
            <Typography
              className="trustedd"
              sx={{
                fontSize: "14px",
                fontFamily: "'Apercu', sans-serif",
                margin: "10px 0 20px 0",
                color: "#787C7E",
              }}
            >
              we are trusted by many Satisfied & Happy Customers, be one of them
              right now
            </Typography>
            <img className="multi" src={Multi} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
