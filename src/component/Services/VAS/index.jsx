import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import communication from "../../../assets/communication.jpg";
import WovenImageList from "../../../reusables";

function VAS() {
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
        direction="row-reverse"
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
            Value Added Services (VAS)
          </Typography>
          <Typography sx={{ mb: 2 }}>
            We are offering the following digital automated solutions: SMS
            (Promotional, Transaction, Premium), USSD and Short codes (Bulk sms
            solutions). The Bulk SMS solutions will integrate with the existing
            systems to eliminate human interaction and also provide a means of
            growing contact database through a two-way communication channel
          </Typography>
          <ul>
            <li>
              {" "}
              Reach a wider target audience including those without smart phones
            </li>
            <li>
              {" "}
              Use a pre-established database to promote products and services.
            </li>
            <li> Conduct surveys via SMS</li>
            <li>
              {" "}
              Send automated notifications to customers: e.g. transaction SMS,
              Appointment reminders and more.
            </li>
            <li> Have a unique sender ID that legitimately</li>
          </ul>
        </Grid>

        {/* RIGHT COLUMN - PRICING GRID */}
        <Grid item size={{ xs: 12, md: 6 }}>
          {/* <img
            src={communication}
            alt="Communication Services"
            style={{ borderRadius: "10px", px: { xs: 5, md: 0 }, width: "100%" }}
          /> */}
          <WovenImageList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default VAS;
