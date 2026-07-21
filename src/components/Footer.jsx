import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-grayDark border-t border-gray-200 dark:border-gray-800 py-12 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold font-heading text-primary dark:text-green-400 mb-2">
          METTA VENKATA RAMANA
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          B.Tech ECE Student | AI/ML, Embedded Systems & Web Development Enthusiast
        </p>

        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-8"></div>
        
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          © 2026 METTA VENKATA RAMANA. All rights reserved.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
          Designed & Developed by METTA VENKATA RAMANA
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-accent transition-all duration-300 z-50 transform ${
          showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
