import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useTypewriter from './hooks/useTypewriter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  const texts = [
    "Sudip Kotal",
    "Software Developer",
    "AI & ML Enthusiast"
  ];
  const typewriterText = useTypewriter(texts, 50, 2000);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionTop = homeSection.getBoundingClientRect().top;
        setShowScrollButton(homeSectionTop < -100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-blue-100 dark:bg-gray-900 dark:text-white transition duration-500">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          navOpen={navOpen} 
          setNavOpen={setNavOpen} 
        />
        
        {/* Add padding to the top of the main content to account for fixed navbar */}
        <div className="pt-20">
          <Home typewriterText={typewriterText} />
          <About />
          
          {/* Skills and Projects */}
          <section className="mt-12 flex flex-col justify-center items-center gap-12 w-full px-8" id="skills-projects">
            <Skills />
            <Projects />
          </section>

          {/* Add spacing before footer */}
          <div className="py-16"></div>

          <ScrollToTop showScrollButton={showScrollButton} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
