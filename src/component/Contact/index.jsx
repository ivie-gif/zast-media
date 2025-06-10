import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import ReusableModal from "../../reusables/modal";
// import ThankYou from "../../ThankYou"

function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleModal = () => {
    setOpen(true);
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formsubmit.co/ajax/info@zastmedia.net",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setOpen(false);
        setFormData({ name: "", address: "", phone: "", email: "" });
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
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
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
            <TextField
              name="name"
              label="Name or Company Name"
              id="name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              sx={{ display: "block", mb: 5 }}
            />
            <TextField
              name="address" // <-- REQUIRED
              label="Home/Estate or Company Address:"
              id="address"
              variant="outlined"
              fullWidth
              required
              value={formData.address}
              onChange={handleChange}
              sx={{ display: "block", mb: 5 }}
            />
            <TextField
              name="phone" // <-- REQUIRED
              label="Phone Number:"
              id="phone"
              variant="outlined"
              fullWidth
              required
              value={formData.phone}
              onChange={handleChange}
              sx={{ display: "block", mb: 5 }}
            />
            <TextField
              name="email" // <-- REQUIRED
              label="Email address:"
              id="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              sx={{ display: "block", mb: 5 }}
            />

            <Button
              type="submit"
              variant="contained"
              onClick={handleModal}
              sx={{
                mt: 3,
                px: 5,
                py: 1,
                backgroundColor: "#E10000",
                mx: "35%",
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
        ) : (
          <div style={{ textAlign: "center", padding: "40px 10px" }}>
            <Typography variant="h5" sx={{ color: "#E10000", fontWeight: 600 }}>
              Thank you!
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Your request has been received. We'll get back to you shortly.
            </Typography>
          </div>
        )}
      </ReusableModal>
    </Box>
  );
}

export default Contact;
