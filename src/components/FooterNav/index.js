import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

const FooterNav = () => {
  const handleOnClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/kevinyiminggu/");
  };

  const handleOnClickGithub = () => {
    window.open(" https://github.com/KevinGuu");
  };

  const handleOnClickResume = () => {
    window.open(
      "https://s3.ap-southeast-2.amazonaws.com/www.kevinyiminggu.com/Kevin_Gu_Resume.pdf"
    );
  };
  return (
    <Container
      elevation={5}
      align="center"
      sx={{
        pt: 5,
        pb: 5,
        bgcolor: "primary.dark",
      }}
    >
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={10}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Kevin Gu 2021
          </Typography>
        </Grid>
        <Grid container xs={10} justifyContent="center">
          <IconButton
            onClick={handleOnClickLinkedin}
            key="linkedin"
            size="medium"
            sx={{
              color: "text.primary",
            }}
          >
            <LinkedInIcon fontSize="medium"></LinkedInIcon>
          </IconButton>
          <IconButton
            onClick={handleOnClickGithub}
            key="github"
            size="medium"
            sx={{
              color: "text.primary",
            }}
          >
            <GitHubIcon fontSize="medium"></GitHubIcon>
          </IconButton>
          <IconButton
            onClick={handleOnClickResume}
            key="resume"
            size="medium"
            sx={{
              color: "text.primary",
            }}
          >
            <BookIcon fontSize="medium"></BookIcon>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterNav;
