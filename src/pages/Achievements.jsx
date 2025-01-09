import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function Achievements() {
  const achievements = [
    {
      title: "Winner, SIH 2024",
      image: "../src/assets/SihWinner.jpg",
      date: "2024",
      description:
        "Secured the first place in the Smart India Hackathon (SIH) 2024, showcasing our technical skills and collaborative spirit.",
      icon: <EmojiEventsIcon fontSize="large" />,
    },
    {
      title: "350+ Problems Solved",
      date: "Ongoing",
      description:
        "Successfully solved over 350 DSA problems, enhancing my coding skills and preparing for technical challenges.",
      icon: <WorkspacePremiumIcon fontSize="large" />,
    },
  ];

  return (
    <Box component="section" className="glass-section">
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Achievements
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "300px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={achievement.image}
                  alt={achievement.title}
                  sx={{
                    objectFit: "cover",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                      color: "primary.main",
                    }}
                  >
                    {achievement.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    align="center"
                    color="primary"
                    gutterBottom
                  >
                    {achievement.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{
                      padding: "0 10px",
                      fontSize: "0.8rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Achievements;
