import * as React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalNetwork from "../../../assets/local-network.jpg";

function ManagedService() {
  const items = [
    {
      title: "Managed IT Services",
      features:
        "We are offering the following digital automated solutions: SMS, USSD and Short codes (Bulk SMS solutions). The Bulk SMS solutions will integrate with the existing systems to eliminate human interaction and also provide a means of growing contact database through a two-way communication channel designed to improve efficiency and ensure timely delivery of information.",
    },
  ];

  return (
    <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
      {items.map((item, idx) => (
        <Paper
          key={idx}
          elevation={3}
          sx={{
            borderRadius: "16px",
            p: 4,
            pb: { xs: 3.5, sm: 4.5, md: 6.5, lg: 6.5 },
            backgroundColor: "#fff",
            maxWidth: 500,
            width: "50%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "#FFF0F0",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                mr: 2,
                p: 1,
              }}
            >
              <DoneOutlineIcon sx={{ color: "#E10000" }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#000000",
                mb: 0,
                textAlign: "left",
              }}
            >
              {item.title}
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#555", fontSize: "15px", textAlign: "left" }}
          >
            {item.features}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default ManagedService;
