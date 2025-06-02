import * as React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
// import Gadget from "../../assets/chooseImage.jpg";
import Gadget from "../../assets/gadget-laptop.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CheckIcon from "@mui/icons-material/FileDownloadDone";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SmsIcon from "@mui/icons-material/Sms";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import WovenImageList from "../../reusables";
import Fiber from "../../assets/fiber.jpg";
import CenteredPageLayout from "../Layout";

function ChooseSection() {
  return (
    <Box sx={{ mt: { xs: 1, md: 10 } }}>
      <Box
        sx={{
          my: { xs: 5, md: 10 },
          mx: { md: 10 },
          py: { xs: 1, md: 3 },
          backgroundColor: "#E10000",
          borderRadius: "15px",
        }}
        >
        <Grid container sx={{ px: { xs: 2, md: 0 } }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "30px", md: "50px" },
                pb: { xs: 5, md: 0 },
                fontWeight: "bold",
                pt: { xs: 3, md: 10 },
                textAlign: { xs: "center", md: "left" },
                pl: { xs: 0, md: 10 },
                color: "#fff",
              }}
            >
              Start Your Fiber Optics Journey With Us Now
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>

            <Box
              sx={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                backgroundColor: "#FBFAF8",
                overflow: "hidden", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: { xs: 3, md: 25 },
              }}
            >
              <img src={Fiber} alt="fiber" loading="lazy" />
            </Box>
          </Grid>
        </Grid>
        </Box>
      <Grid container direction="row-reverse">
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: "#FBFAF8" }}>
          <Box>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                textAlign: "left",
                backgroundColor: "#000000",
                width: { xs: "10%", md: "8%" },
                height: { xs: "3px", md: "3px" },
                marginTop: { xs: 8, md: 10 },
                marginX: { xs: 4, md: 10 },
              }}
            />
            <Typography
              sx={{
                textAlign: "left",
                mt: { xs: 2, md: 1 },
                mx: { xs: 1, md: 0 },
                fontSize: { xs: "25px", md: "42px" },
                fontWeight: 900,
                lineHeight: { md: "57px" },
                color: "#000000", // ✅ Updated from blue
                px: { xs: 3, md: 10 },
                mb: 5,
              }}
            >
              Reasons to Choose Zast-Media
              <CheckCircleIcon sx={{ color: "#E10000", fontSize: "15px" }} />
            </Typography>

            <Grid container spacing={2} sx={{ paddingX: { xs: 3, md: 5 } }}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    {/* <TimerIcon
                      sx={{
                        color: "#E10000 ",
                        fontSize: "40px",
                        "&:hover": { color: "#777" }, // dark grey on hover
                      }}
                    /> */}
                    <DevicesOtherIcon
                      sx={{
                        color: "#000000",
                        fontSize: "30px",
                        "&:hover": { color: "#E10000" }, // dark grey on hover
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#000000",
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
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      Local Network Setup
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      Wi-Fi Solutions
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      IT Consultancy
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    {/* <SettingsIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#777" },
                      }}
                    /> */}
                    <SignalCellularAltIcon
                      sx={{
                        color: "#000000",
                        fontSize: "30px",
                        "&:hover": { color: "#E10000" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#000000",
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
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      Fiber To Corporate
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      Fiber To The Home
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    {/* <LanguageIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#777" },
                      }}
                    /> */}
                    <PhoneInTalkIcon
                      sx={{
                        color: "#000000",
                        fontSize: "30px",
                        "&:hover": { color: "#E10000" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#000000",
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
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      Voip service - IP Telephony
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid>
                    {/* <DownloadIcon
                      sx={{
                        color: "#E10000",
                        fontSize: "40px",
                        "&:hover": { color: "#777" },
                      }}
                    /> */}
                    <SmsIcon
                      sx={{
                        color: "#000000",
                        fontSize: "30px",
                        "&:hover": { color: "#E10000" },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        pl: 1,
                        color: "#000000",
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
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      SMS Solutions
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
                      />
                      Transactional and Bulk SMS
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CheckIcon
                        sx={{ color: "#E10000", fontSize: "25px", mr: 1 }}
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
          }}
        >
          <img
            src={Gadget}
            alt="Gadget"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              display: { xs: "block", md: "flex" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChooseSection;
