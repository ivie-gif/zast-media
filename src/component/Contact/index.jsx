import * as React from "react";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        my: { xs: 5, md: 10 },
        mx: { xs: 2, md: 10 },
        py: { xs: 1, md: 10 },
        backgroundColor: "#E10000",
        borderRadius: "15px",
      }}
    >
      <Grid container sx={{ px: { xs: 2, md: 0 } }}>
        <Grid item size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "30px", md: "70px" },
              fontWeight: "bold",
              pt: { xs: 3, md: 0 },
              textAlign: { xs: "center", md: "left" },
              pl: { xs: 0, md: 10 },
              color: "#fff",
            }}
          >
            Ready to Work with us?
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <Button
            sx={{
              my: 3,
              backgroundColor: "#1E1278",
              color: "#fff",
              px: 3,
              borderRadius: "25px",
              py: { xs: 1, md: 1 },
              "&:hover": {
                color: "#1E1278",
                backgroundColor: "#fff",
                fontSize: { xs: "16px", md: "20px" },
              },
            }}
          >
            <Typography>Contact Us</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
