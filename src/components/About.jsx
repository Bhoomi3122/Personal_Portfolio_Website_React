import { motion } from "framer-motion";
import { useState } from "react";
import { FaCode } from 'react-icons/fa'; // Use a coding-related icon for GeeksforGeeks
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon from React Icons
import { FaHackerrank } from 'react-icons/fa'; 

// Import icons from lucide-react
import { 
  Code, 
  Quote, 
  Coffee, 
  Zap, 
  Palette, 
  Github, 
  Linkedin, 
  Laptop, 
  Target,
  Star,
  Brain,
  Users,
  FileCode,
  Sparkles,
  PlayCircle,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const floatingHorizontalVariants = {
  animate: {
    x: [0, 15, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const rotatingVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const orbitVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const starVariants = {
  animate: {
    scale: [0.8, 1, 0.8],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export default function AboutMeSection() {
  // Platform links
  const platforms = [
    {
      name: "GeeksforGeeks",
      icon: <FaCode className="w-6 h-6" />,
      color: "text-sky-400",
      bgColor: "bg-slate-800",
      hoverColor: "hover:bg-slate-700",
      borderColor: "border-sky-400/30",
      link: "https://www.geeksforgeeks.org/user/gargbhow8ef/?ref=header_profile"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-6 h-6" />,
      color: "text-cyan-400",
      bgColor: "bg-slate-800",
      hoverColor: "hover:bg-slate-700",
      borderColor: "border-cyan-400/30",
      link: "https://leetcode.com/u/Bhoomi_3122/"
    },
    {
      name: "HackerRank",
      icon: <FaHackerrank className="w-6 h-6" />,
      color: "text-sky-300",
      bgColor: "bg-slate-800",
      hoverColor: "hover:bg-slate-700",
      borderColor: "border-sky-300/30",
      link: "https://www.hackerrank.com/profile/gargbhoomi01"
    },
    {
      name: "GitHub",
      icon: <Github />,
      color: "text-slate-200",
      bgColor: "bg-slate-800",
      hoverColor: "hover:bg-slate-700",
      borderColor: "border-slate-200/30",
      link: "https://github.com/Bhoomi3122"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      color: "text-sky-400",
      bgColor: "bg-slate-800",
      hoverColor: "hover:bg-slate-700",
      borderColor: "border-sky-400/30",
      link: "https://www.linkedin.com/in/bhoomi-garg-244b52219/"
    }
  ];

  // Fun facts with enhanced styling
  const funFacts = [
    { 
      icon: <PlayCircle size={20} />, 
      text: "Watching a website finally work > Watching movies",
      color: "bg-sky-400",
      bgStart: "from-slate-800",
      bgEnd: "to-slate-900"
    },
    { 
      icon: <Zap size={20} />, 
      text: "Debugging > Writing code",
      color: "bg-cyan-400",
      bgStart: "from-slate-800",
      bgEnd: "to-slate-900"
    },
    { 
      icon: <Palette size={20} />, 
      text: "UI > Everything",
      color: "bg-sky-300",
      bgStart: "from-slate-800",
      bgEnd: "to-slate-900"
    },
    { 
      icon: <Laptop size={20} />, 
      text: "Loves building cool projects",
      color: "bg-cyan-300",
      bgStart: "from-slate-800",
      bgEnd: "to-slate-900"
    }
  ];

  // Personality traits with icons
  const traits = [
    { 
      icon: <Brain size={18} />, 
      text: "Once I start something, I have to finish it — quitting is not in my vocabulary.",
      color: "text-sky-400" 
    },
    { 
      icon: <FileCode size={18} />, 
      text: "Hardworking? More like can’t-stop-won’t-stop till it’s perfect.",
      color: "text-cyan-400" 
    },
    { 
      icon: <Users size={18} />, 
      text: "Natural leader alert  — I love being the one who gets the team hyped and moving!",
      color: "text-sky-300" 
    }
  ];

  // Animation states for fun facts
  const [hoveredFactIndex, setHoveredFactIndex] = useState(null);

  return (
    <motion.div
      className="relative w-full mx-auto overflow-hidden p-6 md:p-10 bg-slate-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-80 h-80 rounded-full bg-gradient-to-r from-sky-300 to-cyan-300 blur-3xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-96 h-96 rounded-full bg-gradient-to-r from-sky-300 to-cyan-400 blur-3xl"
        />
      </div>
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-sky-400 rounded-lg opacity-30 -z-10"
        variants={rotatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-cyan-300 rounded-full opacity-30 -z-10"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-12 h-12 bg-cyan-400 rounded-md rotate-45 opacity-20 -z-10"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-sky-300 rounded-full opacity-20 -z-10"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Section title */}
      <motion.div 
        className="flex items-center gap-3 mb-6" 
        variants={itemVariants}
      >
        <motion.div 
          className="p-2 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-lg shadow-md"
          whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
        >
          <Code size={24} className="text-slate-900" />
        </motion.div>
        <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
      </motion.div>

      {/* Introduction paragraph */}
      <motion.div 
        className="mb-8" 
        variants={itemVariants}
      >
        <p className="text-lg text-slate-300 leading-relaxed">
        I am a 3rd-year Computer Science and Design student at MITS-DU Gwalior, passionate about web development, data structures, and solving real-world problems while continuously growing my skills in the tech world.
        </p>
      </motion.div>

      {/* Quote section */}
      <motion.div 
        className="mb-10 bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-lg border-l-4 border-sky-400 shadow-sm relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-start gap-3 relative z-10">
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Quote className="text-sky-400 flex-shrink-0 mt-1" />
          </motion.div>
          <p className="text-slate-300 italic font-serif">
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
        </div>
        
        {/* Decorative elements in quote */}
        <motion.div 
          className="absolute -right-4 -bottom-4 w-24 h-24 bg-sky-400 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-1/4 top-0 w-4 h-4 bg-cyan-400 rounded-full opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Two column layout for mobile responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          {/* Coding platforms section */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4 border-b border-slate-700 pb-2">
              Find me on
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.link}
                  className={`flex items-center gap-2 p-3 ${platform.bgColor} ${platform.hoverColor} border ${platform.borderColor} rounded-lg transition-colors duration-300`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div 
                    className={`${platform.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {platform.icon}
                  </motion.div>
                  <span className="font-medium text-slate-200 text-sm">{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Fun facts section - ENHANCED */}
          <motion.div variants={itemVariants} className="relative">
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Sparkles className="text-sky-400" size={20} />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-100 border-b border-slate-700 pb-2 flex-grow">
                Fun Facts
              </h3>
            </div>

            {/* Orbiting star around fun facts */}
            <motion.div 
              className="absolute -z-10 opacity-70"
              style={{ width: '100%', height: '100%', top: 30, left: 0 }}
              variants={orbitVariants}
              animate="animate"
            >
              <motion.div 
                className="absolute w-6 h-6"
                style={{ top: '10%', left: '80%' }}
                variants={starVariants}
                animate="animate"
              >
                <Star size={24} className="text-sky-300" />
              </motion.div>
            </motion.div>
            
            <div className="space-y-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 p-4 bg-gradient-to-r ${fact.bgStart} ${fact.bgEnd} rounded-lg relative overflow-hidden border border-slate-700`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
                    y: -3
                  }}
                  onHoverStart={() => setHoveredFactIndex(index)}
                  onHoverEnd={() => setHoveredFactIndex(null)}
                >
                  <motion.div 
                    className={`p-2 ${fact.color} rounded-full shadow-md text-slate-900`}
                    animate={{ rotate: hoveredFactIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {fact.icon}
                  </motion.div>
                  <span className="text-slate-300 font-medium">{fact.text}</span>

                  {/* Background decorative elements for fun facts */}
                  <motion.div 
                    className="absolute -right-2 -bottom-2 w-12 h-12 bg-sky-400 rounded-full opacity-10"
                    animate={{ 
                      scale: hoveredFactIndex === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 1.5, repeat: hoveredFactIndex === index ? Infinity : 0 }}
                  />
                  <motion.div 
                    className="absolute right-1/4 top-0 w-3 h-3 bg-cyan-400 rounded-full opacity-20"
                    animate={{ 
                      y: hoveredFactIndex === index ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 2, repeat: hoveredFactIndex === index ? Infinity : 0 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Right column */}
        <div>
          {/* Personality traits - ENHANCED */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, -10, 0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Brain className="text-sky-400" size={20} />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-100 border-b border-slate-700 pb-2 flex-grow">
                Personality
              </h3>
            </div>
            
            {/* Orbiting elements around personality */}
            <motion.div 
              className="absolute -z-10 w-full h-full top-0 left-0"
              variants={orbitVariants}
              animate="animate"
              style={{ animationDirection: "reverse" }}
            >
              <motion.div 
                className="absolute w-4 h-4 bg-sky-400 rounded-full opacity-20"
                style={{ top: '30%', right: '10%' }}
              />
            </motion.div>
            
            <ul className="space-y-4">
              {traits.map((trait, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                    borderColor: "rgb(125, 211, 252, 0.3)" 
                  }}
                >
                  <motion.div 
                    className={`${trait.color}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {trait.icon}
                  </motion.div>
                  <span className="text-slate-300">{trait.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Goals section - ENHANCED */}
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-sm relative overflow-hidden border border-slate-700"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)",
              borderColor: "rgb(125, 211, 252, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-cyan-400"
              >
                <Target size={22} />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-100">Current Goals</h3>
            </div>
            
            <p className="text-slate-300 relative z-10">
            Currently aiming to kickstart my career with a well-established tech company where I can grow every day by learning new skills and applying the ones I’ve already built along the way.
            </p>
            
            {/* Decorative elements for goals section */}
            <motion.div
              className="absolute -right-10 -bottom-10 w-40 h-40 bg-sky-400 rounded-full opacity-10 -z-0"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute right-1/4 top-1/4 w-6 h-6 border-2 border-cyan-400 rounded-full opacity-20 -z-0"
              animate={{ 
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute left-1/4 bottom-1/4 w-8 h-8 bg-slate-700 rounded-md rotate-45 opacity-40 -z-0"
              animate={{ 
                rotate: [45, 90, 45],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Additional floating decorative elements */}
      <motion.div 
        className="absolute top-1/5 left-1/5 w-5 h-5"
        variants={floatingHorizontalVariants}
        animate="animate"
        style={{ zIndex: -1 }}
      >
        <Star size={20} className="text-sky-300 opacity-60" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-cyan-400 rounded-full opacity-30"
        variants={floatingVariants}
        animate="animate"
        style={{ zIndex: -1 }}
      />
      
      <motion.div 
        className="absolute top-3/4 right-1/3 w-10 h-10"
        variants={rotatingVariants}
        animate="animate"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full border-2 border-sky-400 rounded-md opacity-20 rotate-45" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-2/3 w-6 h-6"
        variants={pulseVariants}
        animate="animate"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full bg-cyan-300 rounded-full opacity-30" />
      </motion.div>
    </motion.div>
  );
}