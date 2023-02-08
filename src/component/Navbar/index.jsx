import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../asset/logo.png";
import Logos from "../../asset/logo.png";
import Down from "../../asset/Vector.png";
import Cart from "../../asset/cart.png";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

const theme = createTheme();

theme.typography.logo = {
  fontFamily: "'Apercu', sans-serif",
  fontSize: "40px",
  textTransform: "uppercase",
  cursor: "pointer",
};

theme.typography.navbarBtn = {
  fontFamily: "'Apercu', sans-serif",

  fontSize: "16px",
  alignSelf: "center",
  color: "black",
  cursor: "pointer",
  paddingBottom: "10px",
  "&:hover": {
    borderBottom: "2px solid #2EB1BE",
    fontWeight: "bold",
  },
};
theme.typography.roadmap = {
  fontFamily: "'Apercu', sans-serif",

  fontSize: "20px",
  alignSelf: "center",
  background:
    "linear-gradient(90deg, rgba(72,59,105,1) 63%, rgba(37,35,74,1) 96%)",
  boxShadow:
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(20px)",
  cursor: "pointer",
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="menu-width"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "white",

        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Container>
        <Grid
          Container
          sx={{
            background: "white",

            display: "flex",
            justifyContent: "space-between",
            // padding: "20px 0",
            margin: "20px 0",
          }}
        >
          <Grid item sm={6}>
            <img className="drawerLogo" src={Logos} />
          </Grid>
          <Grid item sm={6} sx={{ display: "flex", justifyContent: "end" }}>
            <CloseIcon onClose={toggleDrawer} sx={{ color: "black" }} />
          </Grid>
        </Grid>
        <Grid
          sx={{
            background: "white",
            paddingTop: "40px",
            marginLeft: "5px",
          }}
        >
          <img style={{ marginBottom: "20px" }} src={Cart} />
          <AnchorLink style={{ textDecoration: "none" }} href="#home">
            <Typography
              sx={{
                fontFamily: "'Apercu', sans-serif",

                padding: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Tests
            </Typography>
          </AnchorLink>
          <AnchorLink style={{ textDecoration: "none" }} href="#about">
            <Typography
              sx={{
                fontFamily: "'Apercu', sans-serif",

                padding: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Corporate Wellness
            </Typography>
          </AnchorLink>
          <AnchorLink style={{ textDecoration: "none" }} href="#services">
            <Typography
              sx={{
                fontFamily: "'Apercu', sans-serif",

                padding: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Programs
            </Typography>
          </AnchorLink>
          <AnchorLink style={{ textDecoration: "none" }} href="#services">
            <Typography
              sx={{
                fontFamily: "'Apercu', sans-serif",

                padding: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              More
            </Typography>
          </AnchorLink>
          <Button
            sx={{
              background: "#2EB1BE",
              textTransform: "capitalize",
              padding: "10px 20px",
              color: "white",
              fontWeight: "700",
              width: "90%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
          >
            Get The App
          </Button>
          <Button
            sx={{
              background: "white",
              textTransform: "capitalize",
              padding: "10px 20px",
              color: "#2EB1BE",
              border: "1px solid #2EB1BE",
              fontWeight: "700",
              width: "90%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
          >
            Log In
          </Button>
        </Grid>
      </Container>
    </Box>
  );
  return (
    <React.Fragment>
      <AppBar
        className="topbar_nav"
        position="static"
        style={{ background: "transparent", opacity: "80%", boxShadow: "none" }}
      >
        <Container>
          <Grid
            className="navbar"
            container
            sx={{
              background: "transparent",
              padding: "20px 0",
            }}
          >
            <Grid
              item
              xs={8}
              sm={6}
              md={1}
              lg={1}
              className="logo"
              sx={{ alignSelf: "center" }}
            >
              <img className="logo" src={Logo} />
            </Grid>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                  justifyContent: "flex-end",
                },
              }}
            >
              <div className="menuicon">
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <MenuIcon
                      sx={{
                        fontSize: "40px",
                        color: "black",
                        alignSelf: "center",
                      }}
                      onClick={toggleDrawer(anchor, true)}
                    />
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{}}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"></Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Grid item xs={8} md={5} lg={4} sx={{ alignSelf: "center" }}>
              <Box
                className="navbar-hide"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ThemeProvider theme={theme}>
                  <AnchorLink style={{ textDecoration: "none" }}>
                    <Typography
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.optimists.in/tests/";
                      }}
                      variant="navbarBtn"
                    >
                      Tests
                    </Typography>
                  </AnchorLink>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <AnchorLink style={{ textDecoration: "none" }} href="#rarity">
                    <Typography
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.optimists.in/corporate-wellness/";
                      }}
                      variant="navbarBtn"
                    >
                      Corporate Wellness
                    </Typography>
                  </AnchorLink>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <AnchorLink style={{ textDecoration: "none" }} href="#rarity">
                    <Typography variant="navbarBtn">Programs</Typography>
                  </AnchorLink>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <AnchorLink style={{ textDecoration: "none" }} href="#faq">
                    <Typography variant="navbarBtn">
                      More
                      <img style={{ marginLeft: "10px" }} src={Down} />
                    </Typography>
                  </AnchorLink>
                </ThemeProvider>
              </Box>
            </Grid>
            <Grid item md={2} lg={4}></Grid>
            <Grid
              item
              xs={8}
              md={4}
              lg={3}
              className="navbar-hide"
              sx={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img style={{ alignSelf: "center" }} src={Cart} />
              <Button
                sx={{
                  background: "#2EB1BE",
                  textTransform: "capitalize",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "700",
                  "&:hover": {
                    background: "#2EB1BE",
                  },
                }}
              >
                Get The App
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.optimists.in/enter/";
                }}
                sx={{
                  background: "white",
                  textTransform: "capitalize",
                  padding: "10px 20px",
                  color: "#2EB1BE",
                  border: "1px solid #2EB1BE",
                  fontWeight: "700",
                  "&:hover": {
                    background: "white",
                    border: "1px solid #2EB1BE",
                  },
                }}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
