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
import CenteredPageLayout from "../Layout";

function Faq() {
  const faqs = [
    {
      question: "What services does Zast Media provide?",
      answers: "We offer fiber internet, VoIP telephony, Wi-Fi setup, and more tailored IT solutions.",
    },
    {
      question: "Do you provide services to residential areas?",
      answers: "Yes, we serve both residential and business clients with dedicated internet and support.",
    },
    {
      question: "Can I upgrade my plan anytime?",
      answers: "Absolutely! You can contact our support team to upgrade or scale your current plan.",
    },
    {
      question: "What support options are available?",
      answers: "We provide 24/7 customer support via phone, email, and live chat.",
    },
    {
      question: "Is Zast Media available outside Lagos?",
      answers: "Our core operations are in Lagos, but we're expanding to other regions. Stay tuned!",
    },
    {
      question: "How secure is the connection?",
      answers: "Our infrastructure is built on secure fiber-optic technology with regular monitoring.",
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
                  sx={{ fontSize: "14px", color: "#444444", lineHeight: "26px" }}
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
