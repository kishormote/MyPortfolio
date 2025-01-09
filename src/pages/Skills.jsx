import { Box, Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import WebIcon from "@mui/icons-material/Web";

function Skills() {
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

  // Function to get color based on skill level
  const getColorByLevel = (level) => {
    if (level >= 90) return "#22c55e"; // Green - Expert
    if (level >= 80) return "#8b5cf6"; // Purple - Advanced
    if (level >= 70) return "#f59e0b"; // Amber - Intermediate
    return "#ef4444"; // Red - Beginner
  };

  // Function to get level label
  const getLevelLabel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <WebIcon fontSize="large" />,
      color: "#22c55e",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Next.js", level: 70 },
      ],
    },
    {
      title: "Backend Development",
      icon: <StorageIcon fontSize="large" />,
      color: "#8b5cf6",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <CodeIcon fontSize="large" />,
      color: "#ef4444",
      skills: [
       
        { name: "Java", level: 95 },
        { name: "C++", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Tools & Design",
      icon: <BrushIcon fontSize="large" />,
      color: "#f59e0b",
      skills: [
        { name: "Git/Github", level: 90 },
        { name: "Chagpt", level: 95 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 80 },
        { name: "AWS", level: 65 },
        { name: "Github Desktop", level: 80 },
        
      ],
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

      <Box sx={{ width: "100%", position: "relative", zIndex: 1, py: 8 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            variant="h3"
            component="h2"
            className="gradient-text"
            align="center"
            sx={{ mb: 6 }}
          >
            Skills
          </Typography>

          <Grid container spacing={4} sx={{ px: 2 }}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    className="glass-card"
                    sx={{
                      p: 4,
                      height: "100%",
                      background: "rgba(15, 23, 42, 0.6)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      <Box
                        className="glow-icon"
                        sx={{
                          color: category.color,
                          filter: `drop-shadow(0 0 8px ${category.color}40)`,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        className="text-gradient-primary"
                        sx={{ fontWeight: 600 }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {category.skills.map((skill, skillIndex) => (
                        <Grid
                          item
                          xs={6}
                          key={skillIndex}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              display: "inline-flex",
                              mb: 1,
                            }}
                          >
                            <CircularProgress
                              variant="determinate"
                              value={skill.level}
                              size={80}
                              thickness={4}
                              sx={{
                                color: getColorByLevel(skill.level),
                                "& .MuiCircularProgress-circle": {
                                  strokeLinecap: "round",
                                  animation: "progress 1s ease-out forwards",
                                  "@keyframes progress": {
                                    "0%": {
                                      strokeDasharray: "0 100",
                                    },
                                  },
                                },
                                "&::before": {
                                  content: '""',
                                  position: "absolute",
                                  inset: -1,
                                  borderRadius: "50%",
                                  padding: 1,
                                  background: `linear-gradient(45deg, ${getColorByLevel(
                                    skill.level
                                  )}40, ${getColorByLevel(skill.level)}20)`,
                                  WebkitMask:
                                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                  WebkitMaskComposite: "xor",
                                  maskComposite: "exclude",
                                },
                              }}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography
                                variant="caption"
                                component="div"
                                sx={{
                                  fontWeight: 600,
                                  color: getColorByLevel(skill.level),
                                  fontSize: "1rem",
                                }}
                              >
                                {`${Math.round(skill.level)}%`}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontSize: "0.7rem",
                                  color: getColorByLevel(skill.level),
                                  opacity: 0.8,
                                }}
                              >
                                {getLevelLabel(skill.level)}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              textAlign: "center",
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Skills;
