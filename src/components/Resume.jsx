import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Download, ExternalLink, GraduationCap, Award, Mail } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const floatingVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const floatingHorizontalVariants = {
  float: {
    x: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const rotateVariants = {
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const buttonVariants = {
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
};

export default function ResumeComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const viewResume = () => window.open("#resume-link", "_blank");
  const downloadResume = () => console.log("Downloading resume PDF...");

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="w-64 h-64 rounded-full bg-blue-400 blur-3xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="w-64 h-64 rounded-full bg-purple-400 blur-3xl"
        />
      </div>

      {/* Extra background shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 rounded-md bg-blue-200 opacity-20 -z-10"
        variants={rotateVariants}
        animate="rotate"
      />
      <motion.div 
        className="absolute bottom-32 left-24 w-24 h-24 rounded-full border-2 border-purple-300 opacity-20 -z-10"
        variants={pulseVariants}
        animate="pulse"
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-yellow-200 opacity-30 -z-10"
        variants={floatingHorizontalVariants}
        animate="float"
      />
      <motion.div 
        className="absolute top-3/4 right-1/2 w-6 h-6 rotate-45 bg-green-300 opacity-20 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-blue-400 rounded-lg opacity-20 -z-10"
        variants={pulseVariants}
        animate="pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <motion.div 
          className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                <FileText size={48} />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">Bhoomi Garg</h2>
            <p className="text-lg mb-6 text-center opacity-90">Computer Science Student</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>gargbhoomi01@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 pt-6 border-t border-white/20"
            variants={itemVariants}
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Award size={18} />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", 
                "C++", "Python", "IOT", "Data Structures and Algorithms", 
                "Problem Solving", "Computer Networking", "Git", "OOPS"
              ].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full">{skill}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="w-full md:w-3/5 p-8"
          variants={itemVariants}
        >
          <motion.h1 className="text-3xl font-bold mb-2 text-gray-800" variants={itemVariants}>
            Professional Resume
          </motion.h1>
          <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
            Interactive preview of my qualifications and experience
          </motion.p>

          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
            </div>

            <div className="border-l-2 border-blue-600 pl-4 mb-6">
              <h3 className="font-semibold text-gray-800">
                Madhav Institute of Technology and Science, Gwalior
              </h3><br/>
              <p className="text-sm text-gray-600">
                B.Tech in Computer Science and Design
              </p>
              <p className="text-sm text-gray-600">
                Semester 6 
              </p>
              <p className="text-sm text-gray-600">
                Graduating: 2026
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Current CGPA: 8.95 (Highest in class)
              </p>
            </div>

            <div className="border-l-2 border-gray-300 pl-4">
              <h3 className="font-semibold text-gray-800">Class 12th - CBSE</h3><br/>
              <p className="text-sm text-gray-600">Percentage: 93.6% </p>
              <p className="text-sm text-gray-600">Year: 2021</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-4 mt-10"
            variants={itemVariants}
          >
            <motion.button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={viewResume}
            >
              <ExternalLink size={18} />
              View Resume Online
            </motion.button>

            <motion.button
              className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={downloadResume}
            >
              <Download size={18} />
              Download as PDF
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-blue-400 opacity-30 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '0.5s' }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-purple-400 opacity-30 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '1s' }}
      />
      <motion.div 
        className="absolute top-2/3 right-1/3 w-8 h-8 rounded-full bg-blue-300 opacity-30 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '1.5s' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-5 h-5 rotate-45 bg-pink-300 opacity-30 -z-10"
        variants={floatingHorizontalVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      />
    </motion.div>
  );
}
