import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Research = () => {
  return (
    <Container name="scrollToResearch" sx={{ pt: 5, pb: 5 }}>
      <Typography
        variant="h2"
        component="div"
        sx={{
          pb: 2,
        }}
      >
        Research
      </Typography>
      <Typography variant="h5" component="div" sx={{ fontStyle: "italic" }}>
        Kubernetes Network Isolation for Multi-Tenant Software as a Service
        Platforms
      </Typography>
      <Typography variant="subtitle1" component="div">
        University of Technology, Sydney
      </Typography>
      <Typography variant="subtitle1" component="div">
        Supervisor: Yulei Sui
      </Typography>
    </Container>
  );
};

export default Research;
