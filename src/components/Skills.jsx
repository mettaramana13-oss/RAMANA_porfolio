import { motion } from 'framer-motion';

const Skills = () => {
  const languages = ["Python", "C", "Java"];
  const coreSkills = [
    "Machine Learning", 
    "Artificial Intelligence", 
    "Embedded Systems", 
    "Web Development", 
    "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20 bg-grayLight dark:bg-grayDark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{'</>'}</span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-200 hover:border-primary dark:hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">⚙️</span>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {coreSkills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary hover:border-transparent transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
