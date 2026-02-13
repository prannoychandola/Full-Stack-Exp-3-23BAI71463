import { Card, CardContent, Typography } from "@mui/material";

function ProjectCard({ title, description }) {
  return (
    <Card sx={{ height: "100%", p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
