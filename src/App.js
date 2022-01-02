import AboutMe from "./components/AboutMe";
import EducationExp from "./components/EducationExp";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <EducationExp />
      <Research />
      <Leadership />
    </div>
  );
}

export default App;
