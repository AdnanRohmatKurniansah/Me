"use client"

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LoadingBar from "./components/LoadingBar";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <>
          <div className="absolute">
            <Background darkMode={darkMode}/>
          </div>
          <div className="relative ">
            <Navbar darkMode={darkMode} toggleMode={toggleMode}/>
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Project darkMode={darkMode} />
            <Contact darkMode={darkMode}/>
            <Footer darkMode={darkMode} />
          </div>
        </>
      )}
    </>
  );
}
