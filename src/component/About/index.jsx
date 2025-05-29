import * as React from "react";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import HeroImage from "../../assets/about.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AboutBG from "../../assets/hero-bg-left.jpg";

function About() {
  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 1, md: 1 },
          mt: { xs: 1, md: 10 },
          backgroundImage: `url(${AboutBG})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundColor: 'red'
        }}
      >
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            textAlign: "left",
            backgroundColor: "#E10000",
            width: { xs: "10%", md: "4%" },
            height: { xs: "3px", md: "3px" },
            marginTop: { xs: 10, md: 10 },
            marginX: { xs: 3, md: 10 },
          }}
        />
        <Typography
          sx={{
            textAlign: "left",
            marginTop: { xs: 2, md: 1 },
            marginX: { xs: 3, md: 10 },
            fontSize: { xs: "25px", md: "42px" },
            fontWeight: 900,
            color: "#0D3E9B",
          }}
        >
          About Us
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ paddingX: { xs: 3, md: 10 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "15px", md: "15px" },
                  pt: { xs: 2, md: 2 },
                  lineHeight: { xs: "30px", md: "30px" },
                  fontWeight: 200,
                  color: "#616174",
                  textAlign: "left",
                  mb: 2,
                }}
              >
                Zastmedia was incorporated in Lagos, Nigeria on the 1st July,
                2011. Zastmedia is one of the leading telecommunications
                companies in Nigeria, with a vision to transform how businesses
                connect, operate and communicate with the world. We deliver
                ultra-fast reliable dedicated internet services through our 100%
                fiber optic network(FOS) for large, medium sized businesses and
                estate over a state- of- the -art - fibre network We make a
                strong bond with our clients to find the perfect solutions and
                help them in achieving their connectivity and communication
                goals.
              </Typography>
              <Button
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#0D3E9B",
                  position: "relative",
                  right: { xs: 85, md: 205 },
                  mt: { xs: 1, md: 3 },
                  py: { xs: 1, md: 1 },
                  "&:hover": {
                    backgroundColor: "#E10000",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: { xs: "30px", md: "30px" },
                    fontWeight: 700,
                    pl: 3,
                    textTransform: "none",
                  }}
                >
                  Learn More
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                    color: "#fff",
                    display: "inline-block",
                    marginLeft: "10px",
                  }}
                >
                  <ArrowRightAltIcon
                    fontSize="large"
                    sx={{ color: "#E10000", pt: 0.3 }}
                  />
                </Box>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: "flex", md: "flex" },
              marginTop: { xs: 10, md: "-100px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "85%" },
              }}
            >
              <img
                src={HeroImage}
                alt="Hero Image"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
