import * as React from "react";
import { Box, Divider, Typography, IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CenteredPageLayout from "../Layout";

import FTTH from "./FTTH";
import CommunicationServices from "./CommSolution";
import VAS from "./VAS";
import ManagedService from "./ManagedService";
import FiberInternet from "./FiberInternet";
import FooterNewImage from "../../assets/footer-new.png";

const serviceComponents = [
  { component: <FTTH />, label: "FTTH" },
  { component: <FiberInternet />, label: "Fiber Internet" },
  { component: <CommunicationServices />, label: "Communication" },
  { component: <VAS />, label: "VAS" },
  { component: <ManagedService />, label: "Managed IT" },
];

function Services() {
  const scrollContainerRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  React.useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scrollAmount = 360; 

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount, 
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
    sx={{
      background: `url(${FooterNewImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        px={{ xs: 3, md: 10 }}
        direction={{ xs: "row", md: "row" }}
        pt={{ xs: 8, md: 10}}
      >
        <Grid item size={{ xs: 6, md: "auto" }}>
          <Box>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                backgroundColor: "#fff",
                width: "50px",
                height: "3px",
                mb: 1,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "25px", md: "42px" },
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                color: "#fff",
              }}
            >
              Our Services
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          size={{ xs: 6, md: "auto" }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 1, md: 0 },
          }}
        >
          <IconButton onClick={handlePrev} disabled={!canScrollLeft}>
            <ArrowBackIosNewIcon
              sx={{
                color: canScrollLeft ? "#000" : "#aaa",
                backgroundColor: "#D9D9D9",
                borderRadius: "50%",
                p: 1,
              }}
            />
          </IconButton>
          <IconButton onClick={handleNext} disabled={!canScrollRight}>
            <ArrowForwardIosIcon
              sx={{
                color: canScrollRight ? "#000" : "#aaa",
                backgroundColor: "#D9D9D9",
                borderRadius: "50%",
                p: 1,
              }}
            />
          </IconButton>
        </Grid>
      </Grid>

      <Box
        ref={scrollContainerRef}
        sx={{
          mt: { xs: 0, md: 4 },
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: -12,
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {serviceComponents.map(({ component, label }, index) => (
          <Box
            key={label}
            sx={{
              minWidth: 200, 
              flexShrink: 0,
              marginX: -12,
            }}
            aria-label={label}
          >
            {component}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Services;
