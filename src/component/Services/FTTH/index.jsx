import * as React from "react";
import { Box, Divider, Typography, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import BgPricing from "../../assets/services-bg-left.jpg";

function FTTH() {
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

  return (
    <Box
    sx={{
      backgroundColor: "#E10000",
      py: 8,
      // backgroundImage: `url(${BgPricing})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "10px",
      mx: { xs: 1, md: 5 },
    }}
  >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 4,
        px: { xs: 3, md: 10 },
      }}
    >
      {/* LEFT COLUMN */}
          <Box >
              <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 3, color: "#0D3E9B", textAlign: "left" }}
              >
                Residential Fiber Internet - Fiber to the Home (FTTH)
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Enjoy High-Speed Fibre Internet at Home—Seamless Connectivity for
                Work, Play & Everything in Between
              </Typography>
              <ul style={{ color: "#444", lineHeight: "1.8", paddingLeft: "1rem" }}>
                <li>Truly Unlimited Internet – No data caps or restrictions</li>
                <li>Blazing-Fast Internet Speeds – Seamless streaming & gaming</li>
                <li>Perfect for Work & Play – Great for remote work and HD/4K streaming</li>
                <li>24/7 Customer Support – Always-on assistance</li>
                <li>Uninterrupted Connectivity – Stable and reliable network</li>
                <li>Largest Fibre Optic Coverage in Lagos – Over 4,000 active homes</li>
                <li>Tailored for Homes – Optimized for smart devices and multi-user environments</li>
                <li>Guaranteed Low Latency & High Bandwidth</li>
              </ul>
              </Box>
      
              <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 3, color: "#0D3E9B", textAlign: "left", mt: { xs: 3, md: 20 } }}
              >
                Dedicated Fiber Internet 
              </Typography>
              <Typography sx={{ mb: 2 }}>
              Get unhindered access to the internet with our unlimited fiber solution to your office. 
              </Typography>
              <ul style={{ color: "#444", lineHeight: "1.8", paddingLeft: "1rem" }}>
                <li>Free Calls for Closed User groups</li>
                <li>Flexible Payment Plan</li>
                <li>Upgradable Bandwidth</li>
                <li>100% Fiber Optics to your office</li>
                <li>24/7 Network Reliability</li>
                <li>24 hours monitoring/Support</li>
              </ul>
              </Box>
            </Box>
  
      {/* RIGHT COLUMN - PRICING GRID */}
      <Grid container spacing={3}>
        {Pricing.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Card
              sx={{
                transition: "all 0.3s ease-in-out",
                width: { xs: '100%',},
                px: { xs: 2, md: 0 },
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent sx={{ backgroundColor: "#F9FAFA" }}>
                <Box
                  sx={{
                    margin: "-16px -16px 0px -16px",
                    backgroundColor: "#0D3E9B",
                    mb: 2,
                    px: 2,
                    pt: 2,
                    pb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#fff" }}>{item.subtitle}</Typography>
                </Box>
  
                {[item.mbps, item.price, item.lines, item.days, item.ip, item.calls, item.care].map((text, idx) => (
                  <React.Fragment key={idx}>
                    <Typography
                      sx={{ py: 1.2, color: "#5552B7", fontSize: "14px" }}
                    >
                      {text}
                    </Typography>
                    {idx !== 6 && <Divider />}
                  </React.Fragment>
                ))}
  
                <Box textAlign="center" mt={3}>
                  <Button
                    sx={{
                      backgroundColor: "#0D3E9B",
                      color: "#fff",
                      borderRadius: "25px",
                      px: 4,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "#E10000",
                      },
                    }}
                  >
                    Subscribe Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  
  );
}

export default FTTH;
