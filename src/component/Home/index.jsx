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

function Home() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <HeroMini />
      <About />
      <ChooseSection />
      <Services />
      <Pricing />
      <Faq />
      <Location />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Home;
