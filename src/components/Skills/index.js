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
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Skills = () => {
  return (
    <Container
      name="scrollToSkills"
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
          pt: 2,
          pb: 2,
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 355 }}>
            <CardHeader
              avatar={
                <IntegrationInstructionsOutlinedIcon></IntegrationInstructionsOutlinedIcon>
              }
              title=" DevOps & Platform"
            />
            <CardContent>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Industry trained DevOps engineer familiar with the following
                technologies.
              </Typography>
              <Typography variant="body1">
                {" "}
                - AWS | Docker | Kubernetes | Jenkins | Azure DevOps
              </Typography>
              <Typography variant="body1"> - Git | Linux</Typography>
              <Typography variant="body1">
                {" "}
                - Cloudformation | Ansible
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 355 }}>
            <CardHeader
              avatar={<CodeOutlinedIcon></CodeOutlinedIcon>}
              title="Programming & Scripting"
            />

            <CardContent>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Experienced software developer skillled in the following
                languages.
              </Typography>
              <Typography variant="body1"> - Python</Typography>
              <Typography variant="body1"> - Java</Typography>
              <Typography variant="body1"> - JavaScript | React</Typography>
              <Typography variant="body1"> - Shell | Bash</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 355 }}>
            <CardHeader
              avatar={<MonitorHeartOutlinedIcon></MonitorHeartOutlinedIcon>}
              title="Monitoring & Analytics"
            />

            <CardContent>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Familiar with the following business analytics & data analytics
                tools.
              </Typography>
              <Typography variant="body1"> - SQL</Typography>
              <Typography variant="body1"> - PowerBI</Typography>
              <Typography variant="body1"> - ELK Stack</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 355 }}>
            <CardHeader
              avatar={<AccountTreeOutlinedIcon></AccountTreeOutlinedIcon>}
              title="Tools & Framework"
            />

            <CardContent>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Certified Scaled Agile Framework (SAFe) practitioner well versed
                in software development methodologies and best practices.
              </Typography>
              <Typography variant="body1"> - CI/CD</Typography>
              <Typography variant="body1"> - SAFe | Agile</Typography>
              <Typography variant="body1"> - Jira | Confluence</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 355 }}>
            <CardHeader
              avatar={<LanguageOutlinedIcon></LanguageOutlinedIcon>}
              title="Trilingual"
            />

            <CardContent>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Lover of language fluent in two languages and actively learning
                two more!
              </Typography>
              <Typography variant="body1">- Native English speaker</Typography>
              <Typography variant="body1">- Native Chinese Speaker</Typography>
              <Typography variant="body1">
                {" "}
                - B2 Certified German Speaker
              </Typography>
              <Typography variant="body1"> - Learning Russian!</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 355 }}>
            <CardHeader
              avatar={<SchoolOutlinedIcon></SchoolOutlinedIcon>}
              title="Certifications"
            />

            <CardContent>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Life long learner actively pursuing industry recognised
                certifications.
              </Typography>
              <Typography variant="body1">
                - Certified SAFe® 5 Practitioner
              </Typography>
              <Typography variant="body1">
                {" "}
                - AWS Certified Solutions Architect - Associate (pursuing)
              </Typography>
              <Typography variant="body1">
                {" "}
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
