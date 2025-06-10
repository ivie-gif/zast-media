import * as React from "react";
import { Box, Typography, Divider, Grid, Button, TextField } from "@mui/material";
import ReusableModal from "../../reusables/modal";

function Contact() {
    const [open, setOpen] = React.useState(false);
  
    const handleModal = () => {
      setOpen(true);
    };

  return (
    <Box
      sx={{
        my: { xs: 5, md: 10 },
        mx: { xs: 2, md: 10 },
        py: { xs: 1, md: 10 },
        backgroundColor: "#B80000",
        borderRadius: "15px",
        height: { xs: "100%", md: "0" },
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
          onClick={handleModal}
            sx={{
              my: 3,
              backgroundColor: "rgba(5, 5, 5, 0.85)",
              color: "#fff",
              px: 3,
              borderRadius: "25px",
              py: { xs: 1, md: 1 },
              "&:hover": {
                color: "rgba(5, 5, 5, 0.85)",
                backgroundColor: "#fff",
                fontSize: { xs: "16px", md: "20px" },
              },
            }}
          >
            <Typography>Contact Us</Typography>
          </Button>
        </Grid>
      </Grid>
      <ReusableModal
              open={open}
              onClose={() => setOpen(false)}
              title="Request Service to your Estate/Home or Company"
              width={500}
            >
              <form style={{ marginTop: "10px" }}>
                <TextField
                  label="Name or Company Name"
                  id="outlined-size-normal"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ display: "block", mb: 5 }}
                />
                <TextField
                  label="Home/Estate or Company Address:"
                  id="Home/Estate address:"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ display: "block", mb: 5 }}
                />
                <TextField
                  label="Phone Number:"
                  id="outlined-size-normal"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ display: "block", mb: 5 }}
                />
                <TextField
                  label="Email address:"
                  id="outlined-size-normal"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ display: "block", mb: 5 }}
                />
      
                <Button
                  variant="contained"
                  onClick={handleModal}
                  sx={{
                    mt: 3,
                    px: 5,
                    py:1,
                    backgroundColor: "#E10000",
                    mx: '35%',
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#B00000",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </ReusableModal>
    </Box>
  );
}

export default Contact;
