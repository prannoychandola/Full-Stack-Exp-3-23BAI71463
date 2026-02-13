import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Container, Typography, Grid } from "@mui/material";

function Projects() {
  return (
    <>
      <Navbar />

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Projects
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <ProjectCard
              title="AI Stress Predictor"
              description="ML-based system to detect early mental health risks."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ProjectCard
              title="Government Scheme Chatbot"
              description="Flask-based chatbot suggesting schemes dynamically."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ProjectCard
              title="Full Stack Docker App"
              description="Complete microservice architecture with React + Flask."
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Projects;
