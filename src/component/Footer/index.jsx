import * as React from "react";
import { Typography, Box,  } from "@mui/material";
import FooterNewImage from "../../assets/footer-new.png";

function Footer() {
  return (
    <Box sx={{ background: `url(${FooterNewImage})`, backgroundSize: "cover", borderTop: "2px solid #501060" }}>
      {/* <Grid container spacing={30} sx={{ px: { xs: 1, md: 10 }, pt: 10, pb: 5 }}>
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          sx={{ textAlign: "left", mb: { xs: 5, md: 0 } }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "24px", lineHeight: "30px", pb: 2 }}
          >
            Contact
          </Typography>
          <Typography>
            14th Floor Necom House, 15 Marina, Lagos, Nigeria
          </Typography>
          <Typography>sales@zase-media.ng</Typography>
          <Typography>08098276352</Typography>
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          sx={{ textAlign: "left", mb: { xs: 5, md: 0 } }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "24px", lineHeight: "30px", pb: 2 }}
          >
            Company
          </Typography>
          <Typography>About Us</Typography>
          <Typography>Our Services</Typography>
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          sx={{ textAlign: "left", mb: { xs: 5, md: 0 } }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "24px", lineHeight: "30px", pb: 2 }}
          >
            Links
          </Typography>
          <Typography>Contact Us</Typography>
          <Typography>Support</Typography>
        </Grid>
      </Grid> */}
      <Typography sx={{color: "#fff", py: 4, textAlign: "center",}}>Copyright © 2025 ZastMedia. All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
