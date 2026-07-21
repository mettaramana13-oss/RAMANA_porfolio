import { motion } from 'framer-motion';
import { User, Cpu, Code, Brain } from 'lucide-react';

const About = () => {
  const cards = [
    { title: "AI & ML", icon: <Brain size={24} />, description: "Training models and utilizing data." },
    { title: "Embedded Systems", icon: <Cpu size={24} />, description: "Hardware integration & IoT." },
    { title: "Web Dev", icon: <Code size={24} />, description: "Modern responsive web apps." },
  ];

  return (
    <section id="about" className="py-20 bg-grayLight dark:bg-grayDark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 mt-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass-card p-8 relative">
              <div className="absolute -top-6 -left-6 bg-primary text-white p-4 rounded-2xl shadow-lg">
                <User size={32} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
                Hello! I'm <strong>METTA VENKATA RAMANA</strong>, a passionate Electronics and Communication Engineering student with a strong interest in Machine Learning, Artificial Intelligence, Embedded Systems, and Web Development.
              </p>
              <br />
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I enjoy solving real-world problems by combining AI technologies, embedded systems, and modern web applications. My goal is to become a skilled AI/ML Engineer and Software Developer capable of building innovative intelligent products that positively impact society.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary dark:hover:border-primary transition-all duration-300 group">
                <div className="bg-green-50 dark:bg-gray-700 text-primary dark:text-green-400 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-grayDark dark:text-white">{card.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
