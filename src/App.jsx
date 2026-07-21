import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CertificationsAchievements from './components/CertificationsAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Scroll Progress Indicator
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate Loading Screen
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 border-t-primary rounded-full animate-spin"></div>
          <p className={`mt-4 font-medium font-heading text-xl animate-pulse ${darkMode ? 'text-white' : 'text-grayDark'}`}>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-grayDark dark:text-grayLight font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-100 ease-out" 
        style={{ width: scrollProgress }} 
      />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <CertificationsAchievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
