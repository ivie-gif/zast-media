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

function Home() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <HeroMini />
      <About />
      <ChooseSection />
      <Services />
      <Faq />
      <Location />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Home;
