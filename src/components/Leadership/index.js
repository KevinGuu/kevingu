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
            deployment scripts in the process, thereby creating a more robust
            and highly available pipeline. Throughout the entire migration
            process, I have actively led discussions on the directions that we
            should be taking in terms of project/organisation set up, access
            patterns, pipeline design, how we can rearchitect our Helm charts
            and more. In mid-2021, I led the effort of integrating an
            application from a different department into our main app. I liaised
            with relevant stakeholders to gather the requirements for the
            integration, designed and created CD pipelines to manage the
            deployment and decommission of the third party application, as well
            as acted as the bridge between them and our core team.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Leadership;
