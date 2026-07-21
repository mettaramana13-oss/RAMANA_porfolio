import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Smart Belt",
      domain: "Embedded Systems | IoT | Smart Safety",
      description: "Designed and developed an intelligent Smart Belt system focused on enhancing personal safety and real-time monitoring using Embedded Systems, IoT technologies, and intelligent automation. The project demonstrates practical applications of hardware integration and smart monitoring systems.",
      tags: ["Embedded Systems", "IoT", "Sensors", "Automation"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Smart Classroom Head Count Monitoring System",
      domain: "Machine Learning | Embedded Systems | Computer Vision",
      description: "Developed an intelligent classroom monitoring system capable of automatically detecting the number of students entering the classroom. The system sends alerts and improves attendance monitoring through camera-based counting.",
      tags: ["Machine Learning", "ESP32-CAM", "Computer Vision", "SMS Alert System"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-grayDark rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all z-10 duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary dark:text-green-400 font-medium text-sm mb-3">
                  <Layers size={16} />
                  {project.domain}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-grayDark dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors font-medium">
                    <Github size={18} />
                    Code
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white hover:bg-accent transition-colors shadow-md hover:shadow-lg font-medium">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
