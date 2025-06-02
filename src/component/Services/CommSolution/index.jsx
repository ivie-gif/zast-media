import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function CommunicationServices() {
  const items = [
    {
      title: "Communication & Voice Services (Digital Land Lines)",
      features:
        "Our voice communication solution is tailored to meet your operational and customer service needs. Our solution aims to enhance communication capabilities, improve customer interactions, and reduce operational costs through modern, scalable voice technologies."
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
            backgroundColor: "#fff",
            maxWidth: 500,
            width: "50%",
          }}
        >
          <Box sx={{ display: "flex",  mb: 2 }}>
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
              sx={{ fontWeight: 700, color: "#000000", mb: 0, }}
            >
              {item.title}
            </Typography>
          </Box>
          <Typography sx={{ color: "#555", fontSize: "15px", textAlign: "left" }}>
            {item.features}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default CommunicationServices;
