import { Box, Typography, Divider } from "@mui/material";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import HeroMini from "../HeroSectionMini";
import ChooseSection from "../ChooseSection";
import About from "../About";
import Services from "../Services";
import Faq from "../Faq";
import Footer from "../Footer";
import Contact from "../Contact";
import Location from "../Location";
import Pricing from "../Pricing";
// import {smoothScroll} from "../../utils/smoothScroll";

function Home() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <HeroMini />
      <Box id="about">
        <About />
      </Box>
      <ChooseSection />
      <Box id="services">
        <Services />
      </Box>
      <Box id="pricing">
        <Pricing />
      </Box>
      <Faq />
      <Location />
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
