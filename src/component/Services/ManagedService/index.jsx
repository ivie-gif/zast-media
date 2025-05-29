import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import LocalNetwork from "../../../assets/local-network.jpg";

function ManagedService() {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        py: { xs: 3, md: 8 },
        // backgroundImage: `url(${BgPricing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        mx: { xs: 1, md: 5 },
        mt: { xs: 5, md: 8 },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          px: { xs: 3, md: 10 },
          py: { xs: 3, md: 5 },
        }}
      >
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 3, color: "#0D3E9B", textAlign: "left" }}
          >
            Managed IT Services:
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Whether you're setting up a new office or upgrading your existing
            network, we provide seamless, stress-free local network setup
            tailored to your business needs. Backed by years of experience, our
            certified technicians deliver enterprise-grade networking solutions
            at a reasonable cost. We also offer custom Wi-Fi solutions—starting
            with a detailed assessment of your workspace, we ensure strong,
            reliable connectivity by fine-tuning every connection.
          </Typography>
          <ul>
            <li>Local Network Setup</li>
            <li>Wi-Fi Solutions</li>
            <li>IT Consultancy</li>
          </ul>
        </Grid>

        {/* RIGHT COLUMN - PRICING GRID */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <img
            src={LocalNetwork}
            alt="Local Network"
            style={{
              borderRadius: "10px",
              px: { xs: 5, md: 0 },
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ManagedService;
