import * as React from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Money from "../../assets/money.jpg";
import ReusableModal from "../../reusables/modal";
import CenteredPageLayout from "../Layout";

const Pricing = [
  {
    title: "Regular",
    subtitle: "Residential",
    mbps: "Unlimited – Upto 10Mbps",
    price: "NGN15,625 Monthly",
    lines: "Telephone Line",
    days: "30 Days Validity",
    ip: "Dynamic IP Address",
    calls: "FREE On-net Calls",
    care: "Spontaneous Customer care services",
  },
  {
    title: "Silver",
    subtitle: "Residential",
    mbps: "Unlimited – Upto 30Mbps",
    price: "NGN27,600 Monthly",
    lines: "Telephone Line",
    days: "30 Days Validity",
    ip: "Dynamic IP Address",
    calls: "FREE On-net Calls",
    care: "Spontaneous Customer care services",
  },
  {
    title: "Platinum",
    subtitle: "Residential",
    mbps: "Unlimited – Upto 50Mbps",
    price: "NGN40,680 Monthly",
    lines: "Telephone Line",
    days: "30 Days Validity",
    ip: "Dynamic IP Address",
    calls: "FREE On-net Calls",
    care: "Spontaneous Customer care services",
  },
  {
    title: "Royal",
    subtitle: "Residential",
    mbps: "Unlimited – Upto 100Mbps",
    price: "NGN71,400 Monthly",
    lines: "Telephone Line",
    days: "30 Days Validity",
    ip: "Dynamic IP Address",
    calls: "FREE On-net Calls",
    care: "Spontaneous Customer care services",
  },
];

function NewPricingSection() {
  const [open, setOpen] = React.useState(false);

  const handleModal = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 10,
        px: { xs: 2, md: 8 },
      }}
    >
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          backgroundColor: "#fff",
          width: { xs: "10%", md: "4%" },
          height: "3px",
          mx: { xs: 4, md: 10 },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "left",
          mt: { xs: 2, md: 1 },
          mx: { xs: 3, md: 10 },
          fontSize: { xs: "25px", md: "42px" },
          fontWeight: 900,
          lineHeight: { md: "57px" },
          color: "#fff",
          mb: 5,
        }}
      >
        Pricing
      </Typography>
      <Grid container spacing={4}>
        {/* Left Panel */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              backgroundImage: `url(${Money})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#777",
              color: { xs: "#fff", md: "#fff" },
              borderRadius: "16px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: { xs: "100%", md: "85%" },
            }}
          >
            <Box sx={{ p: 4 }}>
              <Typography
                variant="h6"
                fontWeight={{ xs: 700, md: 600 }}
                mb={2}
                sx={{ color: { xs: "#000000", md: "#fff" } }}
              >
                Simple pricing,
                <br />
                <Box component="span" fontWeight={700}>
                  No hidden charges
                </Box>
              </Typography>
              <Typography
                fontSize={{ xs: 18, md: 16 }}
                mb={2}
                sx={{
                  fontWeight: { xs: 600, md: 600 },
                  color: { xs: "#000000", md: "#fff" },
                }}
              >
                With no setup or maintenance fees and one of the lowest
                transaction charges in the industry, pay only when you get paid!
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: 30,  }} />
            </Box>
          </Box>
        </Grid>

        {/* Pricing Plans */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Grid container spacing={4}>
            {Pricing.map((item) => (
              <Grid
                item
                size={{ xs: 12, md: 4 }}
                key={item.title}
                sx={{ mb: 8 }}
              >
                <Box
                  sx={{
                    backgroundColor: "#111",
                    borderRadius: "16px",
                    p: 3,
                    color: "#fff",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title} Plan
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
                    {item.subtitle}
                  </Typography>
                  <Divider sx={{ borderColor: "#333", mb: 2 }} />
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.mbps}
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.lines}
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.days}
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.ip}
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.calls}
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 1 }}>
                    {item.care}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleModal}
                    sx={{
                      mt: 3,
                      backgroundColor: "#E10000",
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#B00000",
                      },
                    }}
                  >
                    Subscribe Now
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <ReusableModal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal Title"
        description="Optional description text here"
        width={500}
      />
    </Box>
  );
}

export default NewPricingSection;
