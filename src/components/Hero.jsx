import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ExternalLink, Mail, ArrowDown } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Particles/Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-light dark:bg-dark">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 flex flex-col items-start"
        >
          <span className="text-primary dark:text-green-400 font-semibold tracking-wider uppercase mb-2">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-4 text-grayDark dark:text-white">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-primary">METTA VENKATA RAMANA</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-16 md:h-8">
            <TypeAnimation
              sequence={[
                'B.Tech ECE Student',
                1500,
                'Machine Learning Enthusiast',
                1500,
                'Embedded Systems Developer',
                1500,
                'Web Development Enthusiast',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
            "I am a B.Tech Electronics and Communication Engineering (ECE) student passionate about Machine Learning, Artificial Intelligence, Embedded Systems, and Web Development. I enjoy building intelligent applications, embedded solutions, and modern web applications that solve real-world problems while continuously learning emerging technologies."
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="btn-primary">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-5">
            <SocialLink href="https://github.com/mettaramana13-oss" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/metta-ramana/" icon={<Linkedin />} />
            <SocialLink href="mailto:mettaramana13@gmail.com" icon={<Mail />} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-green-400 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            <div className="absolute inset-2 bg-gradient-to-bl from-primary to-green-300 rounded-full opacity-60"></div>
            <img 
              src="/passport size photo RAMANA.png" 
              alt="Metta Venkata Ramana" 
              className="absolute inset-4 object-cover rounded-[50%] grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-4 border-white dark:border-grayDark"
            />
          </div>
        </motion.div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary dark:text-white hover:text-green-600 dark:hover:text-primary transition-colors">
        <ArrowDown className="w-8 h-8" />
      </a>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 transform"
  >
    {icon}
  </a>
);

export default Hero;
