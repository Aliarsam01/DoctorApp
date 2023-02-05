import { Grid, Typography } from "@mui/material";
import React from "react";
import Rect from "../../asset/Rect.png";
import Vec from "../../asset/vec.png";
import Light from "../../asset/light.png";
import Person from "../../asset/person.png";
import Person2 from "../../asset/person2.png";
import Person3 from "../../asset/person3.png";
import Slider from "react-slick";
import { Container } from "@mui/system";

export default function Sliders() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ background: "#F2FCFD", padding: "100px 0" }}>
        <Grid container>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6} sx={{ position: "relative" }}>
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
              What Customers Are Saying
              <img
                src={Light}
                style={{ position: "absolute", top: "-15px", right: "0px" }}
              />
            </Typography>
            <img style={{ display: "block", marginLeft: "auto" }} src={Vec} />
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>

        <Container>
          <Slider {...settings}>
            <div>
              <Grid
                className="main"
                item
                xs={10}
                md={3.5}
                sx={{
                  background: "white",
                  padding: "25px",
                  marginTop: "30px",
                }}
              >
                <img src={Person} />
                <Typography
                  sx={{
                    padding: "15px 0",
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Savannah Nguyen
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  Partner- Nogel Tube
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </div>
            <div>
              <Grid
                className="main"
                item
                xs={10}
                md={3.5}
                sx={{ background: "white", padding: "25px", marginTop: "30px" }}
              >
                <img src={Person2} />
                <Typography
                  sx={{
                    padding: "15px 0",
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Darlene Robertson
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  Director M.C.U
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </div>

            <div>
              <Grid
                className="main"
                item
                xs={10}
                md={3.5}
                sx={{ background: "white", padding: "25px", marginTop: "30px" }}
              >
                <img src={Person3} />
                <Typography
                  sx={{
                    padding: "15px 0",
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Jacob Jones
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  CEO JB Construction
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </div>

            <div>
              <Grid
                className="main"
                item
                xs={10}
                md={3.5}
                sx={{ background: "white", padding: "25px", marginTop: "30px" }}
              >
                <img src={Person3} />
                <Typography
                  sx={{
                    padding: "15px 0",
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Jacob Jones
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  CEO JB Construction
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
}
