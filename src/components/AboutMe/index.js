import BookIcon from "@mui/icons-material/Book";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import AboutMeImage from "../../static/img/about_me.jpeg";

const AboutMe = () => {
  const handleOnClickResume = () => {
    window.open(
      "https://s3.ap-southeast-2.amazonaws.com/www.kevinyiminggu.com/Kevin_Gu_Resume.pdf"
    );
  };

  return (
    <Container
      name="scrollToAboutMe"
      align="center"
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        maxWidth="lg"
        spacing={3}
      >
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image={AboutMeImage}
              alt="Just a coupla cool cats"
              sx={{ width: 405, height: 550 }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            component="div"
            align="left"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            Hello, I'm Kevin
          </Typography>
          <Typography
            variant="h5"
            align="left"
            component="div"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            I'm a Sydney based DevOps engineer, software developer and
            occasional photo clicker.
          </Typography>
          <Typography
            variant="body1"
            align="left"
            component="div"
            gutterBotom
            sx={{ color: "text.primary" }}
          >
            My passion for automation, containerisation and the cloud started
            when I first experienced cloudformation at Accenture, where I still
            work today. I am currently working on architecting an
            enterprise-level SaaS business service platform as a part of the
            Accenture Cloud First initiative. In my past life, I was heavily
            involved in data science and analytics throughout my previous roles
            at Siemens Energy, SSI Schaefer and Huawei.
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton
              onClick={handleOnClickResume}
              edge="start"
              size="medium"
              sx={{
                color: "text.primary",
              }}
            >
              <BookIcon fontSize="medium"></BookIcon>
              <Typography variant="h6" sx={{ pl: 1.5 }}>
                Download Resume
              </Typography>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
