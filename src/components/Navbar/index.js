import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { scroller } from "react-scroll";
import KGIcon from "../../static/img/kg_icon.png";

const mainBurgerLinks = [
  "Home",
  "About Me",
  "Skills",
  "Experience",
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
      "https://s3.ap-southeast-2.amazonaws.com/www.kevinyiminggu.com/Kevin_Gu_Resume.pdf"
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
      case "Experience":
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
    <AppBar>
      <Container maxWidth="false">
        <Toolbar disableGutters variant="dense">
          <Grid container justify="space-between" alignItems="center">
            <Grid item name="gridItemIcon">
              <Button
                size="medium"
                startIcon={
                  <Avatar
                    variant="rounded"
                    src={KGIcon}
                    sx={{ width: 30, height: 30, mr: 1 }}
                  />
                }
                onClick={handleOnClickMenuLinks("Home")}
              />
            </Grid>
            <Grid item name="gridItemSocials">
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  key="linkedin"
                  onClick={handleOnClickLinkedin}
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                >
                  <LinkedInIcon fontSize="medium"></LinkedInIcon>
                </IconButton>
                <IconButton
                  key="github"
                  onClick={handleOnClickGithub}
                  size="medium"
                  sx={{ color: "white" }}
                >
                  <GitHubIcon fontSize="medium"></GitHubIcon>
                </IconButton>
                <IconButton
                  onClick={handleOnClickResume}
                  key="resume"
                  size="medium"
                  sx={{
                    color: "white",
                  }}
                >
                  <BookIcon fontSize="medium" sx={{ mr: 1 }}></BookIcon>
                  <Typography variant="body1">Resume</Typography>
                </IconButton>
              </Box>
            </Grid>
            <Grid item name="gridItemMenu" sx={{ marginLeft: "auto" }}>
              <Box>
                <Tooltip title="Open Navigations">
                  <IconButton
                    onClick={handleOpenBurger}
                    sx={{ p: 0 }}
                    color="inherit"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                  >
                    <MenuIcon fontSize="large" />
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
                      <Typography
                        variant="body1"
                        align="left"
                        sx={{
                          color: "primary.main",
                        }}
                      >
                        {mainBurgerLink}
                      </Typography>
                    </MenuItem>
                  ))}
                  {/* SOCIALS */}
                  <MenuItem onClick={handleOnClickMenuLinks("Linkedin")}>
                    <Typography
                      variant="body1"
                      align="left"
                      sx={{
                        color: "primary.main",
                      }}
                    >
                      Linkedin
                    </Typography>
                    <IconButton
                      key="linkedin"
                      size="small"
                      edge="start"
                      sx={{ color: "primary.main" }}
                    >
                      <LinkedInIcon fontSize="small"></LinkedInIcon>
                    </IconButton>
                  </MenuItem>
                  <MenuItem onClick={handleOnClickMenuLinks("GitHub")}>
                    <Typography
                      variant="body1"
                      align="left"
                      sx={{
                        color: "primary.main",
                      }}
                    >
                      GitHub
                    </Typography>
                    <IconButton
                      key="github"
                      size="small"
                      edge="start"
                      sx={{ color: "primary.main" }}
                    >
                      <GitHubIcon fontSize="small"></GitHubIcon>
                    </IconButton>
                  </MenuItem>
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
