import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-grayLight dark:bg-grayDark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-grayDark rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          
          <div className="p-10 lg:p-14 bg-primary text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold font-heading mb-6">Contact Information</h3>
              <p className="text-green-100 mb-10 leading-relaxed">
                Feel free to reach out to me for any questions, collaboration opportunities, or internship offers. I am always open to discussing new projects and technologies.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:mettaramana13@gmail.com" className="flex items-center gap-4 hover:text-green-300 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={22} />
                  </div>
                  <span className="font-medium text-lg">mettaramana13@gmail.com</span>
                </a>
                <a href="tel:+919110501587" className="flex items-center gap-4 hover:text-green-300 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={22} />
                  </div>
                  <span className="font-medium text-lg">+91 9110501587</span>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={22} />
                  </div>
                  <span className="font-medium text-lg">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a href="https://github.com/mettaramana13-oss" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/metta-ramana/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="p-10 lg:p-14">
            <h3 className="text-2xl font-bold font-heading mb-8 text-grayDark dark:text-white">Send me a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none dark:text-white"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button className="btn-primary w-full shadow-lg">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
