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
            This research project is ongoing. It aims to investigate if hard
            Kubernetes multi-tenancy can be established using pod level IPTable
            rules, and if so, the rest of the project will be devoted to
            examining the level of efficacy and performance of this
            implementation compared to using a CNI plugin in addition to
            Kubernetes Networkpolicy.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Leadership;
