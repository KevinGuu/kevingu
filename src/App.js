import { ThemeProvider } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
import EducationExp from "./components/EducationExp";
import Experience from "./components/Experience";
import FooterNav from "./components/FooterNav";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Teamwork from "./components/Teamwork";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <EducationExp />
        <Research />
        <Leadership />
        <Teamwork />
        <FooterNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
