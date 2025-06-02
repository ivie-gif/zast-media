import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function FiberInternet() {
  const items = [
    {
      title: "Dedicated Fiber Internet – Offices",
      features:
        "Get unhindered internet access with our unlimited fiber solution for your office. Enjoy free calls within user groups, flexible payment plans, upgradable bandwidth, 100% fiber optics connectivity to your office, and 24/7 network monitoring and support for guaranteed reliability.",
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

export default FiberInternet;
