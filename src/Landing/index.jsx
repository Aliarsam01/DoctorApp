import React from "react";
import Corporates from "../component/Corporates";
import Driven from "../component/Driven";
import Faq from "../component/Faq";
import Individuals from "../component/Individuals";
import Navbar from "../component/Navbar";
import Optimal from "../component/Optimal";
import Powered from "../component/Powered";
import Resou from "../component/Resou";
import Sliders from "../component/Slider";
import Footer from "../component/Footer";
import Place from "../component/Place";
import { Container } from "@mui/system";
import DrivenTwo from "../component/DrivenTwo";

function Landing() {
  return (
    <>
      <Navbar />
      <Optimal />
      <Corporates />
      <Individuals />
      <Driven />
      <Powered />
      <DrivenTwo />

      <Place />
      <Resou />
      <Sliders />
      <Faq />
      <Footer />
    </>
  );
}

export default Landing;
