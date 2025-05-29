import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FooterImage from "../../assets/footer.png";

function HeroMini() {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          paddingLeft: { xs: 0, md: 10 },
          paddingRight: { xs: 0, md: 10 },
        }}
      >
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            background: `url(${FooterImage})`,
            height: { xs: "12vh", md: "10vh" },
            zIndex: 999,
            mt: { xs: -3, md: "-40px" },
            borderRadius: { xs: "0px 0px 0px 0px", md: "35px 5px 35px 5px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mt: 2, }}>
            <Box sx={{ pl: { xs: 3, md: 10 } }}>
              <HomeIcon
                sx={{
                  color: "#0D3E9B",
                  backgroundColor: "#fff",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  padding: { xs: "5px", md: "10px" },
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "39px",
                  ml: 2,
                }}
              >
                High Speed Network — Residential
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            background: `url(${FooterImage})`,
            height: { xs: "12vh", md: "10vh" },
            zIndex: 999,
            mt: { xs: -3, md: "-40px" },
            // borderRadius: "35px 5px 5px 5px",
            borderRadius: { xs: "0px 0px 0px 0px", md: "35px 5px 35px 5px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Box sx={{ pl: { xs: 3, md: 10 } }}>
              <AddBusinessIcon
                sx={{
                  color: "#0D3E9B",
                  backgroundColor: "#fff",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  padding: { xs: "5px", md: "10px" },
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "39px",
                  ml: 2,
                }}
              >
                High Speed Network — Businesses
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            background: `url(${FooterImage})`,
            height: { xs: "12vh", md: "10vh" },
            zIndex: 999,
            mt: { xs: -3, md: "-40px" },
            // borderRadius: "5px 35px 5px 35px",
            borderRadius: { xs: "0px 0px 0px 0px", md: "35px 5px 35px 5px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Box sx={{ pl: { xs: 3, md: 10 } }}>
              <HomeWorkIcon
                sx={{
                  color: "#0D3E9B",
                  backgroundColor: "#fff",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  padding: { xs: "5px", md: "10px" },
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "39px",
                  ml: 2,
                }}
              >
                High Speed Network — Offices
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroMini;
