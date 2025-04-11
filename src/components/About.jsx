import { motion } from "framer-motion";
import { useState } from "react";

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
  Sparkles
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
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.99 19.391a1.478 1.478 0 1 1-2.958 0 1.478 1.478 0 0 1 2.958 0zM11.995 0C5.381 0 0 5.382 0 11.996c0 6.614 5.381 11.996 11.995 11.996 6.613 0 11.995-5.382 11.995-11.996C23.99 5.382 18.608 0 11.995 0zm0 4.588c.365 0 .642.278.64.644v6.883c0 .364-.275.644-.64.644a.642.642 0 0 1-.64-.644V5.232c0-.366.275-.644.64-.644zm6.934 15.353H5.072c-.55 0-.737-.111-.737-.703 0-.592.187-.739.737-.739h13.857c.55 0 .737.146.737.739 0 .592-.187.703-.737.703zM5.63 8.269h12.733c.55 0 .742.148.742.74 0 .593-.192.704-.742.704h-5.04v6.209c0 .363-.292.644-.658.644-.365 0-.657-.28-.657-.644V9.713H5.63c-.55 0-.742-.111-.742-.704 0-.592.192-.74.742-.74z" />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      borderColor: "border-green-200",
      link: "#"
    },
    {
      name: "LeetCode",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.374 1.374 0 0 0 0 1.944l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 .961.438h9.944a1.374 1.374 0 0 0 1.373-1.375V1.375A1.374 1.374 0 0 0 23.427 0H13.483zm-2.866 12.814a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04zm6.589 0a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04zm2.068-4.227a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04z" />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      borderColor: "border-orange-200",
      link: "#"
    },
    {
      name: "HackerRank",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.086 0-.178.045-.226.109L7.076 6.43c-.045.046-.078.107-.078.176 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .176-.045.225-.109l1.593-1.51c.045-.045.08-.104.08-.175 0-.143-.115-.258-.258-.258h-.7v-9.9c0-.143-.115-.26-.257-.26h-1.515z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      borderColor: "border-blue-200",
      link: "#"
    },
    {
      name: "GitHub",
      icon: <Github />,
      color: "text-gray-800",
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
      borderColor: "border-gray-200",
      link: "#"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      borderColor: "border-blue-200",
      link: "#"
    }
  ];

  // Fun facts with enhanced styling
  const funFacts = [
    { 
      icon: <Coffee size={20} />, 
      text: "Runs on chai",
      color: "bg-amber-500",
      bgStart: "from-amber-100",
      bgEnd: "to-orange-50"
    },
    { 
      icon: <Zap size={20} />, 
      text: "Debugging > Writing code",
      color: "bg-blue-500",
      bgStart: "from-blue-100",
      bgEnd: "to-cyan-50"
    },
    { 
      icon: <Palette size={20} />, 
      text: "UI > Everything",
      color: "bg-purple-500",
      bgStart: "from-purple-100",
      bgEnd: "to-pink-50"
    },
    { 
      icon: <Laptop size={20} />, 
      text: "Loves building cool projects",
      color: "bg-emerald-500",
      bgStart: "from-emerald-100",
      bgEnd: "to-green-50"
    }
  ];

  // Personality traits with icons
  const traits = [
    { 
      icon: <Brain size={18} />, 
      text: "Creative + Analytical mindset",
      color: "text-indigo-500" 
    },
    { 
      icon: <FileCode size={18} />, 
      text: "Curious about both frontend design and backend logic",
      color: "text-purple-500" 
    },
    { 
      icon: <Users size={18} />, 
      text: "Enjoys collaborating on projects and writing clean code",
      color: "text-blue-500" 
    }
  ];

  // Animation states for fun facts
  const [hoveredFactIndex, setHoveredFactIndex] = useState(null);

  return (
    <motion.div
      className="relative max-w-4xl mx-auto overflow-hidden bg-white rounded-xl shadow-xl p-6 md:p-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 blur-3xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 blur-3xl"
        />
      </div>
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-indigo-200 rounded-lg opacity-30 -z-10"
        variants={rotatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-blue-300 rounded-full opacity-30 -z-10"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-12 h-12 bg-teal-200 rounded-md rotate-45 opacity-20 -z-10"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300 rounded-full opacity-20 -z-10"
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
          className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-md"
          whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
        >
          <Code size={24} className="text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
      </motion.div>

      {/* Introduction paragraph */}
      <motion.div 
        className="mb-8" 
        variants={itemVariants}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a 3rd-year Computer Science and Design student at MITS Gwalior, passionate about full-stack development, solving real-world problems with code, and continuously learning new technologies.
        </p>
      </motion.div>

      {/* Quote section */}
      <motion.div 
        className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500 shadow-sm relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-start gap-3 relative z-10">
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Quote className="text-indigo-500 flex-shrink-0 mt-1" />
          </motion.div>
          <p className="text-gray-700 italic font-serif">
            "Code is not just instructions to a machine, it's a reflection of how we think."
          </p>
        </div>
        
        {/* Decorative elements in quote */}
        <motion.div 
          className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-1/4 top-0 w-4 h-4 bg-indigo-300 rounded-full opacity-30"
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
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
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
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
                  <span className="font-medium text-gray-800 text-sm">{platform.name}</span>
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
                <Sparkles className="text-amber-500" size={20} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
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
                <Star size={24} className="text-amber-400" />
              </motion.div>
            </motion.div>
            
            <div className="space-y-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 p-4 bg-gradient-to-r ${fact.bgStart} ${fact.bgEnd} rounded-lg relative overflow-hidden`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
                    y: -3
                  }}
                  onHoverStart={() => setHoveredFactIndex(index)}
                  onHoverEnd={() => setHoveredFactIndex(null)}
                >
                  <motion.div 
                    className={`p-2 ${fact.color} rounded-full shadow-md text-white`}
                    animate={{ rotate: hoveredFactIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {fact.icon}
                  </motion.div>
                  <span className="text-gray-700 font-medium">{fact.text}</span>

                  {/* Background decorative elements for fun facts */}
                  <motion.div 
                    className="absolute -right-2 -bottom-2 w-12 h-12 bg-white rounded-full opacity-30"
                    animate={{ 
                      scale: hoveredFactIndex === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 1.5, repeat: hoveredFactIndex === index ? Infinity : 0 }}
                  />
                  <motion.div 
                    className="absolute right-1/4 top-0 w-3 h-3 bg-white rounded-full opacity-40"
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
                <Brain className="text-purple-500" size={20} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
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
                className="absolute w-4 h-4 bg-purple-300 rounded-full opacity-40"
                style={{ top: '30%', right: '10%' }}
              />
            </motion.div>
            
            <ul className="space-y-4">
              {traits.map((trait, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
                    backgroundColor: "#F9FAFB" 
                  }}
                >
                  <motion.div 
                    className={`${trait.color}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {trait.icon}
                  </motion.div>
                  <span className="text-gray-700">{trait.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Goals section - ENHANCED */}
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-50 rounded-lg shadow-sm relative overflow-hidden"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)"
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
                className="text-blue-600"
              >
                <Target size={22} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800">Current Goals</h3>
            </div>
            
            <p className="text-gray-700 relative z-10">
              Currently aiming for a software engineering internship in a top tech company where I can apply my skills, grow as a developer, and contribute to meaningful products.
            </p>
            
            {/* Decorative elements for goals section */}
            <motion.div
              className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 -z-0"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute right-1/4 top-1/4 w-6 h-6 border-2 border-indigo-300 rounded-full opacity-30 -z-0"
              animate={{ 
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute left-1/4 bottom-1/4 w-8 h-8 bg-indigo-100 rounded-md rotate-45 opacity-40 -z-0"
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
        <Star size={20} className="text-amber-300 opacity-60" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-blue-300 rounded-full opacity-30"
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
        <div className="w-full h-full border-2 border-purple-200 rounded-md opacity-30 rotate-45" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-2/3 w-6 h-6"
        variants={pulseVariants}
        animate="animate"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full bg-green-200 rounded-full opacity-40" />
      </motion.div>
    </motion.div>
  );
}