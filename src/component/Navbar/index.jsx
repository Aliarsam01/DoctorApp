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
import StarIcon from "@mui/icons-material/Star";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Cart from "../../asset/cart.png";
import { Button } from "@mui/material";

const theme = createTheme();

theme.typography.logo = {
  fontFamily: "'Source Sans 3', sans-serif",
  fontSize: "40px",
  textTransform: "uppercase",
  cursor: "pointer",
};

theme.typography.navbarBtn = {
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: "16px",
  alignSelf: "center",
  color: "black",
  cursor: "pointer",
};
theme.typography.roadmap = {
  fontFamily: "'Ubuntu', sans-serif",
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
      <Grid
        Container
        sx={{
          background: "white",

          display: "flex",
          justifyContent: "space-between",
          // padding: "20px 0",
          margin: "20px",
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
              fontFamily: "'Ubuntu', sans-serif",
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
              fontFamily: "'Ubuntu', sans-serif",
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
              fontFamily: "'Ubuntu', sans-serif",
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
              fontFamily: "'Ubuntu', sans-serif",
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
    </Box>
  );
  return (
    <React.Fragment>
      <AppBar
        className="topbar_nav"
        position="static"
        style={{ background: "transparent", opacity: "80%" }}
      >
        <Grid
          className="navbar"
          container
          sx={{
            background: "transparent",
            padding: "20px",
          }}
        >
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            lg={2}
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
              {["left"].map((anchor) => (
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

          <Grid item xs={8} md={4} sx={{ alignSelf: "center" }}>
            <Box
              className="navbar-hide"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ThemeProvider theme={theme}>
                <AnchorLink
                  style={{ textDecoration: "none" }}
                  href="#tokemonics"
                >
                  <Typography variant="navbarBtn">Tests</Typography>
                </AnchorLink>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <AnchorLink style={{ textDecoration: "none" }} href="#rarity">
                  <Typography variant="navbarBtn">
                    Corporate Wellness
                  </Typography>
                </AnchorLink>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="navbarBtn">Programs</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <AnchorLink style={{ textDecoration: "none" }} href="#faq">
                  <Typography variant="navbarBtn">More</Typography>
                </AnchorLink>
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item md={2} lg={3}></Grid>
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
              }}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
