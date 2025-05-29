import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
// import HeroLeft from './assets/hero-bg-left.jpg'
import HeroLeft from "../../assets/hero-bg-left.jpg";
import HeroRight from "../../assets/hero-bg-right.jpg";
import HeroImage from "../../assets/hero-right-image-removebg.png";

function HeroSection() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "space-around",
        backgroundColor: "#1E1278",
      }}
    >
      <Box
        sx={{
          paddingX: { xs: 3, md: 50 },
          pt: { xs: 30, md: 35 },
          pb: { xs: 10, md: 20 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: { xs: "left", md: "center" },
            color: "#fff",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
            mb: 2,
          }}
        >
          Digital Media Agency
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "left", md: "center" },
            color: "#E20909",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "60px",
            mb: 2,
          }}
        >
          We Boost Your Technology
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: { xs: "left", md: "center" },
            color: "#E3E3E3",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: "30px",
            mb: 2,
          }}
        >
          Our solution aims to enhance communication capabilities, improve
          customer interactions, and reduce operational costs through modern,
          scalable voice technologies.. Get unhindered access to the internet
          with our unlimited fiber solution to your residents and offices.
        </Typography>
      </Box>
      {/* </Grid> */}
      {/* <Grid
          size={{ xs: 6, md: 6 }}
          sx={{
            display: { xs: "none", md: "block" },
            height: "90vh",
            pt: { md: 15 },
          }}
        >
          <img src={HeroImage} alt="Hero Image" />
        </Grid> */}
      {/* </Grid> */}
    </Box>
  );
}

export default HeroSection;
