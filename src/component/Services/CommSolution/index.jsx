import * as React from "react";
import { Box, Divider, Typography, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import communication from "../../../assets/communication.jpg";

function CommunicationServices() {


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
            Communication/Voice Services (Digital Land Lines)
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Our voice communication solution is tailored to meet your
            operational and customer service needs. Our solution aims to enhance
            communication capabilities, improve customer interactions, and
            reduce operational costs through modern, scalable voice
            technologies.
          </Typography>
          <ul>
            <li>
              Seamless internal and external communication with scalable VoIP
              technology
            </li>
            <li>
              Enhanced customer engagement through high-quality call clarity and
              reliability
            </li>
            <li>
              {" "}
              Cost-effective infrastructure that reduces telecom expenses{" "}
            </li>
            <li>
              Customizable call features tailored to business workflows and
              support needs
            </li>
          </ul>
        </Grid>

        {/* RIGHT COLUMN - PRICING GRID */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <img
            src={communication}
            alt="Communication Services"
            style={{ borderRadius: "10px", px: { xs: 5, md: 0 }, width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CommunicationServices;
