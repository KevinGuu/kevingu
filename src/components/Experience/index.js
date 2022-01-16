import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import AccentureLogo from "../../static/img/accenture_logo.jpeg";
import HuaweiLogo from "../../static/img/huawei_logo.jpeg";
import SiemensLogo from "../../static/img/siemens_logo.png";
import SSILogo from "../../static/img/ssi_logo.png";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const DisplayedProfExpCard = (props) => {
    switch (props.index) {
      case 0:
        return (
          <Card
            elevation={7}
            sx={{
              width: "100%",
              bgcolor: "primary.dark",
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" align="left">
                Accenture
              </Typography>
              {/* <Divider variant="fullWidth" light></Divider> */}
              <Typography variant="subtitle1" component="div" align="left">
                DevOps & Platform Engineer - Advanced App Engineering Senior
                Analyst
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                sx={{ fontStyle: "italic" }}
                align="left"
              >
                Sydney, Australia
              </Typography>

              <Typography variant="body1" component="div" align="left">
                - Creating enterprise level, multi-tenant SaaS platforms using
                AWS, Kubernetes, Docker, Cloudformation, Ansible, Python and
                Bash.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Managing and architecting the migration of CI/CD pipelines
                from Jenkins to Azure DevOps.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Maintaining and troubleshooting SaaS based business service
                use cases to support internal and client teams.
              </Typography>
            </CardContent>
          </Card>
        );
      case 1:
        return (
          <Card
            elevation={7}
            sx={{
              width: "100%",
              bgcolor: "primary.dark",
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" align="left">
                Siemens Energy
              </Typography>

              <Typography variant="subtitle1" component="div" align="left">
                Data Scientist
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                sx={{ fontStyle: "italic" }}
                align="left"
              >
                Berlin, Germany
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Forecasted various energy market metrics including power
                demand, price and production using machine learning techniques.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Created visualisation dashboards and analyses using internal
                tools (in addition to Excel and Tableau) to deliver better
                insights and data discoveries.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Staged, pre-processed, manipulated datasets and performed
                other database related ETL tasks.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Ran assumption models to optimise installed generation fleet
                by fuel type for specific EU countries.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Researched and analysed fuel prices and power demand forecasts
                to help make better marketing decisions.
              </Typography>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card
            elevation={7}
            sx={{
              width: "100%",
              bgcolor: "primary.dark",
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" align="left">
                SSI Schaefer
              </Typography>

              <Typography variant="subtitle1" component="div" align="left">
                Software Engineer
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                sx={{ fontStyle: "italic" }}
                align="left"
              >
                Sydney, Australia
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Owned and designed the web-based platform of the in-house
                logistics management software, enabling on-the-run monitoring of
                the conveyingpipeline.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Automated company-wide performance reports on operators
                improving analytical efficiency. Generated ad-hoc reports and
                dashboards based on client requirements.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Worked with cross-functional teams to gather requirements
                needed to improve existing features and flesh out
                documentations.
              </Typography>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card
            elevation={7}
            sx={{
              width: "100%",
              bgcolor: "primary.dark",
            }}
          >
            <Box>
              <CardContent>
                <Typography variant="h4" component="div" align="left">
                  Huawei
                </Typography>

                <Typography variant="subtitle1" component="div" align="left">
                  Software Engineer
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  gutterBottom
                  sx={{ fontStyle: "italic" }}
                  align="left"
                >
                  Sydney, Australia
                </Typography>
                <Typography variant="body1" component="div" align="left">
                  - Automated company-wide weekly & monthly performance reports
                  with custom calculation metrics (Power BI).
                </Typography>
                <Typography variant="body1" component="div" align="left">
                  - Designed and created an issue tracking & handling platform
                  using Huawei’s Operation Web Services (OWS) that improved
                  departmental efficiency.
                </Typography>
                <Typography variant="body1" component="div" align="left">
                  - Analysed external contractor performance, verified and
                  managedExceldata sources usingVBA.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        );
      default:
        return (
          <Card
            elevation={7}
            sx={{
              width: "100%",
              bgcolor: "primary.dark",
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" align="left">
                Accenture
              </Typography>
              {/* <Divider></Divider> */}
              <Typography variant="subtitle1" component="div" align="left">
                DevOps & Platform Engineer - Advanced App Engineering Senior
                Analyst
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                sx={{ fontStyle: "italic" }}
                align="left"
              >
                Sydney, Australia
              </Typography>

              <Typography variant="body1" component="div" align="left">
                - Creating enterprise level, multi-tenant SaaS platforms using
                AWS, Kubernetes, Docker, Cloudformation, Ansible, Python and
                Bash.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Managing and architecting the migration of CI/CD pipelines
                from Jenkins to Azure DevOps.
              </Typography>
              <Typography variant="body1" component="div" align="left">
                - Maintaining and troubleshooting SaaS based business service
                use cases to support internal and client teams.
              </Typography>
            </CardContent>
          </Card>
        );
    }
  };

  const handleOnClickListItem = (index) => (e) => {
    setSelectedIndex(index);
  };

  return (
    <Container
      name="scrollToExperience"
      align="center"
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Grid container direction="row" maxWidth="lg">
        <Grid item xs={10}>
          <Typography
            variant="h2"
            component="div"
            align="left"
            sx={{
              color: "text.primary",
            }}
          >
            Experience
          </Typography>
        </Grid>
        <Grid container md={3}>
          <Card
            elevation={1}
            sx={{
              bgcolor: "primary.dark",
              width: "100%",
            }}
          >
            <List
              sx={{
                // selected and (selected + hover) states
                "&& .Mui-selected, && .Mui-selected:hover": {
                  bgcolor: "secondary.main",
                  "&, & .MuiListItemIcon-root": {
                    color: "secondary.main",
                  },
                },
                // hover states
                "& .MuiListItemButton-root:hover": {
                  bgcolor: "secondary.dark",
                  "&, & .MuiListItemIcon-root": {
                    color: "yellow",
                  },
                },
              }}
            >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={handleOnClickListItem(0)}
              >
                <ListItemIcon>
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50 }}
                    alt="Accenture logo"
                    image={AccentureLogo}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Accenture"
                  secondary="Mar 2021 - Present"
                  primaryTypographyProps={{
                    variant: "h6",
                    align: "left",
                    color: "text.primary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    align: "left",
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
              <Divider variant="middle" light component="li" />
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={handleOnClickListItem(1)}
              >
                <ListItemIcon>
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50 }}
                    alt="Siemens"
                    image={SiemensLogo}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Siemens Energy"
                  secondary="June 2020 - Dec 2020"
                  primaryTypographyProps={{
                    variant: "h6",
                    align: "left",
                    color: "text.primary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    align: "left",
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
              <Divider variant="inset" component="li" />
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={handleOnClickListItem(2)}
              >
                <ListItemIcon>
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50 }}
                    alt="SSI Logo"
                    image={SSILogo}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="SSI Schaefer"
                  secondary="July 2018 - Jan 2019"
                  primaryTypographyProps={{
                    variant: "h6",
                    align: "left",
                    color: "text.primary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    align: "left",
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
              <Divider variant="inset" component="li" />
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={handleOnClickListItem(3)}
              >
                <ListItemIcon>
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50 }}
                    alt="Huawei Logo"
                    image={HuaweiLogo}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Huawei"
                  secondary="Aug 2017 - Jan 2018"
                  primaryTypographyProps={{
                    variant: "h6",
                    align: "left",
                    color: "text.primary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    align: "left",
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
            </List>
          </Card>
        </Grid>
        <Grid container md={8}>
          <DisplayedProfExpCard index={selectedIndex} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
