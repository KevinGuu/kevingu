import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HeroSlider, { MenuNav, Slide } from "hero-slider";
import React from "react";
import Hero1Image from "../../static/img/hero_1.JPG";
import HeroSplashImage from "../../static/img/hero_splash.JPG";

const Hero = () => {
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
    <Container name="scrollToHero" disableGutters maxWidth="false">
      <HeroSlider
        slidingAnimation="fade"
        orientation="horizontal"
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
            backgroundPosition: "center top",
            backgroundImage: HeroSplashImage,
          }}
        >
          <Box
            name="boxMD"
            sx={{
              position: "absolute",
              left: "25%",
              top: "45%",
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              variant="h1"
              color="text.primary"
              sx={{
                fontWeight: "bold",
              }}
            >
              Kevin Gu
            </Typography>
            <Typography variant="h2" color="text.primary">
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
                }}
              >
                <BookIcon fontSize="large"></BookIcon>
                <Typography variant="h6" sx={{ pl: 1.5 }}>
                  Download Resume
                </Typography>
              </IconButton>
            </Box>
          </Box>
          <Box
            name="boxXs"
            sx={{
              position: "absolute",
              left: "5%",
              top: "45%",
              display: { xs: "block", md: "none" },
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{
                fontWeight: "bold",
              }}
            >
              Kevin Gu
            </Typography>
            <Typography variant="h4" color="white">
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
                size="medium"
                edge="start"
                sx={{
                  color: "white",
                }}
              >
                <LinkedInIcon fontSize="medium"></LinkedInIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickGithub}
                key="github"
                size="medium"
                sx={{
                  color: "white",
                }}
              >
                <GitHubIcon fontSize="medium"></GitHubIcon>
              </IconButton>
            </Box>
          </Box>
        </Slide>

        <Slide
          navDescription="Software Developer"
          background={{
            backgroundColor: "#8A8A8A",
            backgroundImage: Hero1Image,
          }}
        >
          <Box
            name="boxMD"
            sx={{
              position: "absolute",
              left: "25%",
              top: "45%",
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              variant="h1"
              color="white"
              sx={{
                fontWeight: "bold",
              }}
            >
              Kevin Gu
            </Typography>
            <Typography variant="h2" color="white">
              Software Engineer
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
                }}
              >
                <BookIcon fontSize="large"></BookIcon>
                <Typography variant="h6" sx={{ pl: 1.5 }}>
                  Download Resume
                </Typography>
              </IconButton>
            </Box>
          </Box>
          <Box
            name="boxXs"
            sx={{
              position: "absolute",
              left: "5%",
              top: "45%",
              display: { xs: "block", md: "none" },
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{
                fontWeight: "bold",
              }}
            >
              Kevin Gu
            </Typography>
            <Typography variant="h4" color="white">
              Software Engineer
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
                size="medium"
                edge="start"
                sx={{
                  color: "white",
                }}
              >
                <LinkedInIcon fontSize="medium"></LinkedInIcon>
              </IconButton>
              <IconButton
                onClick={handleOnClickGithub}
                key="github"
                size="medium"
                sx={{
                  color: "white",
                }}
              >
                <GitHubIcon fontSize="medium"></GitHubIcon>
              </IconButton>
            </Box>
          </Box>
        </Slide>
        <MenuNav />
      </HeroSlider>
    </Container>
  );
};

export default Hero;
