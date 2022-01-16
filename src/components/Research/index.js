import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Research = () => {
  return (
    <Container
      name="scrollToResearch"
      align="center"
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Grid
        container
        direction="row"
        // justifyContent="left"
        // align="left"
        maxWidth="lg"
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="div"
            align="left"
            sx={{
              color: "text.primary",
            }}
          >
            Research
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography
            variant="h4"
            component="div"
            align="left"
            sx={{ color: "text.primary", fontStyle: "italic" }}
          >
            Kubernetes Network Isolation for Multi-Tenant Software as a Service
            Platforms
          </Typography>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ color: "text.primary" }}
          >
            University of Technology, Sydney
          </Typography>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ color: "text.primary" }}
          >
            Supervisor: Yulei Sui
          </Typography>
          <Typography
            variant="body1"
            component="div"
            align="left"
            sx={{ color: "text.primary" }}
          >
            This is an ongoing research project.
          </Typography>
          <Typography
            variant="body1"
            component="div"
            align="left"
            sx={{ color: "text.primary" }}
          >
            Kubernetes is an open-source container orchestration system for
            automating software deployment, scaling, and management. By default,
            pods within Kubernetes are isolated for neither ingress nor egress.
            Multitenant applications that are hosted within the same underlying
            Kubernetes cluster will therefore have to implement network
            isolation in order to prevent malicious access attempts from each
            other. The goal of this project is to investigate the efficacy of
            implementing hard Kubernetes multi-tenancy by modifying pod level
            IPTable rules. The project will aim to examine the performance of
            this approach compared to a more established approach, which
            achieves network isolation by deploying a CNI plugin in addition to
            Kubernetes Networkpolicy.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Research;
