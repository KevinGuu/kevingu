import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Skills = () => {
  return (
    <Container
      name="scrollToSkills"
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
            Skills
          </Typography>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card
            elevation={7}
            sx={{
              maxWidth: 355,
              bgcolor: "primary.dark",
            }}
          >
            <CardHeader
              avatar={
                <IntegrationInstructionsOutlinedIcon></IntegrationInstructionsOutlinedIcon>
              }
              title=" DevOps"
              titleTypographyProps={{ variant: "h6", align: "left" }}
            />
            <CardContent>
              <Typography
                variant="body1"
                align="left"
                gutterBottom
                sx={{ color: "text.primary" }}
              >
                Industry trained DevOps engineer familiar with the following
                technologies.
              </Typography>
              <Typography variant="body1" align="left">
                - AWS | Docker | Kubernetes | Jenkins | Azure DevOps
              </Typography>
              <Typography variant="body1" align="left">
                {" "}
                - Git | Linux
              </Typography>
              <Typography variant="body1" align="left">
                {" "}
                - Cloudformation | Ansible
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card
            elevation={7}
            sx={{
              maxWidth: 355,
              bgcolor: "primary.dark",
            }}
          >
            <CardHeader
              avatar={<CodeOutlinedIcon></CodeOutlinedIcon>}
              title="Programming"
              titleTypographyProps={{ variant: "h6", align: "left" }}
            />

            <CardContent>
              <Typography variant="body1" align="left" gutterBottom>
                Experienced software developer skillled in the following
                languages.
              </Typography>
              <Typography variant="body1" align="left">
                - Python
              </Typography>
              <Typography variant="body1" align="left">
                - Java
              </Typography>
              <Typography variant="body1" align="left">
                - JavaScript | React
              </Typography>
              <Typography variant="body1" align="left">
                - Shell | Bash
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card
            elevation={7}
            sx={{
              maxWidth: 355,
              bgcolor: "primary.dark",
            }}
          >
            <CardHeader
              avatar={<MonitorHeartOutlinedIcon></MonitorHeartOutlinedIcon>}
              title="Monitoring & Analytics"
              titleTypographyProps={{ variant: "h6", align: "left" }}
            />

            <CardContent>
              <Typography variant="body1" align="left" gutterBottom>
                Familiar with the following business analytics & data analytics
                tools.
              </Typography>
              <Typography variant="body1" align="left">
                - SQL
              </Typography>
              <Typography variant="body1" align="left">
                - PowerBI
              </Typography>
              <Typography variant="body1" align="left">
                - ELK Stack
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card
            elevation={7}
            sx={{
              maxWidth: 355,
              bgcolor: "primary.dark",
            }}
          >
            <CardHeader
              avatar={<AccountTreeOutlinedIcon></AccountTreeOutlinedIcon>}
              title="Tools & Framework"
              titleTypographyProps={{ variant: "h6", align: "left" }}
            />

            <CardContent>
              <Typography variant="body1" align="left" gutterBottom>
                Certified Scaled Agile Framework (SAFe) practitioner well versed
                in software development methodologies and best practices.
              </Typography>
              <Typography variant="body1" align="left">
                - CI/CD
              </Typography>
              <Typography variant="body1" align="left">
                - SAFe | Agile
              </Typography>
              <Typography variant="body1" align="left">
                - Jira | Confluence
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card
            elevation={7}
            sx={{
              maxWidth: 355,
              bgcolor: "primary.dark",
            }}
          >
            <CardHeader
              avatar={<LanguageOutlinedIcon></LanguageOutlinedIcon>}
              title="Trilingual"
              titleTypographyProps={{ variant: "h6", align: "left" }}
            />

            <CardContent>
              <Typography variant="body1" align="left" gutterBottom>
                Lover of language fluent in two languages and actively learning
                two more!
              </Typography>
              <Typography variant="body1" align="left">
                - Native English speaker
              </Typography>
              <Typography variant="body1" align="left">
                - Native Chinese Speaker
              </Typography>
              <Typography variant="body1" align="left">
                - B2 Certified German Speaker
              </Typography>
              <Typography variant="body1" align="left">
                - Learning Russian!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card
            elevation={7}
            sx={{
              maxWidth: 355,
              bgcolor: "primary.dark",
            }}
          >
            <CardHeader
              avatar={<SchoolOutlinedIcon></SchoolOutlinedIcon>}
              title="Certifications"
              titleTypographyProps={{ variant: "h6", align: "left" }}
            />

            <CardContent>
              <Typography variant="body1" align="left" gutterBottom>
                Life long learner actively pursuing industry recognised
                certifications.
              </Typography>
              <Typography variant="body1" align="left">
                - Certified SAFe® 5 Practitioner
              </Typography>
              <Typography variant="body1" align="left">
                - AWS Certified Solutions Architect - Associate
              </Typography>
              <Typography variant="body1" align="left">
                - Certified Kubernetes Admin (pursuing)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
