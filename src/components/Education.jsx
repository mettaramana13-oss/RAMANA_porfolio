import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech Electronics and Communication Engineering",
      institution: "QIS College of Engineering and Technology, Ongole",
      status: "Currently Pursuing",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "State Board of Technical Education and Training",
      status: "CGPA: 70.93%",
      icon: <BookOpen size={24} />
    },
    {
      degree: "SSC",
      institution: "Government High School, Jarjangi",
      status: "Percentage: 70%",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education Journey
        </motion.h2>

        <div className="mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-grayDark bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.icon}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-heading text-grayDark dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-primary dark:text-green-400 font-medium">{item.institution}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 w-fit">
                    {item.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
