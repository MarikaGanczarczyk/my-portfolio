import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
const App = () => {
  const location = useLocation()


  const showNavbar = location.pathname === "/"
  return (
    <div>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <MyWork />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/project/:id" element={<ProjectCard />} />
      </Routes>
    </div>
  );
};

export default App;
