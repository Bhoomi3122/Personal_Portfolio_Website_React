import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projectsData from "./projects.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { projects } = projectsData;
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.status.toLowerCase() === filter);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4 text-[#b1ddf2]"
      >
        My Projects
      </motion.h1>
      <motion.div
  className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] via-40% via-[#f9a8d4] to-[#22d3ee]"
  initial={{ width: 0 }}
  animate={{ width: "6rem" }}
  transition={{ delay: 0.4, duration: 1 }}
/>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-center text-text-color mb-8 max-w-2xl mx-auto"
      >
        Explore my latest work and side projects that showcase my skills and passion for development.
      </motion.p>
      
      <div className="flex justify-center mb-8" id="projects">
  <div className="inline-flex rounded-full bg-primary-dark p-1 shadow-md">
    {["all", "completed", "pending"].map((type, index) => (
      <button
        key={index}
        onClick={() => setFilter(type)}
        className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out cursor-pointer overflow-hidden
          ${filter === type
            ? "text-white z-10"
            : "text-blue-200 dark:text-blue-300"
          }`}
      >
        {/* Animated Gradient Background */}
        {filter === type && (
          <motion.div
            layoutId="activeProjectTab"
            className="absolute inset-0 rounded-full z-0 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
        <span className="relative z-10 capitalize">{type}</span>
      </button>
    ))}
  </div>
</div>


      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;