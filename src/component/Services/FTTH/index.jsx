import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function FTTH() {
  const items = [
    {
      title: "Residential Fiber Internet – FTTH",
      features:
        "Enjoy truly unlimited internet with no data caps, blazing-fast speeds for seamless streaming and gaming, and a connection that is perfect for remote work and HD/4K content. Benefit from 24/7 customer support, the largest fibre coverage in Lagos, a network designed for multi-device smart homes, and guaranteed low latency with high bandwidth.",
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
            height: "100%",
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
              sx={{ fontWeight: 700, color: "#000000", mb: 0, textAlign: "left" }}
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

export default FTTH;
