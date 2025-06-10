import * as React from "react";
import { Typography, Box,  } from "@mui/material";
import FooterNewImage from "../../assets/footer-new.png";

function Footer() {
  return (
    <Box sx={{ background: `url(${FooterNewImage})`, backgroundSize: "cover", borderTop: "2px solid #501060" }}>
      <Typography sx={{color: "#fff", py: 4, textAlign: "center",}}>Copyright © 2025 ZastMedia. All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
