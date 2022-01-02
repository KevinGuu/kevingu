import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HeroSlider, { MenuNav, Slide } from "hero-slider";
import React from "react";
import Hero1Image from "../../static/img/hero_1.JPG";
import HeroSplashImage from "../../static/img/hero_splash.JPG";

const hero = () => {
  const handleOnClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/kevinyiminggu/");
  };

  const handleOnClickGithub = () => {
    window.open(" https://github.com/KevinGuu");
  };

  const handleOnClickResume = () => {
    window.open(
      "https://kevingu-portfolio.s3.ap-southeast-2.amazonaws.com/static/file/Kevin_Gu_Resume.pdf"
    );
  };

  return (
    <Container name="scrollToHero" disableGutters maxWidth="false">
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="vertical"
        initialSlide={1}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
          height: "100vh",
        }}
      >
        <Slide
          // shouldRenderMask
          navDescription="DevOps Engineer"
          background={{
            backgroundColor: "#6D9B98",
            backgroundImage: HeroSplashImage,
          }}
        >
          <Container>
            <Typography
              variant="h2"
              color="white"
              sx={{
                fontWeight: "bold",
                display: { xs: "none", md: "flex" },
                pt: 70,
              }}
            >
              Kevin Gu
            </Typography>
            <Typography
              variant="h3"
              color="white"
              Wrap
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              DevOps Engineer
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                onClick={handleOnClickLinkedin}
                key="linkedin"
                size="large"
                edge="start"
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <LinkedInIcon fontSize="large"></LinkedInIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickGithub}
                key="github"
                size="large"
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <GitHubIcon fontSize="large"></GitHubIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickResume}
                key="resume"
                size="large"
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <BookIcon fontSize="large"></BookIcon>
                <Typography variant="h5" sx={{ pl: 1.5 }}>
                  Download Resume
                </Typography>
              </IconButton>
            </Box>
          </Container>
        </Slide>

        <Slide
          // shouldRenderMask
          navDescription="Software Developer"
          background={{
            backgroundColor: "#8A8A8A",
            backgroundImage: Hero1Image,
          }}
        >
          <Container>
            <Typography
              variant="h2"
              color="white"
              sx={{
                fontWeight: "bold",
                display: { xs: "none", md: "flex" },
                pt: 70,
              }}
            >
              Kevin Gu
            </Typography>
            <Typography
              variant="h3"
              color="white"
              Wrap
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              Software Developer
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                onClick={handleOnClickLinkedin}
                key="linkedin"
                size="large"
                edge="start"
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <LinkedInIcon fontSize="large"></LinkedInIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickGithub}
                key="github"
                size="large"
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <GitHubIcon fontSize="large"></GitHubIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickResume}
                key="resume"
                size="large"
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <BookIcon fontSize="large"></BookIcon>
                <Typography variant="h5" sx={{ pl: 1.5 }}>
                  Download Resume
                </Typography>
              </IconButton>
            </Box>
          </Container>
        </Slide>

        <MenuNav />
      </HeroSlider>
    </Container>
  );
};

export default hero;
