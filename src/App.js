// App.js (updated to include hamburger menu)
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "./assets/justine.jpeg";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = (
    <>
      <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 block md:inline">About</a>
      <a href="#experience" className="hover:text-blue-500 dark:hover:text-blue-400 block md:inline">Experience</a>
      <a href="#education" className="hover:text-blue-500 dark:hover:text-blue-400 block md:inline">Education</a>
      <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 block md:inline">Skills</a>
      <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 block md:inline">Projects</a>
      <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 block md:inline">Contact</a>
    </>
  );

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">Justine Jose</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
            {navLinks}
          </nav>

          {/* Theme + Hamburger */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="text-xl hover:text-yellow-400 dark:hover:text-yellow-300">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <button onClick={toggleMenu} className="md:hidden text-xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 dark:text-gray-300 text-base font-medium">
            {navLinks}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePic} alt="Justine Jose" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-2">Hi, I'm Justine 👋</h2>
          <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
            Python Developer | Django Enthusiast | React Learner <br />
            3+ years building scalable web applications
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a passionate software developer with 3+ years of experience in Python and Django.
          I love solving real-world problems using clean, scalable code. Currently exploring React and diving into full-stack projects.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-400">Experience</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Software Developer - DRD Communications & Software Pvt. Ltd.</h3>
          <span className="text-gray-600 dark:text-gray-400 italic">August 2021 - Present</span>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Developed and maintained dynamic web applications using <strong>PHP</strong> for server-side logic.</li>
            <li>Built responsive, interactive user interfaces with <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>AJAX</strong>.</li>
            <li>Designed and implemented internal <strong>automation tools using Python</strong> to reduce manual effort in data processing and report generation.</li>
            <li>Integrated APIs and worked with JSON data structures for seamless communication with external platforms.</li>
            <li>Actively contributed to version control and code management using Git.</li>
            <li>Worked in an Agile environment, closely collaborating with cross-functional teams for requirement analysis and delivery.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-white dark:bg-gray-800 py-16 px-6 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-400">Education</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <p className="text-xl font-medium">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Amal Jyothi College of Engineering</p>
              <span className="italic">2016 - 2021</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-400">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-lg">
            {["Python", "Django", "JavaScript", "React.js", "Bootstrap", "HTML/CSS", "PHP", "SQL", "Git"].map(skill => (
              <li key={skill} className="bg-white dark:bg-gray-700 rounded-xl py-3 px-5 shadow hover:shadow-md transition">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white dark:bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "UBOSS v5 - Unified Back Office Support System",
                description: "Developed dynamic web modules using PHP, JavaScript, AJAX, and Bootstrap. Integrated third-party APIs for enhanced system operations and streamlined backend workflows. Collaborated on frontend components to improve user experience and internal process automation."
              },
              {
                title: "Zen Broadband Notification Engine",
                description: "Designed and developed a Python-based notification engine to handle real-time order updates from third-party APIs. Implemented API authentication, error handling, and retry mechanisms, improving system reliability. Optimized data parsing and processing (using requests & JSON) to improve throughput and reduce response time."
              },
              {
                title: "Job Tracker API",
                description: "A Django + PostgreSQL API for managing job applications with search, filters, and authentication."
              },
              {
                title: "Resume Screener",
                description: "A Django app that parses resumes and matches candidate skills to job descriptions using keyword logic."
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Let's connect! Reach out for collaborations or job opportunities.</p>
          <p className="text-lg font-medium mb-4">📧 justinejosepazhoor@gmail.com</p>
          <div className="flex justify-center space-x-6 text-2xl text-gray-700 dark:text-gray-300">
            <a href="https://github.com/Justine-Jose" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/justine-jose-4454491a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-8">
        © {new Date().getFullYear()} Justine Jose. All rights reserved.
      </footer>
    </div>
  );
}
