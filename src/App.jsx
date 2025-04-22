
import "./App.css";
import Nav from "./components/nav";
import Head from "./components/head";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return <>
  <div className="bg-gradient-to-br from-orange-50 to-ivory-100 min-h-screen">
  <div className="bg-gradient-to-br from-orange-50 to-ivory-100 min-h-screen pt-16">
      <Nav />
      <div id="head">
        <Head />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  </div>
  </>;
}

export default App;
