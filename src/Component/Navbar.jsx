import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar position="fixed" className="glass-nav">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: "1px",
              cursor: "pointer",
              background: "linear-gradient(45deg, #06b6d4 30%, #22d3ee 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(45deg, #22d3ee 30%, #06b6d4 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
            onClick={() => navigate("/")}
          >
            PORTFOLIO
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                className="nav-button"
                onClick={() => handleNavigation(item.path)}
                sx={{
                  color:
                    location.pathname === item.path ? "#06b6d4" : "#94a3b8",
                  backgroundColor:
                    location.pathname === item.path
                      ? "rgba(6, 182, 212, 0.1)"
                      : "transparent",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: location.pathname === item.path ? "100%" : "0%",
                    height: "2px",
                    bottom: "6px",
                    left: "0",
                    backgroundColor: "#06b6d4",
                    transition: "all 0.3s ease",
                  },
                  "&:hover": {
                    color: "#06b6d4",
                    backgroundColor: "rgba(6, 182, 212, 0.05)",
                    "&::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              onClick={handleMenu}
              sx={{
                color: "#06b6d4",
                "&:hover": {
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(6, 182, 212, 0.1)",
                  mt: 1,
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color:
                      location.pathname === item.path ? "#06b6d4" : "#94a3b8",
                    backgroundColor:
                      location.pathname === item.path
                        ? "rgba(6, 182, 212, 0.1)"
                        : "transparent",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#06b6d4",
                      backgroundColor: "rgba(6, 182, 212, 0.05)",
                    },
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
