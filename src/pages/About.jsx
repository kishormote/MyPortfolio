import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import BrushIcon from "@mui/icons-material/Brush";

function About() {
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

  const highlights = [
    {
      icon: <WebIcon fontSize="large" />,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications",
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      icon: <BrushIcon fontSize="large" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces",
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: "Problem Solving (DSA)",
      description: "Strong foundation in data structures and algorithms.",
    },
  ];

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
            right: "10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              component="h2"
              className="gradient-text"
              gutterBottom
              align="center"
              sx={{ mb: 6 }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  paragraph
                  align="center"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  I'm a passionate Full Stack Developer with expertise in
                  building modern web applications. With a strong foundation in
                  both frontend and backend technologies, I strive to create
                  seamless digital experiences.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  paragraph
                  align="center"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  My journey in web development started with a curiosity for
                  creating things that live on the internet. Fast-forward to
                  today, I've had the privilege of working on diverse projects
                  that have sharpened my skills in various technologies.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 6 }}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Paper
                    elevation={0}
                    className="glass-card"
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      background: "rgba(15, 23, 42, 0.6)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Box
                      className="glow-icon"
                      sx={{
                        color: "primary.main",
                        transform: "scale(1.2)",
                        mb: 1,
                      }}
                    >
                      {highlight.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className="text-gradient-primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {highlight.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
