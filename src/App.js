import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "./assets/justine.jpeg";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-blue-600">Justine Jose</h1>
          <nav className="space-x-6 text-gray-700 text-sm md:text-base font-medium">
            <a href="#about" className="hover:text-blue-500">About</a>
             <a href="#experience" className="hover:text-blue-500">Experience</a>
            <a href="#education" className="hover:text-blue-500">Education</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePic} alt="Justine Jose" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Hi, I'm Justine 👋</h2>
          <p className="text-lg max-w-xl mx-auto text-gray-700">
            Python Developer | Django Enthusiast | React Learner <br />
            3+ years building scalable web applications
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I'm a passionate software developer with 3+ years of experience in Python and Django.
          I love solving real-world problems using clean, scalable code. Currently exploring React and diving into full-stack projects.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Experience</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800">Software Developer - DRD Communications & Software Pvt. Ltd.</h3>
          <span className="text-gray-600 italic">August 2021 - Present</span>
          <ul className="list-disc list-inside mt-2 text-gray-700">
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
      <section id="education" className="bg-white py-16 px-6 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Education</h2>
          <ul className="space-y-6 text-gray-700">
            <li>
              <p className="text-xl font-medium">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-gray-500">Amal Jyothi College of Engineering</p>
              <span className="italic">2016- 2021</span>
            </li>
            {/* <li>
              <p className="text-xl font-medium">Higher Secondary - Computer Science</p>
              <p className="text-sm text-gray-500">Kerala State Board - 2014</p>
            </li> */}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-lg">
            {["Python", "Django", "JavaScript", "React.js", "Bootstrap", "HTML/CSS", "PHP", "SQL", "Git"].map(skill => (
              <li key={skill} className="bg-white rounded-xl py-3 px-5 shadow hover:shadow-md transition">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Projects</h2>
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
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Contact</h2>
          <p className="text-gray-700 mb-4">Let's connect! Reach out for collaborations or job opportunities.</p>
          <p className="text-lg font-medium mb-4">📧 justinejosepazhoor@gmail.com</p>
          <div className="flex justify-center space-x-6 text-2xl text-gray-700">
            <a href="https://github.com/Justine-Jose" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/justine-jose-4454491a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t bg-white mt-8">
        © {new Date().getFullYear()} Justine Jose. All rights reserved.
      </footer>
    </div>
  );
}
