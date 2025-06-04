import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  const faqs = [
    {
      question: "Do we have coverage on the mainland and Island?",
      answers:
        "The first step is to contact us for a free site survey, the survey could be physical or remote. After this is accomplished, we can provide you with all available options to guarantee that you obtain a quality service.",
    },
    {
      question: "Do you have coverage at this location?",
      answers:
        "The first step is to contact us for a free site survey, the survey could be physical or remote. After this is accomplished, we can provide you with all available options to guarantee that you obtain a quality service.",
    },
    {
      question: "Do you offer internet for Estate?",
      answers: "Yes, we offer internet for estates.",
    },
    {
      question:
        "Why should leave my current Internet provider and consider Zastmedia?",
      answers:
        "We deliver ultra-fast reliable dedicated internet services through our 100% state- of- the -art - fiber optic network(FOS) which guarantee Bandwidth and Symmetrical Speeds, High Reliability, Stability and premium experience, Low Latency and Better Response Times, Scalability and Flexibility.",
    },
    {
      question: "Is your Internet unlimited?",
      answers: "Yes, we sell bandwidth with unlimited internet.",
    },
    {
      question: "Do we offer Voice Solution?",
      answers: "Yes, both E1-PRI and SIP Trunk",
    },
    {
      question: "Do we offer SMS Solution?",
      answers: "Yes, we offer SMS Solution.",
    },
    {
      question: "Are you a licensed ISP?",
      answers: "Yes, we are a licensed ISP.",
    },
    {
      question: "Wondering if we offer other services aside from internet?",
      answers:
        "Yes, we offer other services such as Managed Services/IT consultancy, Local Network Setup, Wi-Fi Solutions.",
    },
    {
      question: "Is your internet shared or dedicated?",
      answers: "Dedicated internet connection.",
    },
    {
      question: "Is there available 24/7 Technical support?",
      answers: "Yes, we offer 24/7 technical support.",
    },
    {
      question: "How long does the installation process takes?",
      answers: "The installation process takes 7 working days.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#D9D9D9", pt: 10, pb: 20 }}>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          backgroundColor: "#E10000",
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
          color: "#E10000",
          mb: 5,
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={2} sx={{ px: { xs: 3, md: 10 } }}>
        {faqs.map((item, idx) => (
          <Grid key={idx} item size={{ xs: 12, md: 6 }}>
            <Accordion sx={{ backgroundColor: "#F5F5F5" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#E10000" }} />}
                aria-controls={`panel-${idx}-content`}
                id={`panel-${idx}-header`}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "16px", color: "#000000" }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#444444",
                    lineHeight: "26px",
                    textAlign: 'left'
                  }}
                >
                  {item.answers}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Faq;
