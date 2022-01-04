import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Grid } from "@mui/material";
const Leadership = () => {
  return (
    <Container
      name="scrollToLeadership"
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
            Leadership
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography
            variant="body1"
            component="div"
            align="left"
            sx={{ color: "text.primary" }}
          >
            I am currently leading the effort of migrating our team's CI/CD
            platform from Jenkins to Azure DevOps. I have taken majority
            ownership of the migration process and have personally scoped out
            the requirements, pain points and gotchas. I created a
            proof-of-concept deployment pipeline and refactored a few essential
            deployment scripts in the process.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Leadership;
