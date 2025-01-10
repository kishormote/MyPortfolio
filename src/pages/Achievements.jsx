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
      image: "/images/SihWinner.jpg",
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
    <Box
      component="section"
      className="glass-section"
      sx={{
        minHeight: "100vh",
        pt: { xs: 8, sm: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: { xs: 3, sm: 4, md: 5 },
            wordBreak: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
          }}
        >
          Achievements
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: { xs: "auto", sm: "300px" },
                  minHeight: { xs: "300px", sm: "auto" },
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      lineHeight: 1.2,
                      mb: 1,
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    align="center"
                    color="primary"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    }}
                  >
                    {achievement.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{
                      px: { xs: 1, sm: 2 },
                      fontSize: { xs: "0.75rem", sm: "0.8rem" },
                      lineHeight: 1.4,
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
