import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the values from your environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Create template parameters
    const templateParams = {
      to_name: "Kishor", // Add this to match your template
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value,
    };

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.text === "OK") {
        setAlertMessage("Message sent successfully!");
        setAlertSeverity("success");
        setOpen(true);
        e.target.reset();
      } else {
        setAlertMessage("Failed to send message. Please try again.");
        setAlertSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setAlertMessage("Error sending message. Please try again later.");
      setAlertSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: "https://github.com/kishormote" },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/kishor-mote-a63988257/",
    },
    { icon: <TwitterIcon />, url: "https://x.com/KishorMote7" },
  ];

  return (
    <Box component="section" className="glass-section">
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Let's Connect
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <EmailIcon
                    sx={{ mr: 2, color: "primary.main", minWidth: 24 }}
                  />
                  <Typography
                    sx={{
                      wordBreak: "break-word",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      maxWidth: "100%",
                    }}
                  >
                    motekishor90@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <LocationOnIcon
                    sx={{ mr: 2, color: "primary.main", minWidth: 24 }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    Pune, Maharashtra, India
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom>
                Follow Me
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
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
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="from_name"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="from_email"
                      variant="outlined"
                      required
                      type="email"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        height: 48,
                        background:
                          "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          sx={{
            width: "100%",
            backgroundColor:
              alertSeverity === "success"
                ? "rgba(46, 125, 50, 0.9)"
                : "rgba(211, 47, 47, 0.9)",
            color: "white",
            "& .MuiAlert-icon": {
              color: "white",
            },
          }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
