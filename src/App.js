import React from "react";
import "./index.css";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import AvailableForWork from "./components/portfolio/AvailableForWork";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function App() {
  return (
    <div className="bg-[#0a0f1e] min-h-screen text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AvailableForWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
