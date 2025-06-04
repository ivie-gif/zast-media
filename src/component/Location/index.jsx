import * as React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
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
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "100%", md: "100vh" },
          backgroundColor: "rgba(5, 5, 5, 0.85)",
          zIndex: 1,
          py: { md: 0 },
        }}
      />
          <Box sx={{ position: "relative", zIndex: 2, px: { xs: 0, md: 50 } }}>
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
    </Box>
  );
}

export default Location;
