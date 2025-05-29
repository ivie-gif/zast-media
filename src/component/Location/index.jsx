import * as React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import LocationBG from "../../assets/lagos-location.jpg";

function Location() {
  const locations = [
    ["Victoria Island", "Ikoyi", "Lagos Island", "Oniru"],
    ["Ikeja", "Ogudu", "Ojota", "Oregun"],
    ["Alausa", "Lekki Phase1 & 2", "Sangotedo", "Ajah"],
    [
      "Ikosi Road",
      "CMD Road",
      "Magodo Phase 2",
      "Greenfield Estate (Ago)",
      "Park View Estate (Ago)",
    ],
  ];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${LocationBG})`,
        backgroundSize: { xs: "cover", md: "cover" },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { xs: "100%", md: "100vh" },
        display: { xs: "flex", md: "flex" },
        alignItems: { md: "center" },
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "100%", md: "100vh" },
          backgroundColor: "rgba(0, 32, 63, 0.85)",
          zIndex: 1,
          py: { md: 0 },
        }}
      />

      {/* Content and Map */}
      <Grid
        container
        spacing={10}
        sx={{ position: "relative", zIndex: 2, px: { xs: 0, md: 25 } }}
      >
        {/* LEFT SIDE */}
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 2,
                mt: { xs: 8, md: 5 },
                fontSize: { xs: "28px", md: "42px" },
              }}
            >
              Our Coverage Area in Lagos
            </Typography>
            <Typography
              sx={{
                color: "#e0e0e0",
                mb: 3,
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              Find reliable fibre optics near you in Lagos
            </Typography>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                textAlign: "center",
                backgroundColor: "grey",
                width: { xs: "100%", md: "100%" },
                height: { xs: "3px", md: "3px" },
                mt: { xs: 2, md: 10 },
                mb: { xs: 2, md: 4 },
              }}
            />
            <Grid container spacing={4} justifyContent="center">
              {locations.map((group, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                  <Box sx={{ px: { xs: -3, md: 2 } }}>
                    {group.map((location, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          color: "#e0e0e0",
                          fontSize: "15px",
                          pt: 1,
                          lineHeight: "30px",
                          fontWeight: 200,
                          textAlign: "left",
                          mb: 2,
                        }}
                      >
                        • {location}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: { xs: "100%", md: "130%" },
              height: { xs: "300px", md: "70vh" },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              mb: { xs: 5, md: 0 },
              mx: { xs: 3, md: 0 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.355831472056!2d3.3437996499999997!3d6.524379299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3940d28e4f%3A0x7d5d6a57e235e2b0!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1717000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lagos Map"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Location;
