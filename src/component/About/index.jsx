import * as React from "react";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import HeroImage from "../../assets/about.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AboutBG from "../../assets/hero-bg-left.jpg";
import CenteredPageLayout from "../Layout";

function About() {
  return (
    <Box
      sx={{
        pt: { xs: 1, md: 1 },
        mt: { xs: 1, md: 10 },
        backgroundImage: `url(${AboutBG})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          backgroundColor: "#E10000",
          width: { xs: "10%", md: "4%" },
          height: "3px",
          mt: { xs: 10, md: 10 },
          mx: { xs: 3, md: 10 },
        }}
      />

      <Typography
        sx={{
          textAlign: "left",
          mt: { xs: 2, md: 1 },
          mx: { xs: 3, md: 10 },
          fontSize: { xs: "25px", md: "42px" },
          fontWeight: 900,
          color: "#E10000",
        }}
      >
        About Us
      </Typography>

      <Grid container spacing={2}>
        {/* LEFT SIDE TEXT */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box sx={{ px: { xs: 3, md: 10 } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                pt: 2,
                lineHeight: "30px",
                fontWeight: 300,
                color: "#444",
                textAlign: "left",
                mb: 2,
              }}
            >
              Zastmedia was incorporated in Lagos, Nigeria on the 1st July,
              2011. Zastmedia is one of the leading telecommunications companies
              in Nigeria, with a vision to transform how businesses connect,
              operate and communicate with the world. We deliver ultra-fast
              reliable dedicated internet services through our 100% fiber optic
              network (FOS) for large, medium-sized businesses and estates over
              a state-of-the-art fibre network. We make a strong bond with our
              clients to find the perfect solutions and help them in achieving
              their connectivity and communication goals.
            </Typography>

            <Button
              sx={{
                borderRadius: "25px",
                backgroundColor: "#E10000",
                mt: { xs: 2, md: 3 },
                py: 1,
                px: 3,
                "&:hover": {
                  backgroundColor: "#B80000",
                },
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                const el = document.getElementById("services");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "none",
                  pr: 2,
                }}
              >
                Learn More
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowRightAltIcon sx={{ color: "#E10000" }} />
              </Box>
            </Button>
          </Box>
        </Grid>

        {/* RIGHT SIDE IMAGE */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 6, md: "-100px" },
          }}
        >
          <Box sx={{ width: { xs: "90%", md: "85%" } }}>
            <img
              src={HeroImage}
              alt="About Zast Media"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
