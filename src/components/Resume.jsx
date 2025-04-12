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

  const viewResume = () => window.open("https://drive.google.com/file/d/1OQt0qM938zfhNhShFrN_pMuB5hu-jUiD/view?usp=sharing", "_blank");
  
  const downloadResume = () => {
    // Creating a direct link to download the file
    window.open("https://drive.google.com/uc?export=download&id=1OQt0qM938zfhNhShFrN_pMuB5hu-jUiD", "_blank");
  };
  

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto bg-[#0f172a] rounded-xl shadow-xl overflow-hidden relative border border-[#7dd3fc]/30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements with borders instead of fills */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 rounded-md border border-[#7dd3fc]/40 -z-10"
        variants={rotateVariants}
        animate="rotate"
      />
      <motion.div 
        className="absolute bottom-32 left-24 w-24 h-24 rounded-full border border-[#22d3ee]/40 -z-10"
        variants={pulseVariants}
        animate="pulse"
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full border border-[#7dd3fc]/30 -z-10"
        variants={floatingHorizontalVariants}
        animate="float"
      />
      <motion.div 
        className="absolute top-3/4 right-1/2 w-6 h-6 rotate-45 border border-[#22d3ee]/40 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-[#7dd3fc]/40 rounded-lg -z-10"
        variants={pulseVariants}
        animate="pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="flex flex-col md:flex-row">
        {/* Left Column - Slightly darker blue background */}
        <motion.div 
          className="w-full md:w-2/5 bg-gradient-to-br from-[#0c4a6e] to-[#164e63] p-8 border-r border-[#7dd3fc]/20"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#06b6d4]/20 border border-[#7dd3fc]/30 flex items-center justify-center">
                <FileText size={48} className="text-[#7dd3fc]" />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center text-[#bae6fd]">Bhoomi Garg</h2>
            <p className="text-lg mb-6 text-center text-[#93c5fd]">Computer Science and Design Student</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-[#93c5fd] hover:text-[#7dd3fc] transition-colors">
                <Mail size={16} />
                <span>gargbhoomi01@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 pt-6 border-t border-[#7dd3fc]/20"
            variants={itemVariants}
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-[#bae6fd]">
              <Award size={18} className="text-[#7dd3fc]" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", 
                "C++", "Python", "IOT", "Data Structures and Algorithms", 
                "Problem Solving", "Computer Networking", "Git", "OOPS"
              ].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-[#0284c7]/20 to-[#0369a1]/20 border border-[#7dd3fc]/30 rounded-full text-[#c9e3f0] hover:bg-[#7dd3fc]/20 hover:text-[#e0f2fe] transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Lighter blue background */}
        <motion.div 
          className="w-full md:w-3/5 bg-gradient-to-br from-[#082f49] to-[#0f172a] p-8"
          variants={itemVariants}
        >
          <motion.h1 className="text-3xl font-bold mb-2 text-[#bae6fd]" variants={itemVariants}>
            Professional Resume
          </motion.h1>
          <motion.p className="text-[#93c5fd] mb-8" variants={itemVariants}>
            Interactive preview of my qualifications and experience
          </motion.p>

          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-[#7dd3fc]" />
              <h2 className="text-xl font-semibold text-[#bae6fd]">Education</h2>
            </div>

            <div className="border-l-2 border-[#7dd3fc] pl-4 mb-6">
              <h3 className="font-semibold text-[#bae6fd]">
                Madhav Institute of Technology and Science, Gwalior
              </h3><br/>
              <p className="text-sm text-[#93c5fd]">
                B.Tech in Computer Science and Design
              </p>
              <p className="text-sm text-[#93c5fd]">
                Semester 6 
              </p>
              <p className="text-sm text-[#93c5fd]">
                Graduating: 2026
              </p>
              <p className="text-sm text-[#38bdf8] mt-1">
                Current CGPA: 8.95 (Highest in class)
              </p>
            </div>

            <div className="border-l-2 border-[#7dd3fc]/50 pl-4">
              <h3 className="font-semibold text-[#bae6fd]">Class 12th - CBSE</h3><br/>
              <p className="text-sm text-[#93c5fd]">Percentage: 93.6% </p>
              <p className="text-sm text-[#93c5fd]">Year: 2021</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-4 mt-10"
            variants={itemVariants}
          >
            <motion.button
              className="flex-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:from-[#38bdf8] hover:to-[#22d3ee] text-[#0f172a] py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={viewResume}
            >
              <ExternalLink size={18} />
              View Resume Online
            </motion.button>

            <motion.button
              className="flex-1 bg-transparent border-2 border-[#7dd3fc] text-[#7dd3fc] hover:bg-[#7dd3fc]/10 py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors duration-300"
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

      {/* Floating decorative elements with borders */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full border border-[#7dd3fc]/40 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '0.5s' }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full border border-[#22d3ee]/40 -z-10"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '1s' }}
      />
    </motion.div>
  );
}