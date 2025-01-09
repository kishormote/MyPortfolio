import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

function Experience() {
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

  const experiences = [
    {
      title: "CPMC Mentor",
      company: "Competitive Programming and Mentorship Club, DYPCOE",
      duration: "2023 - 2024",
      description: [
        "Leading college-level competitive programming mentorship initiative",
        "Mentoring 50+ students in DSA and competitive programming concepts",
        "Organizing weekly coding contests and problem-solving sessions",
        "Contributing to building a strong competitive programming culture in college",
      ],
      type: "work",
      color: "#22c55e", // Green for latest experience
    },
    {
      title: "Project Collaborator & Hackathon Participant",
      company: "Various Organizations",
      duration: "2023 - 2024",
      description: [
        "Participated in multiple hackathons including Smart India Hackathon",
        "Collaborated on diverse projects gaining hands-on development experience",
        "Worked with different tech stacks and development methodologies",
        "Developed solutions for real-world problems through hackathons",
      ],
      type: "work",
      color: "#8b5cf6", // Purple
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <Typography
            variant="h3"
            component="h2"
            className="gradient-text"
            gutterBottom
            align="center"
            sx={{ mb: 6 }}
          >
            Experience
          </Typography>

          <Timeline
            sx={{
              [`& .MuiTimelineItem-root`]: {
                minHeight: "150px",
              },
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0",
              flexDirection: "column",
            }}
          >
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                sx={{
                  "&::before": {
                    display: "none",
                  },
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: exp.color,
                      boxShadow: `0 0 10px ${exp.color}40`,
                    }}
                  >
                    {exp.type === "work" ? <WorkIcon /> : <SchoolIcon />}
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: `linear-gradient(180deg, ${exp.color}, transparent)`,
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    textAlign: "left",
                    "& .glass-card": {
                      width: "100%",
                      maxWidth: "600px",
                      margin: "0 auto",
                    },
                  }}
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Paper
                      elevation={0}
                      className="glass-card"
                      sx={{
                        p: 3,
                        background: "rgba(15, 23, 42, 0.6)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        className="text-gradient-primary"
                        sx={{ fontWeight: 600 }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: exp.color, mb: 1 }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          display: "block",
                          mb: 2,
                          fontSize: "0.9rem",
                        }}
                      >
                        {exp.duration}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2 }}>
                        {exp.description.map((desc, i) => (
                          <Typography
                            component="li"
                            variant="body2"
                            key={i}
                            sx={{
                              mb: 0.5,
                              color: "text.secondary",
                              "&::marker": {
                                color: exp.color,
                              },
                            }}
                          >
                            {desc}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience;
