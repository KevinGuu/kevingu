import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TUBLogo from "../../static/img/tu_logo.png";
import UTSLogo from "../../static/img/uts_logo.jpeg";

const EducationExp = () => {
  return (
    <Container
      name="scrollToEducation"
      align="center"
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Grid container direction="row" maxWidth="lg" spacing={3}>
        <Grid item xs={10}>
          <Typography
            variant="h2"
            component="div"
            align="left"
            sx={{
              color: "text.primary",
            }}
          >
            Education
          </Typography>
        </Grid>

        <Grid item md={6} sx={{ display: "flex" }}>
          <Card elevation={7} sx={{ pt: 5, bgcolor: "primary.main" }}>
            <CardMedia
              component="img"
              sx={{ width: 315, height: 315 }}
              alt="UTS Logo"
              image={UTSLogo}
            />

            <CardContent>
              <Typography variant="h4" gutterBottom component="div">
                University of Technology Sydney
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Bachelor of Engineering (Honours) Software, Diploma in
                Professional Engineering Practice
              </Typography>
              <Typography variant="body1" component="div">
                Sub-major in Data Analytics with a focus on Machine Learning.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} sx={{ display: "flex" }}>
          <Card elevation={7} sx={{ pt: 5, bgcolor: "primary.main" }}>
            <CardMedia
              component="img"
              sx={{ width: 315, height: 315 }}
              alt="TUB Logo"
              image={TUBLogo}
            />

            <CardContent>
              <Typography gutterBottom component="div" variant="h4">
                Technische Universität Berlin
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Bachelor of Engineering (Honours) Software, Diploma in
                Professional Engineering Practice
              </Typography>
              <Typography variant="body1" component="div">
                Exchange year at TU Berlin. Participated in the exchange buddy
                program as well as intensive German language courses.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EducationExp;
