import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// import LeetCodeIcon from "@mui/icons-material/Leetcode";

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "rgba(15, 23, 42, 0.3)",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "30vw",
            height: "30vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%)",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  className="gradient-text"
                  sx={{ mb: 2, fontWeight: 500 }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4.5rem" },
                    fontWeight: "bold",
                    mb: 2,
                    background:
                      "linear-gradient(45deg, #f8fafc 30%, #94a3b8 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Kishor Mote
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  className="text-gradient-primary"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                    mb: 3,
                  }}
                >
                  Full Stack Developer
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    maxWidth: "600px",
                  }}
                >
                  I craft modern web experiences with cutting-edge technologies,
                  turning ideas into elegant digital solutions.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                  {[
                    {
                      icon: <GitHubIcon />,
                      url: "https://github.com/kishormote",
                    },
                    {
                      icon: <LinkedInIcon />,
                      url: "https://www.linkedin.com/in/kishor-mote-a63988257/",
                    },
                    {
                      icon: <TwitterIcon />,
                      url: "https://x.com/KishorMote7",
                    },
                    // {
                    //   icon: <LeetcodeIcon />,
                    //   url: "https://leetcode.com/u/Kishormote2003/",
                    // },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-icon"
                        sx={{
                          minWidth: "auto",
                          p: 1,
                        }}
                      >
                        {social.icon}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                component="img"
                src="/images/MyPhoto.jpg"
                alt="Profile"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  borderRadius: "50%",
                  border: "4px solid rgba(6, 182, 212, 0.3)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
