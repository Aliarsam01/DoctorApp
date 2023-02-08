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
            <Grid item xs={12} sm={2} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Get the app
              </Typography>
              <img
                className="footerIcon"
                style={{ paddingBottom: "15px", width: "70%" }}
                src={footerIcon}
              />
              <img
                className="footerIcon"
                style={{ width: "70%" }}
                src={footerIcon2}
              />
            </Grid>

            <Grid item xs={12} sm={2} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Test Catagories
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                General wellness
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Men’s Health
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Women’s Health
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Sexual Health
              </Typography>
              <Typography
                sx={{ fontSize: "15px", fontFamily: "'Apercu', sans-serif" }}
              >
                At home self blood test
              </Typography>
            </Grid>

            <Grid item xs={12} sm={2} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Services
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Doctor consultations
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Copoate wellness
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Doctors profiles
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Health hub
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                A - Z
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Health recipes
              </Typography>
              <Typography
                sx={{ fontSize: "15px", fontFamily: "'Apercu', sans-serif" }}
              >
                Podcast
              </Typography>
            </Grid>

            <Grid item xs={12} sm={2} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                How it works
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Get to know us
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Lab Partners
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Customer stories
              </Typography>
            </Grid>

            <Grid item xs={12} sm={2} md={2} className="footerI">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingBottom: "30px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Support
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Website terms
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Customer terms
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                Privacy policy
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  paddingBottom: "20px",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                FAQ’s
              </Typography>
              <Typography
                sx={{ fontSize: "15px", fontFamily: "'Apercu', sans-serif" }}
              >
                Help desk
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ padding: "50px 0 0 0", borderTop: "1px solid #B2BCCB" }}
          >
            <Grid
              className="copyrights"
              item
              xs={12}
              sx={{
                alignSelf: "center",
                margin: "15px 0",
                display: "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#787C7E",
                  fontSize: "13px",
                  textAlign: "center",
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                © 2022 Optimists is a product and trademark of kepler Techno
                private limited. all right reserved
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              <img className="ooterlog" src={footerLogo} />
            </Grid>
            <Grid
              className="copyright"
              item
              xs={10}
              sm={8}
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
                  fontFamily: "'Apercu', sans-serif",
                }}
              >
                © 2022 Optimists is a product and trademark of kepler Techno
                private limited. all right reserved
              </Typography>
            </Grid>

            <Grid
              // className="SOCIAL"
              item
              xs={6}
              sm={2}
              sx={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Footer;
