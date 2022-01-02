import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutMeImage from "../../static/img/about_me.jpeg";

const AboutMe = () => {
  return (
    <Container name="scrollToAboutMe" sx={{ pt: 5, pb: 5 }}>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="650"
              image={AboutMeImage}
              alt="Just a coupla cool cats"
            />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" component="div" align="left" sx={{ pt: 2 }}>
            About Me
          </Typography>

          <Typography variant="h5" align="left" component="div">
            Hi! I am a Sydney based DevOps engineer, software developer and
            occasional photo clicker!
          </Typography>
          <Typography variant="body1" align="left" component="div">
            My passion for automation, containerisation and the cloud started
            when I first experienced cloudformation at Accenture, where I still
            work today! I am currently working with a team of talented, young
            engineers on architecting an enterprise-level SaaS business service
            platform as a part of the Accenture Cloud First initiative. In my
            past life, I was heavily involved in data science and analytics
            throughout my previous roles at Siemens Energy, SSI Schaefer and
            Huawei.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AboutMe;
