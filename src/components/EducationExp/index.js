import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TUBLogo from "../../static/img/tu_logo.png";
import UTSLogo from "../../static/img/uts_logo.jpeg";

const EducationExp = () => {
  return (
    <Container
      name="scrollToEducation"
      sx={{
        pt: 5,
        pb: 5,
        // bgcolor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h2"
        component="div"
        align="left"
        sx={{
          pb: 2,
        }}
      >
        Education
      </Typography>

      <Grid container spacing={5}>
        <Grid item md={6} sx={{ display: "flex" }}>
          <Card>
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
              <Typography
                variant="body1"
                component="div"
                color="text.secondary"
              >
                Sub-major in Data Analytics with a focus on Machine Learning.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} sx={{ display: "flex" }}>
          <Card>
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
              <Typography
                variant="body1"
                component="div"
                color="text.secondary"
              >
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
