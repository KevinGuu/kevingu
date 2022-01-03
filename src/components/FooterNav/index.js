import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
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
    <Paper
      elevation={5}
      sx={{
        pt: 3,
        pb: 3,
        bgcolor: "#f5f5f5",
      }}
    >
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center">
            <Typography
              variant="h7"
              sx={{
                fontWeight: "bold",
              }}
            >
              Kevin Gu 2021
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                onClick={handleOnClickLinkedin}
                key="linkedin"
                size="medium"
                sx={{
                  color: "black",
                }}
              >
                <LinkedInIcon fontSize="medium"></LinkedInIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickGithub}
                key="github"
                size="medium"
                sx={{
                  color: "black",
                }}
              >
                <GitHubIcon fontSize="medium"></GitHubIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickResume}
                key="resume"
                size="medium"
                sx={{
                  color: "black",
                }}
              >
                <BookIcon fontSize="medium"></BookIcon>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default FooterNav;
