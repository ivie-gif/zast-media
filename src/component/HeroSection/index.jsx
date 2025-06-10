import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function HeroSection() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "space-around",
        backgroundColor: "#000000",
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
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
            mb: 2,
            textTransform: 'uppercase'
          }}
        >
          ZastMedia
        </Typography>

        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "left", md: "center" },
            color: "#E10000",
            fontWeight: 700,
            fontSize: { xs: "30px", md: "50px" },
            lineHeight: { xs: "36px", md: "60px" },
            mb: 2,
          }}
        >
          Empowering Connections, Enabling Communication
          <CheckCircleIcon sx={{ color: "#fff", fontSize: "15px" }} />
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
          Our solution is designed to enhance internet connectivity for homes,
          estates, and offices through modern, scalable fiber optic technology.
          We help improve customer experiences and reduce operational costs by
          delivering fast, reliable, and unlimited internet access to your
          residence or workplace.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;
