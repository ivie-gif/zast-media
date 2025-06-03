import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from "../../assets/logo.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Box
        sx={{
          pt: 2,
          mx: 2,
        }}
      >
        <img src={Logo} alt="logo" loading="lazy" width={80} height={70} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText
                primary={item}
                sx={{
                  color: "#000",
                  ml: 2,
                  "&:hover": { color: "#E10000" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {/* <Divider sx={{ border: "1px solid #777" , width: "100%" }} /> */}
      </List>
      <Box sx={{ display: { xs: "block", sm: "block" }, mx: 4 }}>
        <Button
          sx={{
            color: "#E10000",
            border: "2px solid #E10000",
            borderRadius: "20px",
            "&:hover": { backgroundColor: "#E10000", color: "#ffffff" },
            px: 2,
            textAlign: "center",
          }}
        >
          Free Quote
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* <CssBaseline /> */}

        {/* Desktop view of the Navbar */}
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "rgb(255, 255, 255)",
            py: 2,
          }}
        >
          <Box
            sx={{
              // backgroundColor: "#EFEFEF",
              backgroundColor: "#F5F5F5",
              height: { xs: "12vh", md: "7vh" },
              mt: -2,
              px: 2,
              alignItems: "center",
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: { xs: 2, md: 2 } }}
            >
              <Grid item xs={12} md={6} sx={{ pb: { xs: 1, md: 0 } }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmailIcon sx={{ fontSize: 18, color: "#E10000" }} />
                    <Typography variant="body2" sx={{ color: "#000000" }}>
                      info@zastmedia.net
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PhoneIcon sx={{ fontSize: 18, color: "#E10000" }} />
                    <Typography variant="body2" sx={{ color: "#000000" }}>
                      08098276352
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: "#E10000" }} />
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                    16 Floor, 8-10 Broad Street, Marina, Lagos, Nigeria
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                pt: { xs: 1, md: 1 },
                display: { xs: "block", sm: "block" },
                textAlign: "left",
                color: "#0D3E9B",
                "&:hover": { color: "#E10000" },
              }}
            >
              <img
                src={Logo}
                alt="logo"
                loading="lazy"
                width={60}
                height={60}
              />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, textAlign: "right" }}
            >
              <MenuIcon sx={{ color: "#E10000", textAlign: "right" }} />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#000000",
                    "&:hover": { color: "#E10000" },
                    px: 2,
                    textAlign: "center",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" }, mx: 5 }}>
              <Button
                sx={{
                  color: "#E10000",
                  border: "2px solid #E10000",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#E10000", color: "#ffffff" },
                  px: 2,
                  textAlign: "center",
                }}
              >
                Free Quote
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Mobile view of the Navbar */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
