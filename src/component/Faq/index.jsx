import * as React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  const faqs = [
    {
      question: "question 1",
      answers: "answer 1",
    },
    {
      question: "question 2",
      answers: "answer 2",
    },
    {
      question: "question 3",
      answers: "answer 3",
    },
    {
      question: "question 4",
      answers: "answer 4",
    },
    {
      question: "question 5",
      answers: "answer 5",
    },
    {
      question: "question 6",
      answers: "answer 6",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#1E1278", pt: 10, pb: 20 }}>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          textAlign: "left",
          backgroundColor: "#E10000",
          width: { xs: "10%", md: "4%" },
          height: { xs: "3px", md: "3px" },
          //   marginTop: { xs: 10, md: 10 },
          marginX: { xs: 4, md: 10 },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "left",
          marginTop: { xs: 2, md: 1 },
          marginX: { xs: 1, md: 0 },
          fontSize: { xs: "25px", md: "42px" },
          fontWeight: 900,
          lineHeight: { md: "57px" },
          color: "#E10000",
          paddingX: { xs: 3, md: 10 },
          mb: 5,
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* <Box sx={{ paddingX: { xs: 3, md: 10 } }}>
        <Accordion  sx={{backgroundColor: "#F9FAFA"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Expanded by default</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Header</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Header</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Header</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box> */}

      <Grid container  spacing={2} sx={{ paddingX: { xs: 3, md: 10 } }}>
        {faqs.map((item) => {
          return (
            <Grid item size={{ xs: 12, md: 6 }}>
              <Accordion sx={{backgroundColor: '#F9FAFA'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answers}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Faq;
