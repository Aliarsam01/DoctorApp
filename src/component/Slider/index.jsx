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
        <Container>
          <Grid container>
            <Grid item xs={1} sm={3}></Grid>
            <Grid item xs={10} sm={6} sx={{ position: "relative" }}>
              <img src={Rect} style={{ position: "absolute" }} />

              <Typography
                className="Customers"
                sx={{
                  fontWeight: "bold",
                  fontSize: "36px",
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              >
                What Customers Are Saying
                <img
                  className="exLight"
                  src={Light}
                  style={{ position: "absolute", top: "-15px", right: "0px" }}
                />
              </Typography>
              <img
                className="cusVec"
                style={{ display: "block", marginLeft: "auto" }}
                src={Vec}
              />
            </Grid>
            <Grid item xs={1} md={3}></Grid>
          </Grid>
        </Container>
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
                  height: "550px",
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
                  Employer
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  I recently participated in a corporate wellness initiative
                  provided by my workplace, and I found it to be a beneficial
                  and enriching experience. The program was customized to my
                  specific requirements. Being a diabetic person, I found their
                  diet plans and recipes greatly beneficial. Additionally, I've
                  subscribed to their yoga sessions, which have absolutely
                  transformed my life.
                </Typography>
              </Grid>
            </div>
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
                  height: "550px",
                }}
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
                  Employer
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  My company just launched a wellness initiative to help
                  employees stay healthy and productive. I was reluctant
                  initially, but I soon realized the perks. This wellness
                  initiative has helped to create a safe, supportive, and
                  positive workplace culture. Even the commonly overlooked
                  concerns with sitting posture were addressed.
                </Typography>
              </Grid>
            </div>

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
                  height: "550px",
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
                  Employee
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  We just launched a corporate wellness program, and the
                  feedback from our employees has been extremely positive. Not
                  only did it improve our physical health, but it also benefited
                  our mental well-being. People felt more connected to one
                  another and had the chance to interact in a calm and engaging
                  setting. This program was a great investment for our company,
                  and I would strongly recommend it to any employer seeking to
                  improve their workplace culture.
                </Typography>
              </Grid>
            </div>

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
                  height: "550px",
                }}
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
                  Employee
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#787C7E",
                  }}
                >
                  The program offers a variety of activities and sessions,
                  including nutritional counseling, stress management, physical
                  fitness, and mental health support. The stress management
                  classes have been very beneficial in helping employees in
                  managing their workload and be productive. Most of our
                  employees have liked participating in fitness programs.
                  Overall, our employees were delighted with the initiative, and
                  we look forward to continuing our commitment to workplace
                  wellness for the welfare of all our team members.
                </Typography>
              </Grid>
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
}
