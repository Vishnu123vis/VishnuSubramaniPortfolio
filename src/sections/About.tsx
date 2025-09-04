'use client';

import { motion } from 'framer-motion';
import { education } from '../data/education';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer and engineering student focused on building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a first-year Management Engineering student at the University of Waterloo, 
              passionate about creating solutions at the intersection of people and technology. 
              Whether it&apos;s software, data, or product-related projects, I&apos;m excited to learn and make an impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not coding or studying, you&apos;ll probably find me playing basketball, 
              jamming on my saxophone with some jazz tunes, or spending time with my family. 
              I love balancing my time between hobbies, school, and new challenges!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m always looking for opportunities to grow and work on exciting projects. 
              Feel free to reach out—let&apos;s connect and build something great together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {education.degree}
                </h4>
                <p className="text-gray-600">{education.school}</p>
                <p className="text-gray-600">{education.graduationYear}</p>
                <p className="text-purple-600 font-semibold">GPA: {education.gpa}</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Awards & Scholarships</h5>
                <ul className="space-y-1">
                  {education.awards.map((award, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
