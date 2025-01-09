import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  const socialLinks = [
    { icon: <GitHubIcon />, url: "https://github.com/kishormote" },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/kishor-mote-a63988257/",
    },
    { icon: <TwitterIcon />, url: "https://x.com/KishorMote7" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {/* Brand and Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontSize: "1rem", mb: 1 }}>
              Kishor Mote
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    padding: "2px 8px",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Update CV Download Button */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "right" } }}
          >
            <Button
              variant="contained"
              color="primary"
              href="/files/MyResume.pdf"
              download="MyResume.pdf"
              sx={{
                mt: 1,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
                },
              }}
            >
              Download My CV
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            pt: 1,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.75rem" }}
          >
            © {new Date().getFullYear()} Kishor Mote. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.75rem" }}
          >
            Made with ❤️ using React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
