import { Box, Typography, Button, Container } from "@mui/material";
import profile from "../assets/profile.jpg";

function HeroSection() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f1f5f9",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        
        <img
          src={profile}
          alt="Profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <Typography variant="h3" gutterBottom>
          Prannoy Chandola
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Full Stack Developer | AI & ML Enthusiast
        </Typography>

        <Button variant="contained" color="secondary" size="large">
          View My Work
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
