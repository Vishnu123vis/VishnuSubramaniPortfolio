'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaExternalLinkAlt,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram
} from 'react-icons/fa';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setShowScrollTop(winScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vishnu Subramani
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h1>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Hi! I&apos;m Vishnu, a first-year{' '}
                    <a 
                      href="https://uwaterloo.ca/management-sciences/management-engineering" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-pink-400 transition-colors duration-200 underline decoration-purple-400/50 hover:decoration-pink-400/50"
                    >
                      Management Engineering
                    </a>{' '}
                    student at the University of Waterloo, passionate about creating solutions within the intersection of people and technology.
                  </p>
                  <p>
                    When I&apos;m not coding or studying, you&apos;ll probably find me playing basketball, jamming on my saxophone with some jazz tunes, or spending time with my family.
                  </p>
                  <p>
                    I&apos;m always looking for opportunities to grow and work on exciting projects. Feel free to reach out—let&apos;s connect and build something great together!
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/vishnu-subramani-a9391625a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-110"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:v5subram@uwaterloo.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-200 transform hover:scale-110"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Vishnu123vis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full hover:from-gray-500 hover:to-gray-600 transition-all duration-200 transform hover:scale-110"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <Image
                  src="/vishnuwebsitepicture.jpg"
                  alt="Vishnu Subramani"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <FaBriefcase className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-purple-400">MarTechBees</h3>
                </div>
                <p className="text-pink-400 font-semibold mb-2">Software Developer Intern</p>
                <p className="text-gray-400 mb-4">Summer 2024</p>
                <p className="text-gray-300 mb-4">
                  Developed a serverless property management app using AWS, integrating Stripe for payments and DynamoDB for data storage. Built dynamic React components with Recharts to enhance user experience and visualize key metrics.
                </p>
                <a 
                  href="https://martechbees.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Visit MarTechBees <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <FaCode className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-purple-400">Code Ninjas</h3>
                </div>
                <p className="text-pink-400 font-semibold mb-2">Code Instructor</p>
                <p className="text-gray-400 mb-4">Summer 2023</p>
                <p className="text-gray-300 mb-4">
                  Led summer camps teaching coding, robotics, and 3D printing while enhancing the curriculum with advanced lessons for high-performing students.
                </p>
                <a 
                  href="https://www.codeninjas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Visit Code Ninjas <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Extracurricular/Leadership
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <FaProjectDiagram className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-400">UW Blueprint</h3>
                </div>
                <p className="text-pink-400 font-semibold mb-2">VP Finance and Operations</p>
                <p className="text-gray-400 mb-4">Nov 2024 – Present</p>
                <p className="text-gray-300">
                  As VP Finance & Operations, I focus on securing sponsorships and partnerships to fund tech-driven non-profits and initiatives. I also manage the club&apos;s finances by organizing budgets, handling reimbursements, and ensuring smooth financial operations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-400">WEEF</h3>
                </div>
                <p className="text-pink-400 font-semibold mb-2">Management Engineering Class Representative</p>
                <p className="text-gray-400 mb-4">Sep 2024 – Present</p>
                <p className="text-gray-300">
                  Allocated funds to design teams, secured additional resources for Management Engineering, and aligned initiatives with institutional goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a 
                href="https://github.com/Vishnu123vis/VishnuSubramaniPortfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-200">
                  Portfolio Website
                </h3>
                <p className="text-pink-400 font-semibold mb-4">Next.js, TypeScript, Tailwind CSS</p>
                <p className="text-gray-300">
                  My Portfolio website is what you are looking at right now! Built with modern web technologies for a sleek, responsive experience.
                </p>
              </a>

              <a 
                href="https://github.com/Vishnu123vis/Video-Game-Menu-System" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-200">
                  Video Game Filtering Application
                </h3>
                <p className="text-pink-400 font-semibold mb-4">Python, CSV</p>
                <p className="text-gray-300">
                  Built a Python app to filter and search games by genre, ESRB rating, playtime, Metacritic scores, and user preferences using CSV datasets.
                </p>
              </a>

              <a 
                href="https://github.com/Vishnu123vis/Time-Management-Decision-Support-System" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-200">
                  Time Management Decision Support System
                </h3>
                <p className="text-pink-400 font-semibold mb-4">Excel VBA</p>
                <p className="text-gray-300">
                  Designed a system with personalized schedules, task tracking, and automated scheduling, boosting productivity and reducing manual effort.
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 Vishnu Subramani. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-400 hover:to-pink-400 transition-all duration-200 transform hover:scale-110 z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}