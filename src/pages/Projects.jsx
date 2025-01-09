import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function Projects() {
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

  const projects = [
    {
      title: "College Hackathon Website",
      description:
        "Developed a college hackathon website for hackathon management purposes.",
      image: "/images/Magnitude.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "Cloudinary",
      ],
      github: "https://github.com/AaryanPalve5/Magnitude",
      live: "https://magnitude-six.vercel.app/", // Replace with the actual live link
      color: "#34d399", // Example color
    },
    {
      title: "NaamSiddhi",
      description:
        "Developed a college hackathon website to solve the Madhya Pradesh police problem.",
      image: "/images/NaamSiddhi.png",
      technologies: [
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "Cloudinary",
        "ejs template",
      ],
      github: "https://github.com/Jagdish2004/NaamSiddhi",
      live: "https://sih-finale.onrender.com/", // Replace with the actual live link
      color: "#34d399", // Example color
    },
    {
      title: "Expense Tracker App",
      description:
        "Developed a full-stack app to track income and expenses with visual charts. Built with Node.js and MongoDB.",
      image: "/images/ExpenseTracker.png",
      technologies: ["Node.js", "MongoDB", "Express", "React"],
      github: "https://github.com/kishormote/Money-Tracker-App",
      live: "https://money-tracker-app-gudu.onrender.com/", // Replace with the actual live link
      color: "#34d399", // Example color
    },
    {
      title: "User Registration and Authentication",
      description:
        "Implemented secure user login with bcrypt for password hashing, and MongoDB for data storage.",
      image: "/images/Magnitude.png",
      technologies: ["Node.js", "Express", "MongoDB", "Bcrypt"],
      github: "https://github.com/kishormote/REGISTRATION-FORM",
      live: "https://registration-form-beem.onrender.com", // Replace with the actual live link
      color: "#f59e0b", // Example color
    },
    {
      title: "Biligual Language Translator",
      description:
        "A full-stack e-commerce platform with features like user authentication, product management, shopping cart, and payment integration.",
      image: "/images/Dictionary.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "Node.js",
      ],
      github: "https://github.com/kishormote/dictionary",
      live: "https://project1.com",
      color: "#22c55e", // Green
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

      <Container sx={{ position: "relative", zIndex: 1, py: 8 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            variant="h3"
            component="h2"
            className="gradient-text"
            gutterBottom
            align="center"
            sx={{ mb: 6 }}
          >
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    elevation={0}
                    className="glass-card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(15, 23, 42, 0.6)",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${project.color}, transparent)`,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: "cover",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className="text-gradient-primary"
                        sx={{ fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 2, lineHeight: 1.7 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: `${project.color}20`,
                              color: project.color,
                              borderRadius: "4px",
                              "& .MuiChip-label": {
                                px: 2,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          mr: 1,
                          color: project.color,
                          "&:hover": {
                            backgroundColor: `${project.color}20`,
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        sx={{
                          color: project.color,
                          "&:hover": {
                            backgroundColor: `${project.color}20`,
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Projects;
