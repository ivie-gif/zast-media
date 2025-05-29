import * as React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import Gadget from "../../assets/chooseImage.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import blogBackground from "../../assets/blog-background.jpg";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import DownloadIcon from "@mui/icons-material/Download";
import CheckIcon from "@mui/icons-material/Check";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function ChooseSection() {
  return (
    <Box sx={{ mt: { xs: 1, md: 10 } }}>
      {/* <Box
        sx={{
          pt: { xs: 1, md: -15 },
          // backgroundImage: `url(${blogBackground})`,
          backgroundColor: 'purple'
        }}
      > */}
      <Grid container direction="row-reverse">
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: "#FBFAF8" }}>
          <Box>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                textAlign: "left",
                backgroundColor: "#E10000",
                width: { xs: "10%", md: "8%" },
                height: { xs: "3px", md: "3px" },
                marginTop: { xs: 10, md: 10 },
                marginX: { xs: 4, md: 10 },
              }}
            />
            <Typography
              sx={{
                textAlign: "left",
                marginTop: { xs: 2, md: 1 },
                marginX: { xs: 1, md: 0 },
                fontSize: { xs: "25px", md: "42px" },
                fontWeight: 900,
                lineHeight: { md: "57px" },
                color: "#0D3E9B",
                paddingX: { xs: 3, md: 10 },
                mb: 5,
              }}
            >
              Reasons to Choose Zast-Media
              <CheckCircleIcon sx={{ color: "#E10000", fontSize: "15px" }} />
            </Typography>

            <Grid container spacing={2} sx={{ paddingX: { xs: 1, md: 5 } }}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    <TimerIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#0D3E9B" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#0D3E9B",
                        fontWeight: 800,
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Managed IT Services
                    </Typography>
                  </Grid>

                  <Box sx={{ pl: 6, textAlign: "left" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Local Network Setup
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Wi-Fi Solutions
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      IT Consultancy
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    <SettingsIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#0D3E9B" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#0D3E9B",
                        fontWeight: 800,
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Internet Solutions & <br /> Fiber-Optic Broadband
                    </Typography>
                  </Grid>
                  <Box sx={{ pl: 6, textAlign: "left" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Fiber To Corporate
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Fiber To The Home
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    <LanguageIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#0D3E9B" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#0D3E9B",
                        fontWeight: 800,
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Communication Solutions <br /> (Digital Land Lines)
                    </Typography>
                  </Grid>
                  <Box sx={{ pl: 6, textAlign: "left" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Voip service - IP Telephony
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    <DownloadIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#0D3E9B" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#0D3E9B",
                        fontWeight: 800,
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Value-Added Services
                    </Typography>
                  </Grid>
                  <Box sx={{ pl: 6, textAlign: "left" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      SMS Solutions
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Transactional and Bulk SMS
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <DoneOutlineIcon
                        sx={{ color: "#0D3E9B", fontSize: "15px", mr: 1 }}
                      />
                      Shortcode Value Added Services
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: { xs: "flex", md: "flex" },
            marginTop: { xs: -2, md: 0 },
            backgroundColor: "red",
          }}
        >
          {/* <Box> */}
          <img
            src={Gadget}
            alt="Gadget"
            loading="lazy"
            style={{
              width: "100%",
              // height: { xs: "50vh", md: "150%" },
              display: { xs: "block", md: "flex" },
            }}
          />
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
    // </Box>
  );
}

export default ChooseSection;
