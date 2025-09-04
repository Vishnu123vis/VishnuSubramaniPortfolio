'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const getCompanyIcon = (company: string) => {
    switch (company) {
      case 'Serverless Guru':
        return '☁️';
      case 'TEDxUW':
        return '🎤';
      case 'MarTechBees':
        return '🐝';
      case 'Code Ninjas':
        return '🥋';
      default:
        return '💼';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and the impact I&apos;ve made across different roles and industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-purple-400 to-pink-200 transform -translate-x-1/2 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-0' : 'lg:pl-1/2 lg:pr-0'}`}
            >
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 z-10 items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{getCompanyIcon(exp.company)}</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-xl font-semibold text-purple-100">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-purple-100">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mt-0.5 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-200">
                              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            </div>
                            <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && (
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200 hover:from-purple-100 hover:to-pink-100 hover:border-purple-300 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
