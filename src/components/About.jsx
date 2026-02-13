import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          About Me
        </Typography>

        <Typography variant="body1" align="center" sx={{ maxWidth: "800px", margin: "auto" }}>
          I am a passionate Computer Science student specializing in Artificial
          Intelligence and Machine Learning. I build modern web applications
          using React, Flask, Docker, and cloud technologies. I love solving
          real-world problems using AI-driven solutions.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
