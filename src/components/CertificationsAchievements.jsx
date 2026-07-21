import { motion } from 'framer-motion';
import { Award, Star, Target, Lightbulb } from 'lucide-react';

const CertificationsAchievements = () => {
  const certifications = [
    "IoT Internship Certificate – AMBER ELECTRONICS",
    "AI & Machine Learning Internship Certificate",
    "Merit Certificate (Project Expo)"
  ];

  const achievements = [
    "Participated in Project Expo",
    "Received Merit Certificate for Project Presentation",
    "Built multiple Machine Learning and Embedded Systems based projects",
    "Continuously learning Artificial Intelligence, Machine Learning, Embedded Systems, and Web Development"
  ];

  const areasOfInterest = [
    "Artificial Intelligence", "Machine Learning", "Embedded Systems", "Web Development"
  ];

  const technicalStrengths = [
    "Problem Solving", "Logical Thinking", "Team Collaboration", 
    "Continuous Learning", "Innovation", "Software Development"
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
              <Award className="text-primary w-8 h-8" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0"></div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
              <Star className="text-primary w-8 h-8" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achieve, i) => (
                <div key={i} className="bg-white/50 dark:bg-grayDark/50 p-5 rounded-2xl flex items-start gap-4 border border-gray-100 dark:border-gray-800">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{achieve}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
           <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="text-primary" />
              Areas of Interest
            </h3>
            <div className="flex flex-wrap gap-4">
              {areasOfInterest.map((tag, i) => (
                <span key={i} className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-full font-medium text-primary dark:text-green-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="text-primary" />
              Technical Strengths
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalStrengths.map((str, i) => (
                <div key={i} className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-center font-medium text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
                  {str}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass-card p-10 rounded-3xl text-center max-w-4xl mx-auto border-t-4 border-t-primary"
        >
          <h2 className="text-2xl font-bold font-heading mb-6">Career Objective</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
            "To secure a challenging role in Artificial Intelligence, Machine Learning, Embedded Systems, and Web Development where I can apply my technical knowledge, continuously learn emerging technologies, and contribute to innovative product development while solving real-world problems."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsAchievements;
