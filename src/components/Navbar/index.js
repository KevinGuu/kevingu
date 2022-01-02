import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { scroller } from "react-scroll";
import theme from "../../theme";

const mainBurgerLinks = [
  "Home",
  "About Me",
  "Skills",
  "Professional Experience",
  "Education",
  "Research",
  "Leadership",
  "Resume",
];

const Navbar = () => {
  const [anchorElBurger, setAnchorElBurger] = React.useState(null);

  const handleOpenBurger = (event) => {
    setAnchorElBurger(event.currentTarget);
  };

  const handleCloseBurger = () => {
    setAnchorElBurger(null);
  };

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

  const handleOnClickMenuLinks = (value) => (e) => {
    handleCloseBurger();
    switch (value) {
      case "Home":
        scroller.scrollTo("scrollToHero", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;

      case "About Me":
        scroller.scrollTo("scrollToAboutMe", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;
      case "Skills":
        scroller.scrollTo("scrollToSkills", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;
      case "Professional Experience":
        scroller.scrollTo("scrollToExperience", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;
      case "Education":
        scroller.scrollTo("scrollToEducation", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;
      case "Research":
        scroller.scrollTo("scrollToResearch", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;
      case "Leadership":
        scroller.scrollTo("scrollToLeadership", {
          duration: 700,
          delay: 100,
          smooth: true,
        });
        break;
      case "Resume":
        handleOnClickResume();
        break;
      case "Linkedin":
        handleOnClickLinkedin();
        break;
      case "GitHub":
        handleOnClickGithub();
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Container maxWidth="false">
          <Toolbar disableGutters variant="dense">
            {/* md screen title */}
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Kevin Gu
            </Typography>

            {/* xs screen title */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                justifyContent: "left",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              Kevin Gu
            </Typography>

            {/* ----- ----- ----- ----- -----  */}
            {/* Max screen main links */}
            {/* ----- ----- ----- ----- -----  */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <IconButton
                key="linkedin"
                onClick={handleOnClickLinkedin}
                size="medium"
                sx={{ my: 0, color: "white", display: "block" }}
              >
                <LinkedInIcon fontSize="medium"></LinkedInIcon>
              </IconButton>
              <IconButton
                key="github"
                onClick={handleOnClickGithub}
                size="medium"
                sx={{ my: 0, color: "white", display: "block" }}
              >
                <GitHubIcon fontSize="medium"></GitHubIcon>
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
                <Typography variant="h6">Resume</Typography>
              </IconButton>
            </Box>

            {/* ----- ----- ----- ----- -----  */}
            {/* Burger */}
            {/* ----- ----- ----- ----- -----  */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Navigations">
                <IconButton
                  onClick={handleOpenBurger}
                  sx={{ p: 0 }}
                  color="inherit"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "50px" }}
                id="menu-appbar"
                anchorEl={anchorElBurger}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElBurger)}
                onClose={handleCloseBurger}
              >
                {mainBurgerLinks.map((mainBurgerLink) => (
                  <MenuItem
                    key={mainBurgerLink}
                    onClick={handleOnClickMenuLinks(mainBurgerLink)}
                  >
                    <Typography textAlign="center">{mainBurgerLink}</Typography>
                  </MenuItem>
                ))}
                {/* SOCIALS */}
                <MenuItem onClick={handleOnClickMenuLinks("Linkedin")}>
                  <Typography>Linkedin</Typography>
                  <IconButton
                    key="linkedin"
                    size="small"
                    sx={{ color: "inherit" }}
                  >
                    <LinkedInIcon fontSize="medium"></LinkedInIcon>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleOnClickMenuLinks("GitHub")}>
                  <Typography textAlign="center">GitHub</Typography>
                  <IconButton
                    key="github"
                    size="small"
                    sx={{ color: "inherit" }}
                  >
                    <GitHubIcon fontSize="medium"></GitHubIcon>
                  </IconButton>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
