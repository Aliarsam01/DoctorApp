import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import footerIcon from "../../asset/apple.png";
import footerIcon2 from "../../asset/mobile.png";
import footerLogo from "../../asset/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <div
        style={{
          padding: "150px 0 50px 0",
          background: "#F2FCFD",
          marginTop: "-80px",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              paddingBottom: "50px",
            }}
          >
            <Grid item xs={6} sm={4} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                }}
              >
                Get the app
              </Typography>
              <img
                style={{ paddingBottom: "15px", width: "70%" }}
                src={footerIcon}
              />
              <img style={{ width: "70%" }} src={footerIcon2} />
            </Grid>

            <Grid item xs={6} sm={4} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                }}
              >
                Test Catagories
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                General wellness
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Men’s Health
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Women’s Health
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Sexual Health
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                At home self blood test
              </Typography>
            </Grid>

            <Grid item xs={6} sm={4} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                }}
              >
                Services
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Doctor consultations
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Copoate wellness
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Doctors profiles
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Health hub
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                A - Z
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Health recipes
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>Podcast</Typography>
            </Grid>

            <Grid item xs={6} sm={4} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                }}
              >
                About
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                How it works
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Get to know us
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Lab Partners
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Customer stories
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                }}
              >
                Support
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Website terms
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Customer terms
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                Privacy policy
              </Typography>
              <Typography sx={{ fontSize: "15px", paddingBottom: "20px" }}>
                FAQ’s
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>Help desk</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ padding: "50px 0 0 0", borderTop: "1px solid #B2BCCB" }}
          >
            <Grid item xs={10} md={2}>
              <img src={footerLogo} />
            </Grid>
            <Grid
              item
              xs={10}
              md={8}
              sx={{
                alignSelf: "center",
                margin: "15px 0",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#787C7E",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                © 2022 Optimists is a product and trademark of kepler Techno
                private limited. all right reserved
              </Typography>
            </Grid>

            <Grid item xs={10} md={2} sx={{ alignSelf: "center" }}>
              <TwitterIcon sx={{ color: "" }} />
              <FacebookIcon />
              <LinkedInIcon />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Footer;
