import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Leadership = () => {
  return (
    <Container
      name="scrollToLeadership"
      sx={{
        pt: 5,
        pb: 5,
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
        Leadership
      </Typography>
      <Typography
        variant="body1"
        component="div"
        align="left"
        sx={{ fontStyle: "italic" }}
      >
        "The set of characteristics that make a good leader."
      </Typography>
    </Container>
  );
};

export default Leadership;
