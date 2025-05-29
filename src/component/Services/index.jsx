import * as React from "react";
import FTTH from "./FTTH";
import CommunicationServices from "./CommSolution";
import VAS from "./VAS";
import ManagedService from "./ManagedService";
import { Box, Divider, Typography } from "@mui/material";

function Services() {
  return (
    <Box sx={{ textAlign: "center", my: 10, backgroundColor: "#fff", }}>
    <Divider
      orientation="horizontal"
      flexItem
      sx={{
        textAlign: "left",
        backgroundColor: "#E10000",
        width: { xs: "10%", md: "4%" },
        height: { xs: "3px", md: "3px" },
        marginTop: { xs: 10, md: 10 },
        marginX: "auto",
      }}
    />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "25px", md: "42px" },
          fontWeight: "bold",
          pt: { xs: 3, md: 0 },
          textAlign: { xs: "center", md: "center" },
          pl: { xs: 0, md: 10 },
          color: "#E10000",
        }}
      >
        Our Range Of Fiber Optics Services
      </Typography>
      <FTTH />
      <CommunicationServices />
      <VAS />
      <ManagedService />
    </Box>
  );
}

export default Services;