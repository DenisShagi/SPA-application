import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

// Стили для ссылки с градиентным эффектом
const StyledLink = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "1px",
  textDecoration: "none",
  color: "white",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    backgroundImage: "linear-gradient(90deg, #ff8a00 0%, #e52e71 50%, #9a3cfc 100%)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    backgroundImage: "linear-gradient(90deg, #ff8a00 0%, #e52e71 50%, #9a3cfc 100%)",
    transition: "width 0.4s ease-in-out",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Логотип и описание */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              My Awesome App
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Простое и удобное приложение, которое поможет вам управлять вашими
              задачами и проектами.
            </Typography>
          </Grid>

          {/* Быстрые ссылки */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Быстрые ссылки
            </Typography>
            <Box>
              <StyledLink to="/">Главная</StyledLink>
            </Box>
            <Box>
              <StyledLink to="/about">О нас</StyledLink>
            </Box>
            <Box>
              <StyledLink to="/contact">Контакты</StyledLink>
            </Box>
          </Grid>

          {/* Социальные сети */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Следите за мной
            </Typography>
            <Box>
              <IconButton
                href="https://github.com/DenisShagi"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "#FFFFFF",
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": {
                    color: "#0056b3", // Тёмно-синий
                    transform: "scale(1.2)",
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "#FFFFFF",
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": {
                    color: "#0056b3",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "#FFFFFF",
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": {
                    color: "#0d8af0",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Нижняя полоса с копирайтом */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            borderTop: "1px solid #444",
            pt: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} My Awesome App. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export { Footer };
