import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Button,
  Divider,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Link } from "react-router-dom";
import "../../styles/Headerstyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { styled } from "@mui/material/styles";

// Color button

const ColorButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 17,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#81c700",
  borderColor: "#81c700",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    boxShadow: "0 0 0 0.2rem #81c700",
    color: "black",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#d6d6d6",
    borderColor: "#d6d6d6",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #81c700",
  },
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link className="burgerhouse" to={"/"}>
        <LunchDiningIcon sx={{ mr: 1 }} color="success" fontSize="large" />
      </Link>
      <Divider />
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          my: 2,
        }}
      >
        <Link className="burgerhouse" to={"/"}>
          Burger House
        </Link>
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"} underline="hover">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/catering"}>Catering</Link>
        </li>
        <Divider sx={{ my: 5 }} />
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/help"}>Help</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}></Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: "white",
            boxShadow: 0,
            p: 3,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { xs: "block", sm: "block", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="action" />
            </IconButton>

            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Box sx={{ display: "flex" }}>
                <Link className="burgerhouse" to={"/"}>
                  <LunchDiningIcon
                    sx={{ mr: 1 }}
                    color="success"
                    fontSize="medium"
                  />
                </Link>
                <Link className="burgerhouse" to={"/"}>
                  <Typography
                    sx={{
                      "@media(max-width:400px)": {
                        fontSize: "0.6rem",
                      },
                    }}
                  >
                    Burger House
                  </Typography>
                </Link>
              </Box>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
              <ul className="navigation-menu">
                {/* <li>
                  <Link to={"/"}>Home</Link>
                </li> */}
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/catering"}>Catering</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/help"}>Help</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}></Link>
                </li>
              </ul>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mr: "5px", display: { xs: "none", sm: "block" } }}
            />

            <Box>
              <ul className="navigation-menu">
                <li>
                  <ColorButton variant="contained">Order Now</ColorButton>
                </li>
                {/* <li>
                  <Button variant="contained" color="success">
                    <Link to={"/ordernow"}>Order Now</Link>
                  </Button>
                </li> */}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Box sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
