import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "IoT Intern",
      organization: "AMBER ELECTRONICS",
      description: "Worked on IoT and Embedded Systems applications involving sensors, embedded hardware, communication modules, and real-time hardware integration."
    },
    {
      role: "AI & Machine Learning Internship",
      organization: "Various Platforms",
      description: "Successfully completed an AI & Machine Learning internship involving practical implementation of machine learning algorithms, data preprocessing, model building, and real-world applications."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-grayLight dark:bg-grayDark/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Internship Experience
        </motion.h2>

        <div className="mt-16 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start border-l-4 border-l-primary hover:border-l-green-400 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-grayDark dark:text-white mb-2">
                  {exp.role}
                </h3>
                <p className="text-primary dark:text-green-400 font-medium mb-4">{exp.organization}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
