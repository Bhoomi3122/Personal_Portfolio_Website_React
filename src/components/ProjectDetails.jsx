import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../assets/projects.json";
import { FaArrowLeft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import TechIcon from "../components/TechIcon";

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects } = projectsData;
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0f172a] text-[#f1f5f9]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/projects" className="text-[#7dd3fc] hover:text-[#22d3ee]">
            Go back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 text-[#d1d5db] bg-[#0f172a] min-h-screen"
    >
      <Link to="/projects">
        <motion.div
          whileHover={{ x: -5 }}
          className="flex items-center text-[#7dd3fc] mb-6 hover:text-[#22d3ee]"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Projects</span>
        </motion.div>
      </Link>

      <div className="bg-[#1e293b] rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-2xl font-bold text-[#f1f5f9] flex items-center gap-2">
              {project.title}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7dd3fc] hover:text-[#22d3ee] text-xl"
                  title="View Demo"
                >
                  <FiExternalLink />
                </a>
              )}
            </h1>
          </motion.div>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 ${project.status === "Completed"
                ? "bg-green-500 text-white"
                : "bg-yellow-500 text-white"
              }`}
          >
            {project.status}
          </span>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-[#f1f5f9] mb-4">About This Project</h2>
            <p className="text-[#d1d5db] text-md leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-[#f1f5f9] mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-6">
              {project.techStack.map((tech, index) => (
                <div key={index} className="text-white opacity-70">
                  <TechIcon tech={tech} delay={index * 0.1} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-[#f1f5f9] mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#7dd3fc]/20 text-[#7dd3fc] text-xs font-semibold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-[#d1d5db]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
