import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Teamwork = () => {
  return (
    <Container
      name="scrollToTeamwork"
      align="center"
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Grid container direction="row" maxWidth="lg" spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="div"
            align="left"
            sx={{
              color: "text.primary",
            }}
          >
            Teamwork and Service
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography
            variant="body1"
            component="div"
            align="left"
            sx={{ color: "text.primary" }}
          >
            Having worked in the retail and customer service industries for over
            three years, I understand how important it is to foster a close
            relationship with both my colleagues and clients alike. I have
            developed my communication skills to focus on being an effective
            listener, asking the right questions and trying to understand the
            other party's requirements and the pain points they are trying to
            address. Teamwork and collaboration are key components of the agile
            development methodology. Having worked with many diverse groups of
            engineers and stakeholders, I have continuously developed my ability
            to function well within small and large teams. I strive to always
            remain open-minded and respect other people's ideas and visions, in
            doing so, I help create a friendly and open environment where
            everyone's views and ideas are incorporated to achieve the best
            outcome possible.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Teamwork;
